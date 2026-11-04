import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MessageCircle, UserRound } from "lucide-react";
import Header from "../header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { blogPosts } from "@/stores/static/blog";

export const metadata: Metadata = {
  title: "Artikel | Karomap",
  description: "Artikel Karomap tentang GIS, WebGIS, inspeksi lapangan, dan pengelolaan data spasial.",
};

const container = "mx-auto w-full max-w-[1110px] px-5 sm:px-6";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <Header active="blog" />

      <main>
        <section className="relative bg-[#f7f8fb] py-20 sm:py-24">
          <div className={`${container} text-center`}>
            <h1 className="text-3xl font-normal tracking-tight">Artikel</h1>
            <nav className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase shadow-[0_8px_25px_rgba(31,41,55,.10)]" aria-label="Breadcrumb">
              <Link href="/" className="text-[#354052] hover:text-[var(--brand)]">Home</Link>
              <span className="mx-3 text-[#b2bdca]">/</span>
              <span className="text-[var(--brand)]">Blog</span>
            </nav>
          </div>
          <svg viewBox="0 0 1440 34" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-8 w-full translate-y-[1px] text-white" aria-hidden="true"><path d="M0 34h1440V0H1080C721 37 360 0 360 0H0v34Z" fill="currentColor" /></svg>
        </section>

        <section className="py-20 sm:py-28">
          <div className={container}>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.slug}>
                  <Card className="group h-full overflow-hidden rounded-md border-0 bg-white p-0 shadow-[0_10px_35px_rgba(31,41,55,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,41,55,.15)]">
                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                      <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                    </Link>
                    <CardContent className="p-6">
                      <h2 className="min-h-14 text-lg font-medium leading-7"><Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[var(--brand)]">{post.title}</Link></h2>
                      <div className="mt-5 flex items-center justify-between text-sm text-[#8295b0]">
                        <span className="flex items-center gap-1.5"><MessageCircle className="size-4" />{post.comments}</span>
                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 font-medium transition-colors hover:text-[var(--brand)]">Read More<ArrowRight className="size-4" /></Link>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t bg-[#111827] px-6 py-3 text-xs text-white/80">
                      <span className="flex items-center gap-1.5"><UserRound className="size-3.5" />{post.author}</span>
                      <time dateTime={post.date} className="flex items-center gap-1.5"><CalendarDays className="size-3.5" />{post.date}</time>
                    </CardFooter>
                  </Card>
                </article>
              ))}
            </div>

            <nav className="mt-14 flex justify-center" aria-label="Pagination">
              <div className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                <button type="button" disabled className="flex h-10 items-center gap-1 border-r px-4 text-sm text-[#9aa7b8] disabled:cursor-not-allowed"><ChevronLeft className="size-4" />Prev</button>
                <button type="button" aria-current="page" className="grid size-10 place-items-center bg-[var(--brand)] text-sm font-semibold text-white">1</button>
                <button type="button" className="flex h-10 items-center gap-1 border-l px-4 text-sm font-medium text-[#354052] hover:text-[var(--brand)]">Next<ChevronRight className="size-4" /></button>
              </div>
            </nav>
          </div>
        </section>
      </main>

      <footer className="relative bg-[#1b0700] text-[#c9b9b2]">
        <svg viewBox="0 0 1440 54" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-12 w-full -translate-y-[1px] text-white" aria-hidden="true"><path d="M0 0h1440v10C1080 52 620 2 0 48V0Z" fill="currentColor" /></svg>
        <div className={`${container} grid gap-10 pb-12 pt-28 md:grid-cols-[1.3fr_.7fr]`}>
          <div><Image src="/beranda2/karomap-logo.png" alt="Karomap" width={135} height={26} className="brightness-0 invert" /><p className="mt-5 max-w-lg text-sm leading-7">Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294</p><p className="mt-2 text-sm">contact@karomap.com · +62 896 2349 8800</p></div>
          <div><h2 className="font-medium text-white">Bidang Industri</h2><div className="mt-5 grid grid-cols-2 gap-3 text-sm"><Link href="/industri/pertambangan" className="hover:text-[var(--brand)]">Pertambangan</Link><Link href="/perkebunan" className="hover:text-[var(--brand)]">Perkebunan</Link><Link href="/minyak-dan-gas" className="hover:text-[var(--brand)]">Minyak dan Gas</Link><Link href="/pemerintah" className="hover:text-[var(--brand)]">Pemerintah</Link></div></div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm">© 2026 CV. Karomap Semesta. All rights reserved.</div>
      </footer>
    </div>
  );
}
