import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/site/PageContainer";
import { industries } from "@/stores/static/home";

export function IndustriesSection() {
  return (
    <section id="industri" className="py-10">
      <PageContainer>
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <h2
            id="industries-title"
            className="text-3xl font-normal uppercase tracking-[0.04em] sm:text-4xl"
          >
            Industri
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#8295b0]">
            Platform kami dapat diterapkan di berbagai industri dan disesuaikan
            dengan kebutuhan perusahaan Anda.
          </p>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-0.5 w-20 rounded-full bg-(--brand)"
          />
        </header>

        {/* Industry cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="group relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-xl bg-slate-900 shadow-[0_8px_24px_rgba(0,0,0,.12)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,.2)] motion-safe:hover:-translate-y-1 sm:min-h-90"
            >
              {/* Background image */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/5"
              />

              {/* Content */}
              <div className="relative z-10 p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  {industry.description}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-4 block h-0.5 w-10 rounded-full bg-(--brand) transition-all duration-300 group-hover:w-16"
                />
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
