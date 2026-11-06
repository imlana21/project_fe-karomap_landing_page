const assert = require('node:assert/strict');
const fs = require('node:fs');
const Module = require('node:module');
const ts = require('typescript');
function load(file, mocks = {}) {
  const mod = new Module(require('node:path').resolve(file), module);
  mod.paths = module.paths;
  mod.require = (name) => name in mocks ? mocks[name] : require(name);
  mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText, file);
  return mod.exports;
}
async function main() {
  const config = load('stores/static/config.ts');
  const shared = { '@/stores/static/config': config };
  const layout = load('app/layout.tsx', { ...shared, './globals.css': {}, 'next/font/google': { Nunito: () => ({ variable: '' }), Geist_Mono: () => ({ variable: '' }) } });
  assert.equal(layout.metadata.metadataBase.href, 'https://www.karomap.com/');
  assert.equal(layout.metadata.alternates, undefined);
  assert.equal(layout.metadata.twitter.card, 'summary');
  const { renderToStaticMarkup } = require('react-dom/server');
  config.siteConfig.name = '</script><script>bad</script>';
  const html = renderToStaticMarkup(layout.default({ children: null }));
  assert.ok(html.includes('\\u003c/script>'));
  const organization = JSON.parse(html.match(/<script[^>]*>(.*?)<\/script>/)[1]);
  assert.equal(organization.telephone, '+622742820302');
  assert.equal(organization.email, config.siteConfig.email);
  assert.equal(load('app/robots.ts', shared).default().sitemap, 'https://www.karomap.com/sitemap.xml');
  const calls = [];
  let pages;
  const sitemap = load('app/sitemap.ts', { ...shared, 'next/server': { connection: async () => {} }, 'next/cache': { cacheLife: () => {} }, '@/lib/api': { get: async (_, options) => { calls.push(options.params); const data = pages.shift(); if (data instanceof Error) throw data; return { data }; } } }).default;
  const post = { slug: 'a', type: 'blogs', published: true, deleted_at: null, updated_at: '2021-09-08T13:25:59+07:00' };
  pages = [{ count: 4, next: 'next', results: [post, { ...post, slug: 'draft', published: false }] }, { count: 4, next: null, results: [post, { ...post, slug: 'b', updated_at: 'invalid' }] }];
  const entries = await sitemap();
  assert.equal(entries.length, 6);
  assert.equal(calls[1].offset, 2);
  assert.equal(entries[4].lastModified, '2021-09-08T06:25:59.000Z');
  assert.equal(entries[5].lastModified, undefined);
  assert.equal(entries[0].lastModified, undefined);
  for (const page of [new Error('offline'), { count: 1, next: null, results: [] }, { count: 1, next: null, results: [{ ...post, slug: '../bad' }] }]) {
    pages = [page];
    await assert.rejects(sitemap());
  }
  console.log('PASS metadata, Organization escaping/contact, robots, pagination, publication filtering, dedupe, dates, API failures');
  if (process.argv.includes('--live')) {
    const live = load('app/sitemap.ts', { ...shared, 'next/server': { connection: async () => {} }, 'next/cache': { cacheLife: () => {} }, '@/lib/api': load('lib/api.ts').default }).default;
    const actual = await live();
    console.log(JSON.stringify({ liveCount: actual.length, urls: actual.map((entry) => entry.url) }, null, 2));
    assert.ok(actual.length >= 4);
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
