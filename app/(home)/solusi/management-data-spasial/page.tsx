import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Mail, MessageCircle, Send, User } from "lucide-react";
import Header from "../../header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Manajemen Data Spasial Pertambangan | Karomap",
  description:
    "Sistem inspeksi lapangan dan pengelolaan data spasial pertambangan terintegrasi berbasis mobile, WebGIS, dan dashboard.",
};

const container = "mx-auto w-full max-w-[1110px] px-5 sm:px-6";

const inspectionItems = [
  "Mobile system dapat digunakan secara online maupun offline pada kawasan tanpa akses internet.",
  "Pola penyimpanan data dapat disesuaikan dengan infrastruktur yang tersedia, seperti intranet atau ekstranet.",
  "Integrasi mobile dan web app membuat data terbaru dari lapangan langsung tersedia untuk dianalisis melalui PC atau laptop.",
];

const applicationItems = [
  "Inspeksi tanda batas area tambang",
  "Inspeksi jalan tambang atau hauling",
  "Inspeksi infrastruktur seperti warehouse, pit, drainase, dan fasilitas lainnya",
];

const spatialItems = [
  "Pengelolaan data IPPKH",
  "Area reklamasi",
  "Eksplorasi",
  "Kebutuhan data spasial pertambangan lainnya",
];

