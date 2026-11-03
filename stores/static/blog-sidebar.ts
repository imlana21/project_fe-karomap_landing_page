export interface SidebarTaxonomyItem {
  id: string;
  title: string;
  link: string;
}

export interface SidebarPost {
  id: string;
  featured_image: string;
  slug: string;
  title: string;
  published_at: string;
}

export const blogCategories: SidebarTaxonomyItem[] = [
  { id: "category-inspection", title: "Inspeksi", link: "/blogs?category=inspeksi" },
  { id: "category-webgis", title: "WebGIS", link: "/blogs?category=webgis" },
  { id: "category-technology", title: "Teknologi", link: "/blogs?category=teknologi" },
];

export const recentBlogPosts: SidebarPost[] = [
  { id: "post-1", title: "Meningkatkan kualitas inspeksi lapangan", slug: "meningkatkan-kualitas-inspeksi-lapangan", featured_image: "/window.svg", published_at: "2026-01-15" },
  { id: "post-2", title: "Manfaat WebGIS untuk operasional", slug: "manfaat-webgis-untuk-operasional", featured_image: "/globe.svg", published_at: "2026-01-08" },
  { id: "post-3", title: "Membangun laporan inspeksi yang konsisten", slug: "laporan-inspeksi-konsisten", featured_image: "/file.svg", published_at: "2025-12-20" },
];

export const blogTags: SidebarTaxonomyItem[] = [
  { id: "tag-audit", title: "Audit", link: "/blogs?tag=audit" },
  { id: "tag-mobile", title: "Mobile", link: "/blogs?tag=mobile" },
  { id: "tag-mapping", title: "Mapping", link: "/blogs?tag=mapping" },
  { id: "tag-reporting", title: "Reporting", link: "/blogs?tag=reporting" },
];
