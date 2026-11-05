"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/site/page-container";
import { clients } from "@/stores/static/home";

const ITEMS_PER_PAGE = 4;
const AUTO_PLAY_DELAY = 5000;

// Group clients into pages of 4
const clientPages = Array.from(
  {
    length: Math.ceil(clients.length / ITEMS_PER_PAGE),
  },
  (_, index) =>
    clients.slice(index * ITEMS_PER_PAGE, (index + 1) * ITEMS_PER_PAGE),
);

export default function ClientsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = clientPages.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [isPaused, totalPages]);

  if (totalPages === 0) return null;

  return (
    <section
      id="clients"
      aria-labelledby="clients-title"
      className="py-20 lg:py-28"
    >
      <PageContainer>
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <h2
            id="clients-title"
            className="text-3xl font-normal uppercase tracking-[0.04em] sm:text-4xl"
          >
            Klien Kami
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#8295b0]">
            Dipercaya oleh berbagai instansi, perusahaan, dan organisasi di
            berbagai sektor.
          </p>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-0.5 w-20 rounded-full bg-(--brand)"
          />
        </header>

        {/* Carousel */}
        <div
          className="relative mx-auto mt-12 max-w-5xl sm:mt-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Daftar klien"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Slider viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {clientPages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full shrink-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Grup ${pageIndex + 1} dari ${totalPages}`}
                  aria-hidden={pageIndex !== currentPage}
                >
                  <div className="grid grid-cols-4 items-center gap-3 sm:gap-6 lg:gap-10">
                    {page.map((client, index) => (
                      <div
                        key={`${client.name}-${index}`}
                        title={client.name}
                        className={[
                          "group flex min-w-0 items-center justify-center",
                          "h-20 bg-transparent p-1",
                          "sm:h-28 sm:p-3 lg:h-32 lg:p-4",
                          "transition-transform duration-300",
                          "motion-safe:hover:scale-105",
                          page.length === 2 && index === 0 ? "col-start-2" : "",
                        ].join(" ")}
                      >
                        <div className="relative h-14 w-full max-w-40 sm:h-20 lg:h-24">
                          <Image
                            src={client.image}
                            alt={`Logo ${client.name}`}
                            fill
                            sizes="(min-width: 1024px) 160px, 25vw"
                            className="object-contain transition-[filter,transform] duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Klien sebelumnya"
                onClick={prevPage}
                className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-(--brand) hover:text-(--brand)"
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* Pagination */}
              <div
                className="flex items-center gap-2"
                aria-label="Navigasi slide klien"
              >
                {clientPages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Tampilkan grup klien ${index + 1}`}
                    aria-current={currentPage === index ? "true" : undefined}
                    onClick={() => setCurrentPage(index)}
                    className={[
                      "h-2 rounded-full transition-all duration-300",
                      currentPage === index
                        ? "w-7 bg-(--brand)"
                        : "w-2 bg-slate-300 hover:bg-slate-400",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Klien berikutnya"
                onClick={nextPage}
                className="flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-(--brand) hover:text-(--brand)"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
