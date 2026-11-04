import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  UserRound,
} from "lucide-react";
import AppHeader from "../../components/AppHeader";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PageContainer } from "@/components/site/page-container";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { blogPosts } from "@/stores/static/blog";

export const metadata: Metadata = {
  title: "Artikel | Karomap",
  description:
    "Artikel Karomap tentang GIS, WebGIS, inspeksi lapangan, dan pengelolaan data spasial.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <AppHeader active="blog" />

      <main>
        <PageHero title="Artikel" current="Blog" />

        <section className="py-20 sm:py-28">
          <PageContainer>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.slug}>
                  <Card className="group h-full overflow-hidden rounded-md border-0 bg-white p-0 shadow-[0_10px_35px_rgba(31,41,55,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,41,55,.15)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                    </Link>
                    <CardContent className="p-6">
                      <h2 className="min-h-14 text-lg font-medium leading-7">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition-colors hover:text-(--brand)"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="mt-5 flex items-center justify-between text-sm text-[#8295b0]">
                        <span className="flex items-center gap-1.5">
                          <MessageCircle className="size-4" />
                          {post.comments}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 font-medium transition-colors hover:text-(--brand)"
                        >
                          Read More
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-[#111827] px-6 py-3 text-xs text-white/80">
                      <span className="flex items-center gap-1.5">
                        <UserRound className="size-3.5" />
                        {post.author}
                      </span>
                      <time
                        dateTime={post.date}
                        className="flex items-center gap-1.5"
                      >
                        <CalendarDays className="size-3.5" />
                        {post.date}
                      </time>
                    </CardFooter>
                  </Card>
                </article>
              ))}
            </div>

            <nav className="mt-14 flex justify-center" aria-label="Pagination">
              <div className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                <button
                  type="button"
                  disabled
                  className="flex h-10 items-center gap-1 border-r px-4 text-sm text-[#9aa7b8] disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="size-4" />
                  Prev
                </button>
                <button
                  type="button"
                  aria-current="page"
                  className="grid size-10 place-items-center bg-(--brand) text-sm font-semibold text-white"
                >
                  1
                </button>
                <button
                  type="button"
                  className="flex h-10 items-center gap-1 border-l px-4 text-sm font-medium text-[#354052] hover:text-(--brand)"
                >
                  Next
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </nav>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
