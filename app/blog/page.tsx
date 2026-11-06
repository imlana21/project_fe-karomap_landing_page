import type { Metadata } from "next";
import { siteConfig } from "@/stores/static/config";
import { Suspense } from "react";
import AppHeader from "../../components/AppHeader";
import { PageContainer } from "@/components/site/PageContainer";
import { PageHero } from "@/components/site/PageHero";
import AppFooter from "@/components/AppFooter";
import BlogContent, { BlogSkeleton } from "./partials/BlogContent";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    `Artikel ${siteConfig.brand} tentang GIS, WebGIS, inspeksi lapangan, dan pengelolaan data spasial.`,
};

export default function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string | string[] }> }) {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <AppHeader active="blog" />
      <main>
        <PageHero title="Artikel" current="Blog" />
        <section className="py-20 sm:py-28">
          <PageContainer>
            <Suspense fallback={<BlogSkeleton />}><BlogContent searchParams={searchParams} /></Suspense>
          </PageContainer>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}
