import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogText, mediaUrl } from "@/lib/blog-html";
import { blogPage, getBlogPage, PAGE_SIZE } from "@/lib/blog";
import { notFound } from "next/navigation";

export function BlogSkeleton() {
return (
      <div role="status" aria-label="Memuat artikel" className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <span className="sr-only">Memuat artikel…</span>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} aria-hidden="true" className="overflow-hidden rounded-md border border-slate-100 motion-safe:animate-pulse">
            <div className="aspect-16/10 bg-slate-200" />
            <div className="space-y-4 p-6">
              <div className="h-6 w-4/5 rounded bg-slate-200" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 w-2/3 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    );
  }

export default async function BlogContent({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  const page = blogPage((await searchParams).page);
  let data;
  try {
    data = await getBlogPage(PAGE_SIZE, (page - 1) * PAGE_SIZE);
  } catch {
    return <p role="alert" className="py-12 text-center text-red-600">Artikel gagal dimuat. Silakan muat ulang halaman.</p>;
  }
  if (page > 1 && (page - 1) * PAGE_SIZE >= data.count) notFound();
  const posts = data.results;

  if (!posts.length) {
    return <p className="py-12 text-center text-slate-500">Belum ada artikel.</p>;
  }

  return (
    <>
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <article key={post.slug}>
          <Card className="group h-full overflow-hidden rounded-md border-0 bg-white p-0 shadow-[0_10px_35px_rgba(31,41,55,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,41,55,.15)]">
            <Link
              href={`/blog/${encodeURIComponent(post.slug)}`}
              className="relative block aspect-16/10 overflow-hidden bg-slate-100"
            >
              {post.featured_image && <Image
                src={mediaUrl(post.featured_image)}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority={index < 3}
              />}
              <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </Link>
            <CardContent className="p-6">
              <h2 className="min-h-14 text-lg font-medium leading-7">
                <Link
                  href={`/blog/${encodeURIComponent(post.slug)}`}
                  className="transition-colors hover:text-(--brand)"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                {blogText(post.body)}
              </p>
              <div className="mt-5 flex items-center justify-between text-sm text-[#8295b0]">
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="size-4" />
                  {post.comment_count}
                </span>
                <Link
                  href={`/blog/${encodeURIComponent(post.slug)}`}
                  className="flex items-center gap-1 font-medium transition-colors hover:text-(--brand)"
                >
                  Read More
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </article>
      ))}
    </div>
    <nav className="mt-14 flex items-center justify-center gap-4" aria-label="Pagination">
      {page > 1 ? <Link href={page === 2 ? "/blog" : `/blog?page=${page - 1}`} rel="prev" className="rounded border px-4 py-2 hover:text-(--brand)">Prev</Link> : <span aria-disabled="true" className="px-4 py-2 text-slate-400">Prev</span>}
      <span aria-current="page" className="rounded bg-(--brand) px-4 py-2 text-white">{page}</span>
      {page * PAGE_SIZE < data.count ? <Link href={`/blog?page=${page + 1}`} rel="next" className="rounded border px-4 py-2 hover:text-(--brand)">Next</Link> : <span aria-disabled="true" className="px-4 py-2 text-slate-400">Next</span>}
    </nav>
    </>
  );
}
