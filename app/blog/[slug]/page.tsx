import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/blog";
import { siteConfig } from "@/stores/static/config";
import { CalendarDays, MessageCircle, UserRound } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { PageContainer } from "@/components/site/PageContainer";
import { PageHero } from "@/components/site/PageHero";
import { blogText, mediaUrl, sanitizeBlogHtml } from "@/lib/blog-html";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let result;
  try {
    result = await getArticle(slug);
  } catch {
    return { title: "Artikel belum dapat dimuat", robots: { index: false } };
  }
  const { post } = result;
  if (!post) notFound();
  const description = blogText(post.description || post.body).slice(0, 160) || post.title;
  const url = `${siteConfig.url}/blog/${encodeURIComponent(post.slug)}`;
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article", title: post.title, description, url, siteName: siteConfig.brand,
      ...(post.featured_image ? { images: [{ url: mediaUrl(post.featured_image), alt: post.title }] } : {}),
    },
  };
}
type Props = { params: Promise<{ slug: string }> };
const panel = "rounded-md bg-white p-6 shadow-[0_10px_35px_rgba(31,41,55,.10)]";
const dateFormat = new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone: "Asia/Jakarta" });
function dateLabel(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : dateFormat.format(date);
}

async function Article({ params }: Props) {
  const { slug } = await params;
  let result;
  try {
    result = await getArticle(slug);
  } catch {
    return <div role="alert" className={panel}>
      <h2 className="text-xl font-semibold">Artikel belum dapat dimuat</h2>
      <p className="mt-3 text-slate-500">Layanan artikel sedang tidak tersedia. Silakan muat ulang halaman atau coba lagi nanti.</p>
      <Link href="/blog" className="mt-5 inline-block text-(--brand) underline">Kembali ke artikel</Link>
    </div>;
  }
  const { post, posts } = result;
  if (!post) notFound();
  const recent = [...posts].sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at)).filter((item) => item.slug !== slug).slice(0, 3);
  const categories = [...new Map(posts.flatMap((item) => item.categories).map((item) => [item.id, item])).values()];
  const tags = [...new Map(posts.flatMap((item) => item.tags).map((item) => [item.id, item])).values()];

  return <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
    <article className="min-w-0 overflow-hidden rounded-md bg-white shadow-[0_10px_35px_rgba(31,41,55,.10)]">
      {post.featured_image && <div className="relative aspect-16/10 bg-slate-100">
        <Image src={mediaUrl(post.featured_image)} alt={post.title} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover" />
      </div>}
      <div className="p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap gap-2">{post.categories.map((category) => <span key={category.id} className="rounded bg-orange-50 px-3 py-1 text-xs font-medium text-(--brand)">{category.title}</span>)}</div>
        <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">{post.title}</h2>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2"><UserRound className="size-4" aria-hidden="true" />{[post.author.first_name, post.author.last_name].filter(Boolean).join(" ") || post.author.username}</span>
          <time dateTime={post.published_at} className="inline-flex items-center gap-2"><CalendarDays className="size-4" aria-hidden="true" />{dateLabel(post.published_at)}</time>
          <span className="inline-flex items-center gap-2"><MessageCircle className="size-4" aria-hidden="true" />{post.comment_count} komentar</span>
        </div>
        <div className="mt-8 wrap-break-word text-base leading-8 text-slate-600 [&_a]:text-(--brand) [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-orange-200 [&_blockquote]:pl-5 [&_h2]:my-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:my-5 [&_h3]:text-xl [&_h3]:font-semibold [&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full [&_li]:my-2 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-5 [&_pre]:overflow-x-auto [&_strong]:font-semibold [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6" dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.body) }} />
        {post.tags.length > 0 && <div className="mt-8 flex flex-wrap items-center gap-2 border-t pt-6"><span className="mr-2 text-sm font-semibold">Tags:</span>{post.tags.map((tag) => <span key={tag.id} className="rounded border px-3 py-1 text-xs text-slate-500">{tag.title}</span>)}</div>}
        <p className="mt-8 border-t pt-6 text-sm text-slate-500">{post.comment_count} komentar · Fitur komentar akan tersedia menyusul.</p>
      </div>
    </article>
    <aside className="space-y-7" aria-label="Sidebar artikel">
      <section className={panel}>
        <h2 className="text-lg font-semibold">Search</h2>
        <p className="mt-4 text-sm leading-6 text-slate-500">Pencarian artikel belum tersedia.</p>
        <Link href="/blog" className="mt-3 inline-block text-sm text-(--brand) underline">Lihat semua artikel</Link>
      </section>
      <section className={panel}>
        <h2 className="mb-5 text-lg font-semibold">Categories</h2>
        <ul className="divide-y">{categories.map((category) => <li key={category.id} className="py-3 text-sm text-slate-500">{category.title}</li>)}</ul>
        {!categories.length && <p className="text-sm text-slate-500">Belum ada kategori.</p>}
      </section>
      <section className={panel}>
        <h2 className="mb-5 text-lg font-semibold">Recent Post</h2>
        <ul className="space-y-5">{recent.map((item) => <li key={item.id}>
          <Link href={`/blog/${encodeURIComponent(item.slug)}`} className="group flex items-start gap-4">
            {item.featured_image && <div className="relative size-18 shrink-0 overflow-hidden rounded bg-slate-100"><Image src={mediaUrl(item.featured_image)} alt="" fill sizes="72px" className="object-cover" /></div>}
            <div><h3 className="text-sm font-medium leading-6 group-hover:text-(--brand)">{item.title}</h3><time dateTime={item.published_at} className="mt-1 block text-xs text-slate-400">{dateLabel(item.published_at)}</time></div>
          </Link>
        </li>)}</ul>
        {!recent.length && <p className="text-sm text-slate-500">Belum ada artikel lainnya.</p>}
      </section>
      <section className={panel}>
        <h2 className="mb-5 text-lg font-semibold">Tags</h2>
        <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag.id} className="rounded border px-3 py-1.5 text-xs text-slate-500">{tag.title}</span>)}</div>
        {!tags.length && <p className="text-sm text-slate-500">Belum ada tag.</p>}
      </section>
    </aside>
  </div>;
}

export default function BlogDetailPage(props: Props) {
  return <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
    <Suspense fallback={<div className="h-20" />}><AppHeader active="blog" /></Suspense>
    <main>
      <PageHero title="Detail Artikel" current="Blog" />
      <section className="py-20 sm:py-28"><PageContainer>
        <Suspense fallback={<p role="status" className="py-12 text-slate-500">Memuat artikel…</p>}><Article {...props} /></Suspense>
      </PageContainer></section>
    </main>
    <AppFooter />
  </div>;
}