function Field({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  icon: typeof User;
}) {
  return (
    <label className="block text-sm font-medium text-[#354052]">
      {label} <span className="text-[var(--brand)]">*</span>
      <span className="relative mt-2 block">
        <Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8295b0]" />
        <Input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="h-11 rounded-md pl-10 focus-visible:ring-[var(--brand)]"
        />
      </span>
    </label>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#1b0700] text-[#c9b9b2]">
      <svg
        viewBox="0 0 1440 54"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-12 w-full -translate-y-[1px] text-white"
        aria-hidden="true"
      >
        <path d="M0 0h1440v10C1080 52 620 2 0 48V0Z" fill="currentColor" />
      </svg>
      <div
        className={`${container} grid gap-12 pb-12 pt-28 md:grid-cols-2 lg:grid-cols-[1.25fr_.65fr_1fr]`}
      >
        <section>
          <Image
            src="/beranda2/karomap-logo.png"
            alt="Karomap"
            width={135}
            height={26}
            className="brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm leading-7">
            Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294
          </p>
          <p className="mt-3 text-sm leading-7">
            Telepon:{" "}
            <a href="tel:+622742820302" className="hover:text-white">
              +62 274 2820 302
            </a>
            ,{" "}
            <a href="tel:+6289623498800" className="hover:text-white">
              +62 896 2349 8800
            </a>
            <br />
            Email:{" "}
            <a href="mailto:contact@karomap.com" className="hover:text-white">
              contact@karomap.com
            </a>
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
            {[
              ["Facebook", "https://www.facebook.com/karomap"],
              [
                "YouTube",
                "https://www.youtube.com/channel/UCj1SR9iJ_sM-QoSWFzgoGLA",
              ],
              ["GitHub", "https://github.com/karomap"],
              ["WhatsApp", "https://wa.me/6289623498800"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid min-h-10 place-items-center rounded-md border border-white/15 px-3 transition hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-medium text-white">Bidang Industri</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <Link
              href="/industri/pertambangan"
              className="hover:text-[var(--brand)]"
            >
              Pertambangan
            </Link>
            <Link href="/perkebunan" className="hover:text-[var(--brand)]">
              Perkebunan
            </Link>
            <Link href="/minyak-dan-gas" className="hover:text-[var(--brand)]">
              Minyak dan Gas
            </Link>
            <Link href="/pemerintah" className="hover:text-[var(--brand)]">
              Pemerintah
            </Link>
          </div>
        </section>

        <section>
          <h2 className="font-medium text-white">Surat Kabar</h2>
          <p className="mt-5 text-sm leading-6">
            Berlangganan informasi terbaru dari kami.
          </p>
          <form className="mt-5 space-y-3">
            <label className="block text-sm">
              Alamat email <span className="text-[var(--brand)]">*</span>
              <span className="relative mt-2 block">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                <Input
                  type="email"
                  name="newsletter-email"
                  required
                  placeholder="Masukkan alamat email"
                  className="h-11 border-white/15 bg-white/10 pl-10 text-white placeholder:text-white/45 focus-visible:ring-[var(--brand)]"
                />
              </span>
            </label>
            <Button
              type="submit"
              className="h-11 w-full bg-[var(--brand)] text-white hover:bg-[#d94700]"
            >
              Berlangganan
            </Button>
          </form>
        </section>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className={`${container} text-sm`}>
          © 2026 CV. Karomap Semesta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function MiningPage({ active }: { active: "industry" | "solution" }) {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <Header active={active} />

      <main>
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div
            className="pointer-events-none absolute -left-[15%] -top-[260px] h-[430px] w-[130%] rounded-[50%] bg-[#f7f8fb] sm:-top-[245px] sm:h-[440px]"
            aria-hidden="true"
          />
          <div className={`${container} relative z-10 text-center`}>
            <h1 className="text-3xl font-normal tracking-tight">
              Pertambangan
            </h1>
            <nav
              className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase shadow-[0_8px_25px_rgba(31,41,55,.10)]"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-[#354052] hover:text-[var(--brand)]"
              >
                Beranda
              </Link>
              <span className="mx-3 text-[#b2bdca]">/</span>
              <span className="text-[var(--brand)]">Pertambangan</span>
            </nav>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className={container}>
            <div className="relative aspect-[16/7] overflow-hidden rounded-lg bg-slate-100 shadow-[0_15px_40px_rgba(31,41,55,.12)]">
              <Image
                src="/solutions/management-data-spasial.jpg"
                alt="Sistem pengelolaan data spasial pertambangan Karomap"
                fill
                priority
                sizes="(min-width: 1110px) 1110px, 100vw"
                className="object-cover"
              />
            </div>

            <article className="mx-auto mt-10 max-w-4xl rounded-lg bg-[#f7f8fb] p-6 text-[15px] leading-8 text-[#59677c] sm:p-10">
              <p>
                Kebutuhan sistem pengelolaan data pertambangan harus memenuhi
                kebutuhan seluruh pemangku kepentingan, mulai dari perizinan
                kawasan, eksplorasi, pemetaan batas, eksploitasi, hingga
                reklamasi. Data perlu disusun secara rapi, akurat, dan aman agar
                dapat dilaporkan secara real time kepada pihak terkait.
              </p>
              <p className="mt-5">
                Kompleksitas jenis dan tipe data tambang membutuhkan sistem yang
                efektif, real time, dan aman. Sistem Karomap mengintegrasikan
                aplikasi mobile, web app, dashboard, serta modul GIS untuk
                memenuhi kebutuhan tersebut.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-[#111827]">
                Inspeksi lapangan
              </h2>
              <p className="mt-3">
                Kemampuan sistem untuk mendukung pekerjaan inspeksi:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[var(--brand)]">
                {inspectionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mt-6">
                Sistem mobile juga dapat diterapkan untuk pengelolaan aset
                fisik, utilitas, bangunan, dan infrastruktur pertambangan,
                antara lain:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[var(--brand)]">
                {applicationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="mt-8 text-xl font-semibold text-[#111827]">
                Pengelolaan data spasial tambang
              </h2>
              <p className="mt-3">
                Dashboard berbasis WebGIS dapat digunakan untuk pengelolaan dan
                manajemen data spasial atau peta, seperti:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[var(--brand)]">
                {spatialItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <Card className="mx-auto mt-14 max-w-5xl rounded-lg border-0 shadow-[0_16px_50px_rgba(31,41,55,.12)]">
              <CardContent className="p-7 sm:p-10">
                <h2 className="text-2xl font-medium">Hubungi Kami</h2>
                <form className="mt-7 space-y-5">
                  <div className="grid gap-5 md:grid-cols-3">
                    <Field
                      label="Nama"
                      name="name"
                      placeholder="Nama"
                      icon={User}
                    />
                    <Field
                      label="Alamat email"
                      name="email"
                      type="email"
                      placeholder="Alamat email"
                      icon={Mail}
                    />
                    <Field
                      label="Subyek"
                      name="subject"
                      placeholder="Subyek"
                      icon={BookOpen}
                    />
                  </div>
                  <label className="block text-sm font-medium text-[#354052]">
                    Pesan <span className="text-[var(--brand)]">*</span>
                    <span className="relative mt-2 block">
                      <MessageCircle className="absolute left-3 top-3 size-4 text-[#8295b0]" />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Pesan"
                        className="w-full resize-none rounded-md border bg-transparent py-3 pl-10 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-[var(--brand)] focus:ring-2 focus:ring-orange-100"
                      />
                    </span>
                  </label>
                  <div className="flex flex-col justify-end gap-3 sm:flex-row">
                    <Button
                      type="reset"
                      variant="outline"
                      className="h-11 sm:min-w-28"
                    >
                      Reset
                    </Button>
                    <Button
                      type="submit"
                      className="h-11 bg-[var(--brand)] text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94700] sm:min-w-40"
                    >
                      <Send className="size-4" /> Kirim Pesan
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ManagementDataSpasialPage() {
  return <MiningPage active="solution" />;
}
