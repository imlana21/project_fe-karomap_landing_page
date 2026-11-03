export interface HomePostConfig {
  features1?: string;
  features2?: string;
  features3?: string;
}

export interface HomePost {
  id: string;
  title: string;
  description?: string;
  body?: string;
  featured_image: string;
  slug?: string;
  configs?: HomePostConfig;
}

export const heroSlides: HomePost[] = [{
  id: "hero-1",
  title: "Inspeksi lebih cepat, keputusan lebih akurat",
  description: "Platform inspeksi terpadu untuk tim lapangan dan manajemen.",
  featured_image: "/globe.svg",
  configs: {
    features1: "Data lapangan tersinkron secara real-time",
    features2: "Laporan terstruktur dan mudah ditelusuri",
    features3: "Terintegrasi dengan peta dan dashboard",
  },
}];

export const homeHeadings: HomePost[] = [{
  id: "home-heading",
  title: "Digitalisasi inspeksi dalam satu platform",
  description: "Kelola proses inspeksi dari pengumpulan data hingga pelaporan.",
  body: "<p>Kurangi pekerjaan manual, tingkatkan konsistensi data, dan pantau progres tim dari satu tempat.</p>",
  featured_image: "/window.svg",
}];

export const mobileInspection: HomePost = {
  id: "mobile-inspection",
  title: "Inspeksi mobile",
  description: "Catat temuan langsung dari lokasi melalui perangkat mobile.",
  featured_image: "/window.svg",
};

export const mobileFeatures: HomePost[] = [
  { id: "mobile-1", title: "Formulir digital", featured_image: "" },
  { id: "mobile-2", title: "Dokumentasi foto", featured_image: "" },
  { id: "mobile-3", title: "Lokasi otomatis", featured_image: "" },
  { id: "mobile-4", title: "Sinkronisasi data", featured_image: "" },
];

export const softwareInspection: HomePost[] = [{
  id: "software-inspection",
  title: "Dashboard inspeksi",
  description: "Pantau status, temuan, dan tindak lanjut secara terpusat.",
  featured_image: "/next.svg",
}];

export const softwareFeatures: HomePost[] = [
  { id: "software-1", title: "Dashboard real-time", featured_image: "" },
  { id: "software-2", title: "Manajemen temuan", featured_image: "" },
  { id: "software-3", title: "Laporan otomatis", featured_image: "" },
  { id: "software-4", title: "Kontrol akses", featured_image: "" },
];

export const webgisSupport: HomePost = {
  id: "webgis-support",
  title: "Dukungan WebGIS",
  description: "Visualisasikan aset, lokasi inspeksi, dan temuan dalam peta interaktif.",
  body: "<p>Gabungkan data spasial dan hasil inspeksi untuk memahami kondisi lapangan secara menyeluruh.</p>",
  featured_image: "/globe.svg",
};

export const webgisFeatures: HomePost[] = [
  { id: "webgis-1", title: "Pemetaan aset", featured_image: "" },
  { id: "webgis-2", title: "Layer data", featured_image: "" },
  { id: "webgis-3", title: "Analisis lokasi", featured_image: "" },
];

export const industryHeadings: HomePost[] = [{
  id: "industry-heading",
  title: "Solusi untuk berbagai industri",
  description: "Alur kerja fleksibel untuk kebutuhan inspeksi lintas sektor.",
  body: "<p>Konfigurasikan formulir, proses persetujuan, dan laporan sesuai standar organisasi.</p>",
  featured_image: "",
}];

export const industryImages: HomePost[] = [
  { id: "industry-image-1", title: "Energi", description: "1", featured_image: "/globe.svg" },
  { id: "industry-image-2", title: "Konstruksi", description: "2", featured_image: "/window.svg" },
  { id: "industry-image-3", title: "Manufaktur", description: "3", featured_image: "/file.svg" },
];

export const industryFields: HomePost[] = [
  { id: "industry-1", title: "Energi dan utilitas", slug: "energi-utilitas", featured_image: "" },
  { id: "industry-2", title: "Konstruksi", slug: "konstruksi", featured_image: "" },
  { id: "industry-3", title: "Manufaktur", slug: "manufaktur", featured_image: "" },
  { id: "industry-4", title: "Pertambangan", slug: "pertambangan", featured_image: "" },
];

export const companyHeading: HomePost = {
  id: "company-heading",
  title: "Dipercaya berbagai perusahaan",
  description: "Mendukung tim operasional dalam menjaga kualitas dan kepatuhan.",
  featured_image: "",
};

export const companyLogos: HomePost[] = [
  { id: "company-1", title: "Company 1", featured_image: "/vercel.svg" },
  { id: "company-2", title: "Company 2", featured_image: "/next.svg" },
  { id: "company-3", title: "Company 3", featured_image: "/globe.svg" },
  { id: "company-4", title: "Company 4", featured_image: "/window.svg" },
  { id: "company-5", title: "Company 5", featured_image: "/file.svg" },
];
