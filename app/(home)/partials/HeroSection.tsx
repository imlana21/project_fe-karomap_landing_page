import Image from "next/image";
import { PageContainer } from "@/components/site/PageContainer";
import { cn } from "@/lib/utils";
import { Fragment } from "react";
import { Mail, Phone } from "lucide-react";
import { appServices } from "@/stores/static/home";

function HeroContainer() {
  return (
    <PageContainer className="relative z-10 grid items-center max-w-360 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="relative z-10 w-full max-w-xl lg:pb-12">
        {/* Heading */}
        <div className="space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--brand)">
            GIS Solutions & Technology
          </span>

          <h1 className="max-w-lg text-4xl font-bold uppercase leading-[1.12] tracking-tight text-[#111827] sm:text-5xl lg:text-[56px]">
            Pengembangan Aplikasi GIS
          </h1>

          <p className="max-w-[48ch] text-[15px] leading-7 text-[#65758b]">
            Solusi aplikasi GIS berbasis web dan mobile untuk mendukung
            pengelolaan data spasial, operasional lapangan, dan pengambilan
            keputusan.
          </p>
        </div>

        {/* Services */}
        <div className="mt-7 space-y-5">
          {appServices.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-(--brand)">
                <Icon className="size-5 stroke-[1.7]" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-[#354052]">
                  {title}
                </h2>

                <p className="mt-1 text-sm leading-6 text-[#65758b]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <address className="mt-7 flex flex-col gap-3 not-italic sm:flex-row sm:flex-wrap sm:gap-x-6">
          <a
            href="mailto:contact@karomap.com"
            className="inline-flex items-center gap-2 text-sm text-[#65758b] transition-colors hover:text-(--brand)"
          >
            <Mail
              className="size-4 shrink-0 text-(--brand)"
              aria-hidden="true"
            />
            contact@karomap.com
          </a>

          <a
            href="tel:+6281225925600"
            className="inline-flex items-center gap-2 text-sm text-[#65758b] transition-colors hover:text-(--brand)"
          >
            <Phone
              className="size-4 shrink-0 text-(--brand)"
              aria-hidden="true"
            />
            +62 812-2592-5600
          </a>
        </address>
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
              "xl:right-[-20%] xl:top-0 xl:w-full",
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
              "xl:left-[25%] xl:w-[40%] xl:top-[20%]",
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

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh overflow-x-clip bg-white pb-32 pt-28 lg:flex lg:items-center lg:pb-44 lg:pt-24">
      <HeroContainer />
      <SVGWave />
    </section>
  );
}
