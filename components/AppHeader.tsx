"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { industries as industryCards } from "@/stores/static/beranda2";

const industries = industryCards.map(
  ({ title, href }) => [title, href] as const,
);

const solutions = [
  ["Manajemen Data Spasial Pertambangan", "/solusi/management-data-spasial"],
  [
    "Efisiensi dan Transparansi Data Produksi Kelapa Sawit",
    "/efisiensi-dan-transparansi-data",
  ],
  ["Jalan dan Jembatan", "/jalan-dan-jembatan"],
  ["Keselamatan Kerja dan Aset Fisik", "/keselamatan-kerja-dan-asset"],
  ["PDAM", "/pdam"],
] as const;

function DesktopMenu({
  label,
  items,
  active = false,
}: {
  label: string;
  items: readonly (readonly [string, string])[];
  active?: boolean;
}) {
  return (
    <div className="group relative flex h-full items-center">
      <button
        type="button"
        className={`flex h-full items-center gap-1.5 text-[13px] font-semibold tracking-[0.04em] transition-colors hover:text-(--brand) ${active ? "text-(--brand)" : "text-[#354052]"}`}
        aria-haspopup="menu"
      >
        {label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div
        className="invisible absolute left-0 top-full w-72 translate-y-2 border-t-2 border-(--brand) bg-white py-2 opacity-0 shadow-[0_12px_30px_rgba(20,30,50,.12)] transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        role="menu"
      >
        {items.map(([title, href]) => (
          <Link
            key={href}
            href={href}
            role="menuitem"
            className="block px-5 py-2.5 text-[12px] font-semibold uppercase leading-5 tracking-[0.035em] text-[#354052] transition-colors hover:bg-[#f7f8fb] hover:text-(--brand)"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileMenu({
  label,
  items,
}: {
  label: string;
  items: readonly (readonly [string, string])[];
}) {
  return (
    <details className="border-t border-slate-100">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold uppercase text-[#354052] marker:content-none">
        {label}
        <ChevronDown className="size-4" />
      </summary>
      <div className="pb-2 pl-4">
        {items.map(([title, href]) => (
          <Link
            key={href}
            href={href}
            className="block py-2 text-xs font-medium uppercase leading-5 text-[#657187] hover:text-(--brand)"
          >
            {title}
          </Link>
        ))}
      </div>
    </details>
  );
}

interface AppHeaderProps {
  active?: "home" | "industry" | "solution" | "blog" | "contact";
}

export default function AppHeader({ active = "home" }: AppHeaderProps) {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const updateNavbar = () => setOverHero(window.scrollY <= 74);
    const frame = requestAnimationFrame(updateNavbar);
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  const homeClass =
    active === "home"
      ? "text-(--brand)"
      : "text-[#354052] hover:text-(--brand)";
  const blogClass =
    active === "blog"
      ? "text-(--brand)"
      : "text-[#354052] hover:text-(--brand)";
  const contactClass =
    active === "contact"
      ? "text-(--brand)"
      : "text-[#354052] hover:text-(--brand)";

  return (
    <header
      id="topnav"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${overHero ? "border-b border-transparent bg-transparent shadow-none" : "border-b border-black/[0.04] bg-white/95 shadow-[0_2px_12px_rgba(15,23,42,.04)] backdrop-blur-md"}`}
    >
      <div className="mx-auto flex h-18.5 w-full max-w-277.5 items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="relative block h-6.5 w-33.75 shrink-0"
          aria-label="Karomap beranda"
        >
          <Image
            src="/beranda2/karomap-logo.png"
            alt="Karomap"
            fill
            priority
            sizes="135px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          className="hidden h-full items-center gap-8 lg:flex"
          aria-label="Navigasi utama"
        >
          <Link
            href="/"
            className={`flex h-full items-center text-[13px] font-semibold tracking-[0.04em] transition-colors ${homeClass}`}
          >
            BERANDA
          </Link>
          <DesktopMenu
            label="INDUSTRI"
            items={industries}
            active={active === "industry"}
          />
          <DesktopMenu
            label="SOLUSI"
            items={solutions}
            active={active === "solution"}
          />
          <Link
            href="/blog"
            className={`flex h-full items-center text-[13px] font-semibold tracking-[0.04em] transition-colors ${blogClass}`}
          >
            ARTIKEL
          </Link>
          <Link
            href="/contact"
            className={`flex h-full items-center text-[13px] font-semibold tracking-[0.04em] transition-colors ${contactClass}`}
          >
            KONTAK
          </Link>
        </nav>

        <details className="group relative lg:hidden">
          <summary
            className="grid size-11 cursor-pointer list-none place-items-center rounded-md text-[#354052] hover:bg-slate-100 marker:content-none"
            aria-label="Buka menu"
          >
            <Menu className="size-6" />
          </summary>
          <nav
            className="absolute right-0 top-[calc(100%+15px)] w-[min(22rem,calc(100vw-2.5rem))] border-t-2 border-(--brand) bg-white px-5 py-3 shadow-xl"
            aria-label="Navigasi mobile"
          >
            <Link
              href="/"
              className={`block py-3 text-sm font-semibold ${homeClass}`}
            >
              BERANDA
            </Link>
            <MobileMenu label="Industri" items={industries} />
            <MobileMenu label="Solusi" items={solutions} />
            <Link
              href="/blog"
              className={`block border-t border-slate-100 py-3 text-sm font-semibold ${blogClass}`}
            >
              ARTIKEL
            </Link>
            <Link
              href="/contact"
              className={`block border-t border-slate-100 py-3 text-sm font-semibold ${contactClass}`}
            >
              KONTAK
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
