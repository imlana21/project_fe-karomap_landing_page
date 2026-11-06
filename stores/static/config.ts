export const siteConfig = {
  name: "Karomap Semesta",
  url: "https://www.karomap.com",
  brand: "Karomap",
  email: "contact@karomap.com",
  telp: "0274 2820 302",
  wa: "0813 2748 3846",
  alamat: "Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294",
} as const;

export const contactLinks = {
  email: `mailto:${siteConfig.email}`,
  telp: `tel:+${siteConfig.telp.replace(/\D/g, "").replace(/^0/, "62")}`,
  wa: `https://wa.me/${siteConfig.wa.replace(/\D/g, "").replace(/^0/, "62")}`,
  maps: `https://www.google.com/maps?q=${encodeURIComponent(`${siteConfig.name}, ${siteConfig.alamat}`)}`,
} as const;
