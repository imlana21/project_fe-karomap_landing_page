import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { PageContainer } from "@/components/site/page-container";
import { cn } from "@/lib/utils";
import { products } from "@/stores/static/home";
import { Fragment } from "react";

function HeroContainer() {
  return (
    <PageContainer className="relative z-10 grid items-center max-w-380 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="relative z-10 max-w-xl lg:pb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-(--brand)">
          Karomap Inspection Suite
        </p>
        <h1 className="max-w-lg text-4xl font-medium uppercase leading-[1.15] tracking-tight text-[#111827] sm:text-5xl">
          Pengembangan Aplikasi GIS
        </h1>
        <p className="mt-5 max-w-[42ch] text-base leading-7 text-[#65758b]">
          Efisien dan meningkatkan keamanan dalam pekerjaan inspeksi lapangan.
        </p>
        <address className="mt-5 space-y-0 text-[15px] not-italic text-[#65758b]">
          <a
            href="mailto:contact@karomap.com"
            className="flex min-h-6 items-center gap-3 rounded-sm transition-colors hover:text-(--brand) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--brand)"
          >
            <span className="w-16 shrink-0 font-medium text-[#354052]">
              Email
            </span>
            <span>contact@karomap.com</span>
          </a>
          <a
            href="tel:+6281225925600"
            className="flex min-h-6 items-center gap-3 rounded-sm transition-colors hover:text-(--brand) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--brand)"
          >
            <span className="w-16 shrink-0 font-medium text-[#354052]">
              Telepon
            </span>
            <span>+62 812-2592-5600</span>
          </a>
        </address>

        <Link
          href="#kontak"
          className={cn(
            buttonVariants(),
            "mt-6 h-11 bg-(--brand) px-7 text-white shadow-sm shadow-orange-500/20 hover:bg-[#d94700]",
          )}
        >
          Mulai
        </Link>
      </div>
      <div className="relative min-h-90 sm:min-h-110 lg:min-h-125">
        <div className="relative isolate mx-auto h-85 w-full max-w-190 sm:h-107.5 lg:h-130 xl:h-142.5">
          {/* Laptop - Background */}
          <Image
            src="/home/laptop.png"
            alt="Dashboard Karomap pada laptop"
            width={1000}
            height={697}
            priority
            sizes="(min-width: 1280px) 1050px, (min-width: 1024px) 900px, 1px"
            className={cn(
              "pointer-events-none absolute z-0 hidden h-auto max-w-none",
              "drop-shadow-2xl",
              "lg:right-[-25%] lg:top-[-16%] lg:block lg:w-[135%]",
              "xl:right-[-20%] xl:top-[-20%] xl:w-[145%]",
            )}
          />

          {/* Phone - Foreground */}
          <Image
            src="/home/phone.png"
            alt="Aplikasi inspeksi Karomap pada ponsel"
            width={1078}
            height={1291}
            priority
            sizes="(min-width: 1280px) 380px, (min-width: 1024px) 25vw, (min-width: 640px) 320px, 75vw"
            className={cn(
              "pointer-events-none absolute z-10 h-auto max-w-none",
              "drop-shadow-2xl",
              "bottom-0 left-1/2 w-[75%] max-w-[320px] -translate-x-1/2",
              "sm:w-[65%]",
              "lg:bottom-[4%] lg:left-[2%] lg:w-[46%] lg:max-w-95 lg:translate-x-0",
              "xl:left-[4%] xl:w-[44%]",
            )}
          />
        </div>
      </div>
    </PageContainer>
  );
}

function SVGWave() {
  return (
    <Fragment>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 w-full text-[#f7f8fb] md:block"
        aria-hidden="true"
      >
        <path d="M0 0 C480 65 960 65 1440 0 V120 H0 Z" fill="currentColor" />
      </svg>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[#f7f8fb] md:hidden"
        aria-hidden="true"
      />
    </Fragment>
  );
}

function ProjectContainer() {
  return (
    <PageContainer className="relative z-20 mt-14 md:absolute md:inset-x-0 md:-bottom-1 md:mt-0 md:translate-y-1/2">
      <div
        className="mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-stretch gap-5 px-4 sm:px-6"
        style={{
          maxWidth: `${Math.min(products.length, 3) * 360}px`,
        }}
      >
        {products.map(({ title, description, icon: Icon }) => (
          <Card
            key={title}
            className={cn(
              "group flex h-full flex-col",
              "rounded-xl border border-[#e5e8ed] bg-white",
              "shadow-[0_12px_35px_rgba(35,45,65,.08)]",
              "transition-all duration-300 ease-out",
              "hover:border-orange-200",
              "hover:shadow-[0_18px_40px_rgba(35,45,65,.14)]",
              "motion-safe:hover:-translate-y-1",
            )}
          >
            <CardContent className="flex flex-1 flex-col items-center justify-center p-6 text-center sm:p-8">
              <Icon
                className={cn(
                  "size-9 shrink-0 stroke-[1.6] text-(--brand)",
                  "transition-transform duration-300",
                  "motion-safe:group-hover:scale-110",
                  "motion-safe:group-hover:-rotate-3",
                )}
              />

              <h2 className="mt-4 text-xl font-semibold transition-colors group-hover:text-(--brand)">
                {title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#8295b0] transition-colors group-hover:text-[#657187]">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh overflow-x-clip bg-white pb-32 pt-28 lg:flex lg:items-center lg:pb-44 lg:pt-24">
      <HeroContainer />
      <SVGWave />
      <ProjectContainer />
    </section>
  );
}
