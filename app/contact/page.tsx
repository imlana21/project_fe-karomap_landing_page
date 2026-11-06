import type { Metadata } from "next";
import { siteConfig } from "@/stores/static/config";
import AppHeader from "../../components/AppHeader";
import { PageHero } from "@/components/site/PageHero";
import AppFooter from "@/components/AppFooter";
import {
  ContactFormSection,
  ContactInfoSection,
  ContactMapSection,
} from "./contact-sections";

export const metadata: Metadata = {
  title: "Kontak",
  alternates: { canonical: "/contact" },
  description:
    `Hubungi ${siteConfig.name} untuk solusi inspeksi lapangan dan WebGIS.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <AppHeader active="contact" />

      <main>
        <PageHero title="Kontak" />
        <ContactInfoSection />
        <ContactFormSection />
        <ContactMapSection />
      </main>

      <AppFooter />
    </div>
  );
}
