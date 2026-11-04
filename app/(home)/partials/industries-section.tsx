import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/site/page-container";
import { industries } from "@/stores/static/beranda2";

export function IndustriesSection() {
  return (
    <section id="industri" className="pb-28 pt-28 lg:pb-36 lg:pt-36">
      <PageContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-normal uppercase tracking-[0.04em]">
            Industri
          </h2>
          <p className="mt-5 leading-7 text-[#8295b0]">
            Platform kami dapat diterapkan di berbagai industri dan disesuaikan
            dengan kebutuhan perusahaan Anda.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative aspect-[.9] overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-lg font-medium text-white">
                {industry.title}
              </h3>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
