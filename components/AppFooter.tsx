import Image from "next/image";
import { siteConfig, contactLinks } from "@/stores/static/config";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageContainer } from "./site/PageContainer";
import { cn } from "cn";
import { Fragment } from "react/jsx-runtime";

export default function AppFooter({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  if (compact) {
    return (
      <footer
        className={cn(
          `bg-[#1b0700] py-8 text-center text-sm text-[#c9b9b2]`,
          className,
        )}
      >
        <PageContainer>
          <p>
            © 2026{" "}
            <Link href="/" className="text-white hover:text-(--brand)">
              {siteConfig.name}
            </Link>
            . All rights reserved.
          </p>
        </PageContainer>
      </footer>
    );
  }

  return (
    <Fragment>
      <footer
        className={cn("relative bg-[#1b0700] text-[#c9b9b2] mt-25", className)}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 z-10 w-full text-[#1b0700] -top-15 h-15"
          aria-hidden="true"
        >
          <path
            d="M0 55 C240 0 480 100 720 55 S1200 10 1440 55 L1440 100 L0 100 Z"
            fill="currentColor"
          />
        </svg>
        <PageContainer className="relative z-20 flex flex-col justify-between gap-12 pb-12 pt-10 md:flex-row">
          <section>
            <Image
              src="/logo-dark.png"
              alt={siteConfig.brand}
              width={135}
              height={30}
              style={{ height: "auto" }}
            />
            <p className="mt-5 max-w-md text-sm leading-7">
              {siteConfig.alamat}
            </p>
            <p className="mt-3 text-sm leading-7">
              Telepon:{" "}
              <a href={contactLinks.telp} className="hover:text-white">
                {siteConfig.telp}
              </a>
              <br />
              WA:{" "}
              <a
                href={contactLinks.wa}
                className="hover:text-white"
              >
                {siteConfig.wa}
              </a>
              <br />
              Email:{" "}
              <a href={contactLinks.email} className="hover:text-white">
                {siteConfig.email}
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
            © 2026 {siteConfig.name}. All rights reserved.
          </PageContainer>
        </div>
      </footer>
    </Fragment>
  );
}
