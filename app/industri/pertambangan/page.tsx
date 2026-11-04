import type { Metadata } from "next";
import { MiningPage } from "../../solusi/management-data-spasial/page";

export const metadata: Metadata = {
  title: "Pertambangan | Karomap",
  description:
    "Sistem inspeksi lapangan dan pengelolaan data spasial pertambangan terintegrasi berbasis mobile, WebGIS, dan dashboard.",
};

export default function PertambanganPage() {
  return <MiningPage active="industry" />;
}
