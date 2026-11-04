import { Bookmark, ClipboardList, History, Layers3, LockKeyhole, RefreshCw, Smartphone, Users, Wifi, type LucideIcon } from "lucide-react";

export interface ProductCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ShowcaseItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const navigation = ["Beranda", "Industri", "Solusi", "Artikel", "Kontak"];

export const products: ProductCard[] = [
  { title: "Mobile App", description: "Survey, Patroli, Sensus tanaman, E-Mandor, inspeksi asset, HSE", icon: Smartphone },
  { title: "Web App", description: "Webgis, Map portal, Map history, Map dashboard, Managemen data, Repositori & Analisa spatial.", icon: ClipboardList },
  { title: "GIS Web", description: "Dynamic Geodatabase Management System", icon: Layers3 },
];

export const features: FeatureItem[] = [
  { title: "Pilihan Sistem Proteksi Data", description: "Penyimpanan dan proteksi data hasil inspeksi dapat disesuaikan dengan sistem perusahaan: cloud, intranet, maupun ekstranet.", icon: LockKeyhole },
  { title: "Otomatisasi Pelaporan dan Transfer Data", description: "Integrasi mobile dan web secara real-time mempercepat pengiriman data lapangan serta otomatisasi pelaporan.", icon: RefreshCw },
  { title: "Data Historis", description: "Riwayat inspeksi tersimpan dari waktu ke waktu untuk penilaian kondisi aset, evaluasi, dan prediksi.", icon: History },
  { title: "Anotasi Foto", description: "Tambahkan tanda dan catatan pada foto agar analisis kondisi objek lebih rinci dan mudah dipahami.", icon: Bookmark },
  { title: "GIS Supports", description: "Kelola layer, ekspor-impor data, citra satelit, serta drone imagery dalam satu modul spasial.", icon: Layers3 },
  { title: "Smart Report", description: "Rekapitulasi dan statistik otomatis membantu analisis, penyajian laporan, serta pengambilan keputusan.", icon: ClipboardList },
  { title: "Work Online/Offline", description: "Aplikasi mobile tetap dapat digunakan di lokasi tanpa koneksi internet dan disinkronkan saat kembali online.", icon: Wifi },
  { title: "Multi Level User", description: "Akses data dikelola berdasarkan peran agar informasi aman dan keputusan dapat dibuat lebih cepat.", icon: Users },
];

export const showcases: ShowcaseItem[] = [
  { title: "Formulir Yang Dinamis", subtitle: "Simple, Online & Offline", description: "Kegiatan inspeksi aset menjadi mudah dan efektif dengan formulir yang fleksibel. Data dapat langsung diunggah atau disimpan sementara ketika lokasi tidak memiliki akses internet.", image: "/beranda2/form.png", imageAlt: "Tampilan formulir inspeksi mobile" },
  { title: "Visualisasi Kondisi Aset", subtitle: "Pemberian Anotasi dan Catatan", description: "Visualisasi dengan tanda dan catatan pada foto meningkatkan kelengkapan data serta mempercepat analisis penilaian kondisi aset.", image: "/beranda2/annotation.png", imageAlt: "Tampilan anotasi kondisi aset" },
  { title: "Tracking Polygon", subtitle: "Inspeksi Berbasis Luasan atau Area", description: "Survei kawasan menghasilkan data poligon yang dapat digunakan untuk mengukur area dan mendukung analisis spasial di berbagai industri.", image: "/beranda2/tracking.png", imageAlt: "Tampilan tracking polygon pada peta" },
  { title: "Report dan Analisis Data", subtitle: "Interaktif dan otomatis", description: "Otomatisasi rekapitulasi dan grafik real-time memudahkan analisis, penyusunan laporan, serta pengambilan keputusan manajemen.", image: "/beranda2/report.png", imageAlt: "Dashboard laporan dan analisis" },
];

export const industries = [
  { title: "Pertambangan", image: "/beranda2/mining.jpg", href: "/industri/pertambangan" },
  { title: "Perkebunan", image: "/beranda2/plantation.jpg", href: "/perkebunan" },
  { title: "Minyak dan Gas", image: "/beranda2/oil.jpg", href: "/minyak-dan-gas" },
  { title: "Pemerintah", image: "/beranda2/government.jpg", href: "/pemerintah" },
];

export const clients = ["GeoHub", "Jogja Smart Province", "Kementerian PUPR", "Provinsi Riau", "Adaro", "Mitra Geotama"];
