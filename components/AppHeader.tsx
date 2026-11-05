"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

import { PageContainer } from "@/components/site/PageContainer";
import { industries } from "@/stores/static/home";

// Types
type NavKey = "home" | "industry" | "solution" | "blog" | "contact";

type MenuLink = {
  label: string;
  href: string;
};

type NavItem =
  | {
      type: "link";
      key: NavKey;
      label: string;
      href: string;
    }
  | {
      type: "dropdown";
      key: NavKey;
      label: string;
      items: readonly MenuLink[];
    };

interface AppHeaderProps {
  active?: NavKey;
}

// Navigation data
const industryLinks: MenuLink[] = industries.map(({ title, href }) => ({
  label: title,
  href,
}));

const solutionLinks: MenuLink[] = [
  {
    label: "Manajemen Data Spasial Pertambangan",
    href: "/solusi/management-data-spasial",
  },
  {
    label: "Efisiensi dan Transparansi Data Produksi Kelapa Sawit",
    href: "/efisiensi-dan-transparansi-data",
  },
  {
    label: "Jalan dan Jembatan",
    href: "/jalan-dan-jembatan",
  },
  {
    label: "Keselamatan Kerja dan Aset Fisik",
    href: "/keselamatan-kerja-dan-asset",
  },
  {
    label: "PDAM",
    href: "/pdam",
  },
];

const navItems: NavItem[] = [
  {
    type: "link",
    key: "home",
    label: "BERANDA",
    href: "/",
  },
  {
    type: "dropdown",
    key: "solution",
    label: "SOLUSI",
    items: solutionLinks,
  },
  {
    type: "link",
    key: "blog",
    label: "ARTIKEL",
    href: "/blog",
  },
  {
    type: "link",
    key: "contact",
    label: "KONTAK",
    href: "/contact",
  },
];

// Helpers
const navTextClass =
  "text-[13px] font-semibold tracking-[0.04em] transition-colors duration-200";

function getNavColor(active: boolean) {
  return active ? "text-(--brand)" : "text-[#354052] hover:text-(--brand)";
}

function resolveActive(pathname: string): NavKey | null {
  if (pathname === "/") return "home";

  if (pathname.startsWith("/blog")) return "blog";

  if (pathname.startsWith("/contact")) return "contact";

  if (industryLinks.some(({ href }) => href !== "#" && pathname === href)) {
    return "industry";
  }

  if (
    pathname.startsWith("/solusi") ||
    solutionLinks.some(({ href }) => pathname === href)
  ) {
    return "solution";
  }

  return null;
}

// Desktop dropdown
function DesktopDropdown({
  label,
  items,
  active,
}: {
  label: string;
  items: readonly MenuLink[];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((prev) => !prev)}
        className={[
          "flex h-full items-center gap-1.5",
          navTextClass,
          getNavColor(active),
        ].join(" ")}
      >
        {label}

        <ChevronDown
          aria-hidden="true"
          className={[
            "size-3.5 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {/* Dropdown panel */}
      <div
        id={menuId}
        aria-hidden={!open}
        className={[
          "absolute left-0 top-full z-50 w-80",
          "rounded-b-lg border-t-2 border-(--brand)",
          "bg-white py-2 shadow-[0_12px_30px_rgba(20,30,50,.12)]",
          "transition-[opacity,transform,visibility] duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0",
        ].join(" ")}
      >
        <ul>
          {items.map(({ label: itemLabel, href }) => (
            <li key={`${itemLabel}-${href}`}>
              <Link
                href={href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={[
                  "block px-5 py-3",
                  "text-xs font-semibold uppercase leading-5",
                  "tracking-[0.035em] text-[#354052]",
                  "transition-colors duration-200",
                  "hover:bg-[#f7f8fb] hover:text-(--brand)",
                  "focus-visible:bg-[#f7f8fb]",
                  "focus-visible:outline-none",
                ].join(" ")}
              >
                {itemLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Mobile dropdown
function MobileDropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: readonly MenuLink[];
  onNavigate: () => void;
}) {
  return (
    <details className="group border-t border-slate-100">
      <summary
        className={[
          "flex cursor-pointer list-none items-center",
          "justify-between gap-3 py-3.5",
          "text-sm font-semibold text-[#354052]",
          "transition-colors hover:text-(--brand)",
          "[&::-webkit-details-marker]:hidden",
        ].join(" ")}
      >
        {label}

        <ChevronDown
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>

      <ul className="pb-3 pl-4">
        {items.map(({ label: itemLabel, href }) => (
          <li key={`${itemLabel}-${href}`}>
            <Link
              href={href}
              onClick={onNavigate}
              className="block py-2.5 text-xs font-medium uppercase leading-5 text-[#657187] transition-colors hover:text-(--brand)"
            >
              {itemLabel}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

// Main header
export default function AppHeader({ active }: AppHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();

  const currentPage = active ?? resolveActive(pathname);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 74);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transparent = pathname === "/" && !scrolled && !mobileOpen;

  return (
    <header
      id="topnav"
      className={[
        "fixed inset-x-0 top-0 z-50",
        "border-b transition-[background-color,border-color,box-shadow] duration-300",
        transparent
          ? "border-transparent bg-transparent shadow-none"
          : "border-black/5 bg-white/95 shadow-[0_2px_12px_rgba(15,23,42,.05)] backdrop-blur-md",
      ].join(" ")}
    >
      <PageContainer className="max-w-300">
        <div className="flex h-18.5 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Karomap - Beranda"
            className="relative block h-7 w-34 shrink-0"
          >
            <Image
              src="/logo.webp"
              alt="Karomap"
              fill
              priority
              sizes="136px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Navigasi utama"
            className="hidden h-full items-center gap-7 lg:flex xl:gap-9"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.key;

              if (item.type === "dropdown") {
                return (
                  <DesktopDropdown
                    key={item.key}
                    label={item.label}
                    items={item.items}
                    active={isActive}
                  />
                );
              }

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "flex h-full items-center",
                    navTextClass,
                    getNavColor(isActive),
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-controls={mobileMenuId}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className={[
              "grid size-10 shrink-0 place-items-center rounded-lg",
              "text-[#354052] transition-colors",
              "hover:bg-slate-100",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-2",
              "focus-visible:outline-(--brand)",
              "lg:hidden",
            ].join(" ")}
          >
            {mobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </PageContainer>

      {/* Mobile navigation */}
      <nav
        id={mobileMenuId}
        aria-label="Navigasi mobile"
        aria-hidden={!mobileOpen}
        className={[
          "absolute inset-x-4 top-full z-50 mt-2",
          "mx-auto max-w-md overflow-hidden",
          "rounded-xl border border-slate-100",
          "border-t-2 border-t-(--brand)",
          "bg-white shadow-[0_15px_45px_rgba(15,23,42,.12)]",
          "transition-[opacity,transform,visibility] duration-200",
          "lg:hidden",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        ].join(" ")}
        {...(!mobileOpen ? { inert: true } : {})}
      >
        <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto px-5 py-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.key;

            if (item.type === "dropdown") {
              return (
                <MobileDropdown
                  key={item.key}
                  label={item.label}
                  items={item.items}
                  onNavigate={() => setMobileOpen(false)}
                />
              );
            }

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={[
                  "block border-t border-slate-100 py-3.5",
                  "text-sm font-semibold",
                  "transition-colors",
                  getNavColor(isActive),
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
