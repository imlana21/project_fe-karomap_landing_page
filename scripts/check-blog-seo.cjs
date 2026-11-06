const assert = require('node:assert/strict');
const fs = require('node:fs');
const Module = require('node:module');
const ts = require('typescript');
const { spawn } = require('node:child_process');
function load(file, mocks = {}) {
  const mod = new Module(require('node:path').resolve(file), module);
  mod.paths = module.paths;
  mod.require = (name) => name in mocks ? mocks[name] : require(name);
  mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText, file);
  return mod.exports;
}
async function main() {
  const html = load('lib/blog-html.ts');
  assert.equal(html.blogText('<p>A &amp; B</p><script>bad()</script><style>bad</style><p>C&nbsp;D</p>'), 'A & B C D');
  assert.equal(html.blogText('&lt;img onerror=x&gt;'), '<img onerror=x>');
  assert.equal(html.serializeJsonLd({ text: '</script><script>' }), '{"text":"\\u003c/script>\\u003cscript>"}');
  const calls = [];
  let response;
  const blog = load('lib/blog.ts', { react: { cache: (fn) => fn }, 'next/server': { connection: async () => {} }, '@/lib/api': { get: async (_, options) => { calls.push(options.params); if (response instanceof Error) throw response; return { data: response }; } } });
  for (const value of [undefined, '-1', '0', '1.5', 'abc', ['2'], '9007199254740991']) assert.equal(blog.blogPage(value), 1);
  assert.equal(blog.blogPage('2'), 2);
  const post = { id: 1, slug: 'fixture', title: 'Fixture', body: '<p>Body</p>', description: '', featured_image: '', author: {}, categories: [], tags: [], published: true, type: 'blogs' };
  response = { count: 7, results: [post], next: 'next' };
  assert.equal((await blog.getArticle('fixture')).post.slug, 'fixture');
  assert.equal(calls.length, 1);
  await blog.getBlogPage(6, 6);
  assert.deepEqual(calls.at(-1), { limit: 6, offset: 6, type: 'blogs' });
  response = { count: 0, results: [], next: null };
  assert.equal((await blog.getArticle('missing')).post, undefined);
  response = { count: 1, results: [], next: 'next' };
  await assert.rejects(blog.getArticle('missing'), /Invalid blog/);
  response = new Error('offline');
  await assert.rejects(blog.getArticle('missing'), /offline/);
  const Content = load('app/blog/partials/BlogContent.tsx', { '@/lib/blog-html': html, '@/lib/blog': { ...blog, getBlogPage: async () => ({ count: 13, results: [post] }) }, '@/components/ui/card': { Card: 'div', CardContent: 'div' } }).default;
  const { renderToStaticMarkup } = require('react-dom/server');
  const middle = renderToStaticMarkup(await Content({ searchParams: Promise.resolve({ page: '2' }) }));
  assert.match(middle, /rel="prev"[^>]*href="\/blog"/);
  assert.match(middle, /rel="next"[^>]*href="\/blog\?page=3"/);
  const first = renderToStaticMarkup(await Content({ searchParams: Promise.resolve({}) }));
  assert.doesNotMatch(first, /rel="prev"/);
  const last = renderToStaticMarkup(await Content({ searchParams: Promise.resolve({ page: '3' }) }));
  assert.doesNotMatch(last, /rel="next"/);
  console.log('PASS text safety, page validation, API offsets/errors/missing, stop-early loader, first/middle/last pagination');
  if (process.argv.includes('--unit')) return;
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3217'], { stdio: 'pipe' });
  server.stderr.on('data', () => {});
  server.stdout.on('data', () => {});
  const origin = 'http://localhost:3217';
  try {
    for (let i = 0; i < 60; i++) {
      try { if ((await fetch(origin)).ok) break; } catch {}
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    const get = (path) => fetch(origin + path, { headers: { 'user-agent': 'facebookexternalhit/1.1' } });
    const list = await get('/blog');
    assert.equal(list.status, 200);
    const listing = await list.text();
    const slugs = [...new Set([...listing.matchAll(/href="(\/blog\/[^"?]+)"/g)].map((m) => m[1]))];
    assert.ok(slugs.length >= 2, 'server HTML contains article links');
    const titles = [];
    for (const path of slugs.slice(0, 2)) {
      const res = await get(path); assert.equal(res.status, 200);
      const text = await res.text();
      titles.push(text.match(/<title>(.*?)<\/title>/)[1]);
      assert.ok(text.includes(`rel="canonical" href="https://www.karomap.com${path}"`));
      assert.match(text, /name="description" content="[^"]+"/);
      assert.match(text, /property="og:type" content="article"/);
      assert.match(text, /property="og:image"/);
      assert.match(text, /name="twitter:card"/);
      assert.equal((text.match(/<h1[ >]/g) || []).length, 1);
      const schemas = [...text.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
      assert.ok(schemas.some((schema) => schema['@graph']?.some((item) => item['@type'] === 'BlogPosting')));
      assert.ok(schemas.some((schema) => schema['@graph']?.some((item) => item['@type'] === 'BreadcrumbList')));
    }
    assert.notEqual(titles[0], titles[1]);
    const missing = await get('/blog/check-missing-article-12345');
    const missingHtml = await missing.text();
    assert.ok(missing.status === 404 || missingHtml.includes('noindex'), 'missing article is not indexable');
    const out = await get('/blog?page=999999');
    const outHtml = await out.text();
    assert.ok(out.status === 404 || outHtml.includes('noindex'));
    for (const dead of ['/efisiensi-dan-transparansi-data', '/jalan-dan-jembatan', '/keselamatan-kerja-dan-asset', '/pdam']) assert.ok(!listing.includes(`href="${dead}"`));
    console.log(`PASS production HTML: ${slugs.length} article links; unique metadata/canonical/OG; missing=${missing.status}; out-of-range=${out.status}; dead links absent`);
  } finally { server.kill(); }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
