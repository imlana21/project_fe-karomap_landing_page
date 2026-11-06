export type BlogPost = {
  slug: string;
  title: string;
  image: string;
  author: string;
  date: string;
  comments: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sistem-informasi-jaringan-pipa-pdam-air-bersih",
    title: "Sistem Informasi Jaringan Pipa PDAM / GIS PDAM",
    image: "/blog/pdam.jpg",
    author: "karomap",
    date: "2020-09-04",
    comments: 0,
  },
  {
    slug: "sistem-informasi-database-webgis-gis-jalan-dan-jembatan",
    title: "Sistem Informasi Database / WebGIS / GIS Jalan dan Jembatan",
    image: "/blog/jalan-jembatan.png",
    author: "karomap",
    date: "2021-08-16",
    comments: 1,
  },
  {
    slug: "gis-untuk-transportasi",
    title: "GIS untuk Transportasi",
    image: "/blog/transportasi.jpg",
    author: "karomap",
    date: "2021-08-18",
    comments: 0,
  },
  {
    slug: "pengembangan-aplikasi-gis-pada-berbagai-bidang-industri",
    title: "Pengembangan Aplikasi GIS pada Berbagai Bidang Industri",
    image: "/blog/gis-industri.jpg",
    author: "karomap",
    date: "2021-08-18",
    comments: 0,
  },
  {
    slug: "sistem-informasi-database-webgis-gis-irigasi-sumber-daya-air",
    title: "Sistem Informasi Database / WebGIS / GIS Irigasi (Sumber Daya Air)",
    image: "/blog/irigasi.jpg",
    author: "karomap",
    date: "2021-08-19",
    comments: 0,
  },
];
