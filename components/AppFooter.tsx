import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageContainer } from "./site/page-container";

export default function AppFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="bg-[#1b0700] py-8 text-center text-sm text-[#c9b9b2]">
        <PageContainer>
          <p>
            © 2026{" "}
            <Link href="/" className="text-white hover:text-(--brand)">
              Karomap Semesta
            </Link>
            . All rights reserved.
          </p>
        </PageContainer>
      </footer>
    );
  }

  return (
    <footer className="relative bg-[#1b0700] text-[#c9b9b2]">
      <svg
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-12 w-full -translate-y-px text-white"
        aria-hidden="true"
      >
        <path d="M0 0h1440v10C1080 52 620 2 0 48V0Z" fill="currentColor" />
      </svg>
      <PageContainer className="gap-12 pb-12 pt-28 flex justify-between">
        <section>
          <Image src="/logo-dark.png" alt="Karomap" width={135} height={26} />
          <p className="mt-5 max-w-md text-sm leading-7">
            Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294
          </p>
          <p className="mt-3 text-sm leading-7">
            Telepon:{" "}
            <a href="tel:+622742820302" className="hover:text-white">
              +62 812-2592-5600
            </a>
            <br />
            Email:{" "}
            <a href="mailto:contact@karomap.com" className="hover:text-white">
              contact@karomap.com
            </a>
          </p>
        </section>
        <section>
          <h2 className="font-medium text-white">Surat Kabar</h2>
          <p className="mt-5 text-sm leading-6">
            Berlangganan informasi terbaru dari kami.
          </p>
          <form className="mt-5 space-y-3">
            <label className="block text-sm">
              Alamat email <span className="text-(--brand)">*</span>
              <span className="relative mt-2 block">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type="email"
                  name="newsletter-email"
                  required
                  placeholder="Masukkan alamat email"
                  className="h-11 border-white/15 bg-white/10 pl-10 text-white placeholder:text-white/45 focus-visible:ring-(--brand)"
                />
              </span>
            </label>
            <Button
              type="submit"
              className="h-11 w-full bg-(--brand) text-white hover:bg-[#d94700]"
            >
              Berlangganan
            </Button>
          </form>
        </section>
      </PageContainer>
      <div className="border-t border-white/10 py-6">
        <PageContainer className="text-sm">
          © 2026 Karomap Semesta. All rights reserved.
        </PageContainer>
      </div>
    </footer>
  );
}
