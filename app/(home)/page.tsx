import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader";
import ClientsSection from "./partials/ClientsSection";
import HeroSection from "./partials/HeroSection";
import { IndustriesSection } from "./partials/IndustriesSection";
import TechStackSection from "./partials/TechStackSection";
import ServicesSection from "./partials/ServicesSection";
import AppFooter from "@/components/AppFooter";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Platform inspeksi lapangan online dan offline dengan WebGIS, laporan otomatis, dan manajemen data spasial.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#111827] [--brand:#f45100]">
      <AppHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <IndustriesSection />
        <ClientsSection />
      </main>
      <AppFooter />
    </div>
  );
}
