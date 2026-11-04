import Image from "next/image";
import { PageContainer } from "@/components/site/page-container";
import { showcases } from "@/stores/static/beranda2";

export function ShowcasesSection() {
  return (
    <section className="pb-28 lg:pb-40">
      <PageContainer>
        <h2 className="text-center text-3xl font-normal uppercase tracking-[0.04em]">
          Why Us
        </h2>
        <div className="mt-24 space-y-24 lg:space-y-32">
          {showcases.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-12 md:grid-cols-2 lg:gap-24"
            >
              <div
                className={`relative min-h-82.5 ${index % 2 ? "md:order-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-normal tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-xl font-medium">{item.subtitle}</p>
                <p className="mt-5 text-[15px] leading-7 text-[#8295b0]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
