import type { Metadata } from "next";
import AppHeader from "../../components/AppHeader";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import {
  ContactFormSection,
  ContactInfoSection,
  ContactMapSection,
} from "./contact-sections";

export const metadata: Metadata = {
  title: "Kontak | Karomap",
  description:
    "Hubungi CV. Karomap Semesta untuk solusi inspeksi lapangan dan WebGIS.",
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

      <SiteFooter compact />
    </div>
  );
}
