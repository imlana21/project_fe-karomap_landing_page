import {
  Bookmark,
  ClipboardList,
  History,
  Layers3,
  LockKeyhole,
  RefreshCw,
  Smartphone,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const navigation = ["Beranda", "Solusi", "Artikel", "Kontak"];

export interface ProductCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const products: ProductCard[] = [
  {
    title: "Mobile App",
    description:
      "Survey, Patroli, Sensus tanaman, E-Mandor, inspeksi asset, HSE",
    icon: Smartphone,
  },
  {
    title: "Web App",
    description:
      "Webgis, Map portal, Map history, Map dashboard, Managemen data, Repositori & Analisa spatial.",
    icon: ClipboardList,
  },
];

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: FeatureItem[] = [
  {
    title: "Pilihan Sistem Proteksi Data",
    description:
      "Penyimpanan dan proteksi data hasil inspeksi dapat disesuaikan dengan sistem perusahaan: cloud, intranet, maupun ekstranet.",
    icon: LockKeyhole,
  },
  {
    title: "Otomatisasi Pelaporan dan Transfer Data",
    description:
      "Integrasi mobile dan web secara real-time mempercepat pengiriman data lapangan serta otomatisasi pelaporan.",
    icon: RefreshCw,
  },
  {
    title: "Data Historis",
    description:
      "Riwayat inspeksi tersimpan dari waktu ke waktu untuk penilaian kondisi aset, evaluasi, dan prediksi.",
    icon: History,
  },
  {
    title: "Anotasi Foto",
    description:
      "Tambahkan tanda dan catatan pada foto agar analisis kondisi objek lebih rinci dan mudah dipahami.",
    icon: Bookmark,
  },
  {
    title: "GIS Supports",
    description:
      "Kelola layer, ekspor-impor data, citra satelit, serta drone imagery dalam satu modul spasial.",
    icon: Layers3,
  },
  {
    title: "Smart Report",
    description:
      "Rekapitulasi dan statistik otomatis membantu analisis, penyajian laporan, serta pengambilan keputusan.",
    icon: ClipboardList,
  },
  {
    title: "Work Online/Offline",
    description:
      "Aplikasi mobile tetap dapat digunakan di lokasi tanpa koneksi internet dan disinkronkan saat kembali online.",
    icon: Wifi,
  },
  {
    title: "Multi Level User",
    description:
      "Akses data dikelola berdasarkan peran agar informasi aman dan keputusan dapat dibuat lebih cepat.",
    icon: Users,
  },
];

export interface ServicesItem {
  title: string;
  description: string;
  fitur: string[];
  image: string;
}

export const services: ServicesItem[] = [
  {
    title: "Kustom WebGIS",
    description:
      "WebGIS & dashboard spasial untuk operasional, monitoring, analisi dan publikasi berbasis lokasi.",
    fitur: [
      "Peta interaktif multi-layer",
      "Pencarian, filter & query spasial",
      "Dashboard statistik",
      "Role-based access & multi-user",
      "Map history",
      "Export data & laporan",
    ],
    image: "/home/services/01.jpg",
  },
  {
    title: "Aplikasi GIS",
    description:
      "Aplikasi survey lapangan, inspeksi, sensus & patroli dengan GPS, foto geotag, dan mode offline.",
    fitur: [
      "Form survey dinamis",
      "GPS tagging & foto geotag",
      "Mode offline & sinkronisasi otomatis",
      "Validasi & quality control data",
      "Tracking rute & aktivitas surveyor",
      "Sinkronisasi real-time ke Dashboard WebGIS",
    ],
    image: "/home/services/02.jpg",
  },
  {
    title: "Analisa Geospatial",
    description:
      "Analisis spasial profesional untuk insight dan pengambilan keputusan.",
    fitur: [
      "Overlay & intersection analysis",
      "Heatmap & density mapping",
      "Buffer & proximity analysis",
      "Land change detection",
      "Analisis jaringan & aksesibilitas",
      "Pemodelan spasial",
      "Analisis lokasi optimal",
    ],
    image: "/home/services/03.jpg",
  },
  {
    title: "Manajemen Data Spatial",
    description:
      "Pengelolaan & integrasi data spasial terpusat, terstandar, dan terhubung.",
    fitur: [
      "Konversi & standardisasi format data",
      "Validasi kualitas data",
      "Database spasial (PostGIS/GeoServer)",
      "Publikasi via web service (WMS/WFS/REST API)",
      "Manajemen metadata & katalog data",
      "Backup & keamanan data",
    ],
    image: "/home/services/04.jpg",
  },
];

type IndustriesItem = {
  title: string;
  image: string;
  href: string;
  description: string;
};

export const industries: IndustriesItem[] = [
  {
    title: "Infrastruktur",
    image: "/home/industries/infrastruktur.png",
    href: "#",
    description: "Pemetaan aset, monitoring proyek & inspeksi infrastruktur",
  },
  {
    title: "Pertambangan",
    image: "/home/industries/pertambangan.png",
    href: "#",
    description:
      "Pemetaan konsesi, monitoring operasional & reklamasi tambang, Inspeksi aset",
  },
  {
    title: "Perkebunan",
    image: "/home/industries/perkebunan.png",
    href: "#",
    description:
      "E-mandor, monitoring produksi, pemupukan, sensus tanaman, inspeksi aset, Tracking angkut dan traceability",
  },
  {
    title: "Kehutanan",
    image: "/home/industries/kehutanan.png",
    href: "#",
    description:
      "Survey keanekaragaman hayati, patroli, monitoring Kawasan & deteksi deforestasi",
  },
  {
    title: "Minyak dan Gas",
    image: "/home/industries/migas.jpeg",
    href: "#",
    description: "Pemetaan aset & pipa, inspeksi lapangan & HSE",
  },
  {
    title: "Lingkungan",
    image: "/home/industries/lingkungan.png ",
    href: "#",
    description: "Monitoring kualitas lingkungan, Hotspot titik api & EWS",
  },
  {
    title: "Bisnis dan Retail",
    image: "/home/industries/bisnis-retail.png",
    href: "#",
    description:
      "Analisis lokasi, pemetaan outlet, heatmap pelanggan & optimasi distribusi",
  },
  {
    title: "Pemerintah",
    image: "/home/industries/pemerintah.png",
    href: "#",
    description:
      "Tata ruang, perizinan (IMB), managemen asset, SDA/ irigasi, Smart city",
  },
];

export const clients = [
  {
    name: "Daerah Istimewa Yogyakarta",
    image: "/home/clients/diy.png",
  },
  {
    name: "MARS Harvest",
    image: "/home/clients/mars.svg",
  },
  {
    name: "Kementerian Lingkungan Hidup dan Kehutanan",
    image: "/home/clients/klhk.png",
  },
  {
    name: "Adaro Energy Indonesia",
    image: "/home/clients/adaro.png",
  },
  {
    name: "Kementerian PUPR",
    image: "/home/clients/pupr.png",
  },
  {
    name: "WWF Indonesia",
    image: "/home/clients/wwf.png",
  },
  {
    name: "Kereta Api Indonesia",
    image: "/home/clients/kai.png",
  },
  {
    name: "Universitas Gadjah Mada",
    image: "/home/clients/ugm.svg",
  },
  {
    name: "United States Agency International Development",
    image: "/home/clients/usaid.png",
  },
  {
    name: "Geohub",
    image: "/home/clients/geohub.png",
  },
  {
    name: "Provinsi Riau",
    image: "/home/clients/riau.png",
  },
  {
    name: "Mitra Geotama",
    image: "/home/clients/mitrageotama.png",
  },
  {
    name: "Kabupaten Sleman",
    image: "/home/clients/sleman.png",
  },
  {
    name: "Kabupaten Purworejo",
    image: "/home/clients/purworejo.png",
  },
];
