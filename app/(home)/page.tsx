import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader";
import { ClientsSection } from "./partials/clients-section";
import { ContactSection } from "./partials/contact-section";
import { FeaturesSection } from "./partials/features-section";
import { HeroSection } from "./partials/hero-section";
import { HomeFooter } from "./partials/home-footer";
import { IndustriesSection } from "./partials/industries-section";
import { ShowcasesSection } from "./partials/showcases-section";
import { TechStackSection } from "./partials/tech-stack-section";

export const metadata: Metadata = {
  title: "Karomap - Field Inspection App",
  description:
    "Platform inspeksi lapangan online dan offline dengan WebGIS, laporan otomatis, dan manajemen data spasial.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#111827] [--brand:#f45100]">
      <AppHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcasesSection />
        <TechStackSection />
        <IndustriesSection />
        <ContactSection />
        <ClientsSection />
      </main>
      <HomeFooter />
    </div>
  );
}
