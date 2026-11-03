import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const industries = [
  ["Pertambangan", "/pertambangan"],
  ["Perkebunan", "/perkebunan"],
  ["Minyak dan Gas", "/minyak-dan-gas"],
  ["Pemerintah", "/pemerintah"],
] as const;

const solutions = [
  ["Manajemen Data Spasial Pertambangan", "/management-data-spatial"],
  ["Efisiensi dan Transparansi Data Produksi Kelapa Sawit", "/efisiensi-dan-transparansi-data"],
  ["Jalan dan Jembatan", "/jalan-dan-jembatan"],
  ["Keselamatan Kerja dan Aset Fisik", "/keselamatan-kerja-dan-asset"],
  ["PDAM", "/pdam"],
] as const;

function DesktopMenu({ label, items }: { label: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div className="group relative flex h-full items-center">
      <button type="button" className="flex h-full items-center gap-1.5 text-[13px] font-semibold tracking-[0.04em] text-[#354052] transition-colors hover:text-[var(--brand)]" aria-haspopup="menu">
        {label}<ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full w-72 translate-y-2 border-t-2 border-[var(--brand)] bg-white py-2 opacity-0 shadow-[0_12px_30px_rgba(20,30,50,.12)] transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100" role="menu">
        {items.map(([title, href]) => <Link key={href} href={href} role="menuitem" className="block px-5 py-2.5 text-[12px] font-semibold uppercase leading-5 tracking-[0.035em] text-[#354052] transition-colors hover:bg-[#f7f8fb] hover:text-[var(--brand)]">{title}</Link>)}
      </div>
    </div>
  );
}

function MobileMenu({ label, items }: { label: string; items: readonly (readonly [string, string])[] }) {
  return <details className="border-t border-slate-100"><summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold uppercase text-[#354052] marker:content-none">{label}<ChevronDown className="size-4" /></summary><div className="pb-2 pl-4">{items.map(([title, href]) => <Link key={href} href={href} className="block py-2 text-xs font-medium uppercase leading-5 text-[#657187] hover:text-[var(--brand)]">{title}</Link>)}</div></details>;
}

interface HeaderProps {
  active?: "home" | "contact";
}

export default function Header({ active = "home" }: HeaderProps) {
  const homeClass = active === "home" ? "text-[var(--brand)]" : "text-[#354052] hover:text-[var(--brand)]";
  const contactClass = active === "contact" ? "text-[var(--brand)]" : "text-[#354052] hover:text-[var(--brand)]";

  return (
    <header id="topnav" className="sticky top-0 z-50 border-b border-black/[0.04] bg-white shadow-[0_2px_12px_rgba(15,23,42,.04)]">
      <div className="mx-auto flex h-[74px] w-full max-w-[1110px] items-center justify-between px-5 sm:px-6">
        <Link href="/" className="relative block h-[26px] w-[135px] shrink-0" aria-label="Karomap beranda">
          <Image src="/beranda2/karomap-logo.png" alt="Karomap" fill priority sizes="135px" className="object-contain object-left" />
        </Link>

        <nav className="hidden h-full items-center gap-8 lg:flex" aria-label="Navigasi utama">
          <Link href="/" className={`flex h-full items-center text-[13px] font-semibold tracking-[0.04em] transition-colors ${homeClass}`}>BERANDA</Link>
          <DesktopMenu label="INDUSTRI" items={industries} />
          <DesktopMenu label="SOLUSI" items={solutions} />
          <Link href="/blog" className="flex h-full items-center text-[13px] font-semibold tracking-[0.04em] text-[#354052] transition-colors hover:text-[var(--brand)]">ARTIKEL</Link>
          <Link href="/contact" className={`flex h-full items-center text-[13px] font-semibold tracking-[0.04em] transition-colors ${contactClass}`}>KONTAK</Link>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-md text-[#354052] hover:bg-slate-100 marker:content-none" aria-label="Buka menu"><Menu className="size-6" /></summary>
          <nav className="absolute right-0 top-[calc(100%+15px)] w-[min(22rem,calc(100vw-2.5rem))] border-t-2 border-[var(--brand)] bg-white px-5 py-3 shadow-xl" aria-label="Navigasi mobile">
            <Link href="/" className={`block py-3 text-sm font-semibold ${homeClass}`}>BERANDA</Link>
            <MobileMenu label="Industri" items={industries} />
            <MobileMenu label="Solusi" items={solutions} />
            <Link href="/blog" className="block border-t border-slate-100 py-3 text-sm font-semibold text-[#354052]">ARTIKEL</Link>
            <Link href="/contact" className={`block border-t border-slate-100 py-3 text-sm font-semibold ${contactClass}`}>KONTAK</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
