import Link from "next/link";
import { PageContainer } from "./page-container";

interface PageHeroProps {
  title: string;
  current?: string;
  wave?: boolean;
}

export function PageHero({
  title,
  current = title,
  wave = true,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#f7f8fb] pb-20 pt-38.5 sm:pb-24 sm:pt-[calc(6rem+74px)]">
      <PageContainer className="text-center">
        <h1 className="text-3xl font-normal tracking-tight">{title}</h1>
        <nav
          className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase shadow-[0_8px_25px_rgba(31,41,55,.10)]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-[#354052] hover:text-(--brand)">
            Beranda
          </Link>
          <span className="mx-3 text-[#b2bdca]">/</span>
          <span className="text-(--brand)">{current}</span>
        </nav>
      </PageContainer>
      {wave && (
        <svg
          viewBox="0 0 1440 34"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-8 w-full translate-y-px text-white"
          aria-hidden="true"
        >
          <path
            d="M0 34h1440V0H1080C721 37 360 0 360 0H0v34Z"
            fill="currentColor"
          />
        </svg>
      )}
    </section>
  );
}
