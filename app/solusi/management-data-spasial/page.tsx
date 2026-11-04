import type { Metadata } from "next";
import Image from "next/image";
import AppHeader from "../../../components/AppHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/site/contact-form";
import { PageContainer } from "@/components/site/page-container";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Manajemen Data Spasial Pertambangan | Karomap",
  description:
    "Sistem inspeksi lapangan dan pengelolaan data spasial pertambangan terintegrasi berbasis mobile, WebGIS, dan dashboard.",
};

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

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-(--brand)">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function MiningPage({ active }: { active: "industry" | "solution" }) {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <AppHeader active={active} />

      <main>
        <PageHero title="Pertambangan" wave={false} />

        <section className="py-20 sm:py-28">
          <PageContainer>
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
              <ItemList items={inspectionItems} />

              <p className="mt-6">
                Sistem mobile juga dapat diterapkan untuk pengelolaan aset
                fisik, utilitas, bangunan, dan infrastruktur pertambangan,
                antara lain:
              </p>
              <ItemList items={applicationItems} />

              <h2 className="mt-8 text-xl font-semibold text-[#111827]">
                Pengelolaan data spasial tambang
              </h2>
              <p className="mt-3">
                Dashboard berbasis WebGIS dapat digunakan untuk pengelolaan dan
                manajemen data spasial atau peta, seperti:
              </p>
              <ItemList items={spatialItems} />
            </article>

            <Card className="mx-auto mt-14 max-w-5xl rounded-lg border-0 shadow-[0_16px_50px_rgba(31,41,55,.12)]">
              <CardContent className="p-7 sm:p-10">
                <h2 className="text-2xl font-medium">Hubungi Kami</h2>
                <ContactForm showReset />
              </CardContent>
            </Card>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default function ManagementDataSpasialPage() {
  return <MiningPage active="solution" />;
}
