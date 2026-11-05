import Link from "next/link";

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
    <section className="relative bg-[#f7f8fb] py-30">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      </div>
      {wave && (
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full translate-y-px text-white sm:h-14"
          aria-hidden="true"
        >
          <path
            d="M0 0 C480 100 960 100 1440 0 L1440 100 L0 100 Z"
            fill="currentColor"
          />
        </svg>
      )}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-4">
        <nav
          className="inline-flex max-w-full items-center rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase shadow-[0_8px_25px_rgba(31,41,55,.10)]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="text-[#354052] hover:text-(--brand)">
            Beranda
          </Link>
          <span className="mx-3 text-[#b2bdca]">/</span>
          <span className="text-(--brand)">{current}</span>
        </nav>
      </div>
    </section>
  );
}
