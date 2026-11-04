import { PageContainer } from "@/components/site/page-container";
import { clients } from "@/stores/static/beranda2";

export function ClientsSection() {
  return (
    <section className="pb-28">
      <PageContainer>
        <h2 className="text-center text-3xl font-normal">Klien</h2>
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-20 items-center justify-center text-center text-sm font-semibold text-[#8295b0] grayscale transition hover:text-(--brand) hover:grayscale-0"
            >
              {client}
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
