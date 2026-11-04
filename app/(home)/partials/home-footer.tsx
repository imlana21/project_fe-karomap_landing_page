import Link from "next/link";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { industries } from "@/stores/static/beranda2";

export function HomeFooter() {
  return (
    <footer
      id="kontak-footer"
      className="relative overflow-hidden bg-[#1b0700] text-[#c9b9b2]"
    >
      <svg
        viewBox="0 0 1440 90"
        className="absolute inset-x-0 top-0 w-full -translate-y-px text-[#f7f8fb]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 0h1440v22C1090 89 600 5 0 82V0Z" />
      </svg>
      <PageContainer className="grid gap-12 pb-16 pt-36 md:grid-cols-[1.25fr_.75fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span className="grid size-9 place-items-center rounded-lg bg-(--brand) text-sm">
              K
            </span>
            KAROMAP
          </div>
          <p className="mt-6 max-w-sm leading-7">
            Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>Telepon: +62 274 2820 302</p>
            <p>WhatsApp: +62 896 2349 8800</p>
            <p>Email: contact@karomap.com</p>
          </div>
          <div className="mt-6 flex gap-2">
            {["Fb", "Yt", "Gh"].map((label) => (
              <Button
                key={label}
                variant="outline"
                size="icon-sm"
                className="border-white/20 bg-transparent text-xs text-white hover:bg-white/10"
                aria-label={label}
              >
                {label}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon-sm"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4" />
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium text-white">Bidang Industri</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {industries.map((industry) => (
              <li key={industry.title}>
                <Link
                  href={industry.href}
                  className="transition hover:text-(--brand)"
                >
                  {industry.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium text-white">Surat Kabar</h2>
          <p className="mt-6 leading-7">
            Berlangganan informasi terbaru dari kami.
          </p>
          <form className="mt-5 space-y-3">
            <label className="relative block">
              <Mail className="absolute left-3 top-3 size-5" />
              <Input
                type="email"
                required
                placeholder="Masukkan alamat email"
                className="h-11 border-white/15 bg-black/30 pl-11 text-white placeholder:text-white/35"
              />
            </label>
            <Button className="w-full bg-[#745044] text-white hover:bg-[#865d50]">
              Berlangganan
            </Button>
          </form>
        </div>
      </PageContainer>
      <div className="border-t border-white/10">
        <PageContainer className="flex items-center justify-between py-6 text-sm">
          <p>© 2026 CV. Karomap Semesta. All rights reserved.</p>
          <Link
            href="#top"
            aria-label="Kembali ke atas"
            className={cn(
              buttonVariants({ size: "icon-sm" }),
              "bg-(--brand) text-white",
            )}
          >
            <ArrowUp />
          </Link>
        </PageContainer>
      </div>
    </footer>
  );
}
