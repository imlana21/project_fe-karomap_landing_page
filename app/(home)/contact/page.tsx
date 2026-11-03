import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import Header from "../header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Kontak | Karomap",
  description: "Hubungi CV. Karomap Semesta untuk solusi inspeksi lapangan dan WebGIS.",
};

const container = "mx-auto w-full max-w-[1110px] px-5 sm:px-6";

const contacts = [
  {
    title: "Telepon",
    description: "Hubungi tim Karomap untuk informasi produk dan kebutuhan implementasi.",
    icon: Phone,
    content: <><a href="tel:+622742820302" className="text-[var(--brand)] hover:underline">+62 274 2820 302</a><span>, </span><a href="tel:+6289623498800" className="text-[var(--brand)] hover:underline">+62 896 2349 8800</a><p className="mt-2"><a href="https://wa.me/6289623498800" target="_blank" rel="noreferrer" className="text-[var(--brand)] hover:underline">+62 896 2349 8800</a> (WhatsApp)</p></>,
  },
  {
    title: "Email",
    description: "Kirim pertanyaan atau kebutuhan kerja sama melalui email.",
    icon: Mail,
    content: <a href="mailto:contact@karomap.com?subject=Pertanyaan Produk Karomap" className="text-[var(--brand)] hover:underline">contact@karomap.com</a>,
  },
  {
    title: "Lokasi",
    description: "Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294",
    icon: MapPin,
    content: <a href="https://goo.gl/maps/2LpnchFZUNXbYmzD6" target="_blank" rel="noreferrer" className="font-medium text-[var(--brand)] hover:underline">Lihat peta</a>,
  },
];

function Field({ label, name, type = "text", placeholder, icon: Icon }: { label: string; name: string; type?: string; placeholder: string; icon: typeof User }) {
  return <label className="block text-sm font-medium text-[#354052]">{label}<span className="text-[var(--brand)]">*</span><span className="relative mt-2 block"><Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8295b0]" /><Input name={name} type={type} required placeholder={placeholder} className="h-11 rounded-md pl-10 focus-visible:ring-[var(--brand)]" /></span></label>;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] [--brand:#f45100]">
      <Header active="contact" />

      <main>
        <section className="relative bg-[#f7f8fb] py-20 sm:py-24">
          <div className={`${container} text-center`}>
            <h1 className="text-3xl font-normal tracking-tight">Kontak</h1>
            <nav className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase shadow-[0_8px_25px_rgba(31,41,55,.10)]" aria-label="Breadcrumb">
              <Link href="/" className="text-[#354052] hover:text-[var(--brand)]">Beranda</Link><span className="mx-3 text-[#b2bdca]">/</span><span className="text-[var(--brand)]">Kontak</span>
            </nav>
          </div>
          <svg viewBox="0 0 1440 34" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-8 w-full translate-y-[1px] text-white" aria-hidden="true"><path d="M0 34h1440V0H1080C721 37 360 0 360 0H0v34Z" fill="currentColor" /></svg>
        </section>

        <section className="py-20 sm:py-24">
          <div className={`${container} grid gap-12 md:grid-cols-3`}>
            {contacts.map(({ title, description, icon: Icon, content }) => <article key={title} className="text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#fbe9e1] text-[var(--brand)]"><Icon className="size-7 stroke-[1.6]" /></span><h2 className="mt-5 text-xl font-semibold">{title}</h2><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#8295b0]">{description}</p><div className="mt-4 text-sm leading-6">{content}</div></article>)}
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <div className={`${container} grid items-center gap-14 md:grid-cols-[.85fr_1.15fr]`}>
            <Card className="order-2 rounded-md border-0 bg-white shadow-[0_16px_50px_rgba(31,41,55,.12)] md:order-1"><CardContent className="p-7 sm:p-10"><h2 className="text-2xl font-medium">Hubungi Kami</h2><form className="mt-7 space-y-5"><div className="grid gap-5 sm:grid-cols-2"><Field label="Nama" name="name" placeholder="Nama" icon={User} /><Field label="Alamat email" name="email" type="email" placeholder="Alamat email" icon={Mail} /></div><Field label="Subyek " name="subject" placeholder="Subyek" icon={BookOpen} /><label className="block text-sm font-medium text-[#354052]">Pesan <span className="text-[var(--brand)]">*</span><span className="relative mt-2 block"><MessageCircle className="absolute left-3 top-3 size-4 text-[#8295b0]" /><textarea name="message" required rows={5} placeholder="Pesan" className="w-full resize-none rounded-md border bg-transparent py-3 pl-10 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-[var(--brand)] focus:ring-2 focus:ring-orange-100" /></span></label><Button type="submit" className="h-11 w-full bg-[var(--brand)] text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94700]"><Send className="size-4" />Kirim Pesan</Button></form></CardContent></Card>
            <div className="relative order-1 min-h-[360px] md:order-2 md:min-h-[520px]"><div className="absolute inset-8 rounded-full bg-orange-50 blur-3xl" /><Image src="/beranda2/hero.png" alt="Platform inspeksi Karomap" fill priority sizes="(min-width: 768px) 55vw, 100vw" className="relative object-contain" /></div>
          </div>
        </section>

        <section id="map" className="border-y bg-[#e9edf2]"><iframe title="CV. Karomap Semesta" src="https://www.google.com/maps?q=Karomap%20Sleman&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[500px] w-full border-0" /></section>
      </main>

      <footer className="bg-[#1b0700] py-8 text-center text-sm text-[#c9b9b2]"><div className={container}><p>© 2026 <Link href="/" className="text-white hover:text-[var(--brand)]">CV. Karomap Semesta</Link>. All rights reserved.</p></div></footer>
    </div>
  );
}
