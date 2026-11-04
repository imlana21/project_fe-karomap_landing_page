import { PageContainer } from "@/components/site/page-container";
import { features } from "@/stores/static/beranda2";

export function FeaturesSection() {
  return (
    <section className="pb-28 pt-20 md:pt-44 lg:pb-36 lg:pt-52">
      <PageContainer className="grid gap-x-24 gap-y-12 md:grid-cols-2">
        {features.map(({ title, description, icon: Icon }) => (
          <article key={title} className="flex gap-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fbe9e1] text-(--brand)">
              <Icon className="size-5 stroke-[1.7]" />
            </span>
            <div>
              <h2 className="text-xl font-normal">{title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#8295b0]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </PageContainer>
    </section>
  );
}
