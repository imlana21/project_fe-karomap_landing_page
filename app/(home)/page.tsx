import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader";
import { ClientsSection } from "./partials/clients-section";
import FeaturesSection from "./partials/features-section";
import HeroSection from "./partials/HeroSection";
import { HomeFooter } from "./partials/home-footer";
import { IndustriesSection } from "./partials/IndustriesSection";
import TechStackSection from "./partials/TechStackSection";
import ServicesSection from "./partials/ServicesSection";

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
        <ServicesSection />
        <TechStackSection />
        <IndustriesSection />
        <ClientsSection />
      </main>
      <HomeFooter />
    </div>
  );
}
