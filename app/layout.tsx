import type { Metadata } from "next";
import { contactLinks, siteConfig } from "@/stores/static/config";
import { Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `Pengembangan aplikasi GIS dan WebGIS, inspeksi lapangan, dan manajemen data spasial oleh ${siteConfig.brand}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.brand,
    template: `%s | ${siteConfig.brand}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.brand,
    title: siteConfig.brand,
    description,
  },
  twitter: { card: "summary", title: siteConfig.brand, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${nunito.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteConfig.url}/#organization`,
              name: siteConfig.name,
              url: siteConfig.url,
              email: siteConfig.email,
              telephone: contactLinks.telp.slice(4),
              address: siteConfig.alamat,
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
