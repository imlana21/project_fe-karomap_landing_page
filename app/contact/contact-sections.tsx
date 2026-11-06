import Image from "next/image";
import { siteConfig, contactLinks } from "@/stores/static/config";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactField";
import { PageContainer } from "@/components/site/PageContainer";
import { Card, CardContent } from "@/components/ui/card";

const contacts = [
  {
    title: "Telepon",
    description:
      `Hubungi tim ${siteConfig.brand} untuk informasi produk dan kebutuhan implementasi.`,
    icon: Phone,
    content: (
      <>
        <a href={contactLinks.telp} className="text-(--brand) hover:underline">
          {siteConfig.telp}
        </a>
        <p className="mt-2">
          <a
            href={contactLinks.wa}
            target="_blank"
            rel="noreferrer"
            className="text-(--brand) hover:underline"
          >
            {siteConfig.wa}
          </a>{" "}
          (WhatsApp)
        </p>
      </>
    ),
  },
  {
    title: "Email",
    description: "Kirim pertanyaan atau kebutuhan kerja sama melalui email.",
    icon: Mail,
    content: (
      <a
        href={`${contactLinks.email}?subject=${encodeURIComponent(`Pertanyaan Produk ${siteConfig.brand}`)}`}
        className="text-(--brand) hover:underline"
      >
        {siteConfig.email}
      </a>
    ),
  },
  {
    title: "Lokasi",
    description:
      siteConfig.alamat,
    icon: MapPin,
    content: (
      <a
        href={contactLinks.maps}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-(--brand) hover:underline"
      >
        Lihat peta
      </a>
    ),
  },
];

export function ContactInfoSection() {
  return (
    <section className="py-20 sm:py-24">
      <PageContainer className="grid gap-12 md:grid-cols-3">
        {contacts.map(({ title, description, icon: Icon, content }) => (
          <article key={title} className="text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#fbe9e1] text-(--brand)">
              <Icon className="size-7 stroke-[1.6]" />
            </span>
            <h2 className="mt-5 text-xl font-semibold">{title}</h2>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#8295b0]">
              {description}
            </p>
            <div className="mt-4 text-sm leading-6">{content}</div>
          </article>
        ))}
      </PageContainer>
    </section>
  );
}

export function ContactFormSection() {
  return (
    <section className="pb-24 sm:pb-32">
      <PageContainer className="grid items-center gap-14 md:grid-cols-[.85fr_1.15fr]">
        <Card className="order-2 rounded-md border-0 bg-white shadow-[0_16px_50px_rgba(31,41,55,.12)] md:order-1">
          <CardContent className="p-7 sm:p-10">
            <h2 className="text-2xl font-medium">Hubungi Kami</h2>
            <ContactForm columns={2} submitFullWidth />
          </CardContent>
        </Card>
        <div className="relative order-1 min-h-90 md:order-2 md:min-h-130">
          <div className="absolute inset-8 rounded-full bg-orange-50 blur-3xl" />
          <Image
            src="/beranda2/hero.png"
            alt={`Platform inspeksi ${siteConfig.brand}`}
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="relative object-contain"
          />
        </div>
      </PageContainer>
    </section>
  );
}

export function ContactMapSection() {
  return (
    <PageContainer className="">
      <iframe
        title={siteConfig.name}
        src={`${contactLinks.maps}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-100 w-full border-0 rounded-lg"
      />
    </PageContainer>
  );
}
