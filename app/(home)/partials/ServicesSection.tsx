import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/stores/static/home";
import { PageContainer } from "@/components/site/PageContainer";

export default function ServicesSection() {
  return (
    <section className="pb-20 lg:pb-32">
      <PageContainer>
        {/* Section heading */}
        <div className="text-center">
          <h2
            id="services-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Layanan
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-0.5 w-20 rounded-full bg-(--brand)"
          />
        </div>

        {/* Services */}
        <div className="mt-14 space-y-6 md:mt-10 md:space-y-8 lg:space-y-10">
          {services.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={item.title}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
              >
                {/* Image */}
                <div
                  className={[
                    "relative w-full overflow-hidden rounded-2xl",
                    "aspect-4/3 bg-slate-50",
                    "ring-1 ring-slate-100",
                    isReversed ? "md:order-2" : "",
                  ].join(" ")}
                >
                  <Image
                    src={item.image}
                    alt={`Ilustrasi ${item.title}`}
                    fill
                    sizes="(min-width: 1024px) 42vw, (min-width: 768px) 48vw, 100vw"
                    className="object-contain p-4 md:p-6"
                  />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-[34px]">
                    {item.title}
                  </h3>

                  <p className="my-3 max-w-xl text-[15px] leading-7 text-[#8295b0]">
                    {item.description}
                  </p>

                  {/* Feature list */}
                  {item.fitur.length > 0 && (
                    <div className="mt-3">
                      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {item.fitur.map((fitur) => (
                          <li key={fitur} className="flex items-start gap-2.5">
                            <Check
                              aria-hidden="true"
                              className="mt-1 size-4 shrink-0 stroke-2 text-(--brand)"
                            />

                            <span className="text-sm leading-6 text-slate-600">
                              {fitur}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
