import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Menu, MessageCircle, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { clients, features, industries, navigation, products, showcases } from "@/stores/static/beranda2";

export const metadata: Metadata = {
  title: "Field Inspection App | Karomap",
  description: "Platform inspeksi lapangan online dan offline dengan WebGIS, laporan otomatis, dan manajemen data spasial.",
};

const container = "mx-auto w-full max-w-[1110px] px-5 sm:px-6";

export default function Beranda2Page() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#111827] [--brand:#f45100]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className={`${container} flex h-[76px] items-center justify-between`}>
          <Link href="/beranda2" className="flex items-center gap-2 text-xl font-bold tracking-tight" aria-label="Karomap beranda">
            <span className="grid size-9 place-items-center rounded-lg bg-[var(--brand)] text-sm text-white">K</span>
            <span>KAROMAP</span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
            {navigation.map((item, index) => <Link key={item} href={index === 0 ? "/beranda2" : `#${item.toLowerCase()}`} className={`text-xs font-semibold uppercase tracking-[0.08em] transition-colors hover:text-[var(--brand)] ${index === 0 ? "text-[var(--brand)]" : "text-[#354052]"}`}>{item}</Link>)}
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Buka menu"><Menu /></Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white pb-32 pt-20 lg:pb-44 lg:pt-28">
          <div className={`${container} grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr]`}>
            <div className="relative z-10 max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Karomap Inspection Suite</p>
              <h1 className="text-4xl font-normal uppercase leading-tight tracking-[0.04em] sm:text-5xl">Field Inspection App</h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#8295b0]">Efisien dan meningkatkan keamanan dalam pekerjaan inspeksi lapangan.</p>
              <Link href="#kontak" className={cn(buttonVariants(), "mt-9 h-11 bg-[var(--brand)] px-7 text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94700]")}>Mulai</Link>
            </div>
            <div className="relative min-h-[360px] lg:min-h-[470px]">
              <div className="absolute -inset-12 rounded-full bg-orange-100/55 blur-3xl" />
              <Image src="/beranda2/hero.png" alt="Karomap pada laptop dan perangkat mobile" fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="relative object-contain drop-shadow-2xl" />
            </div>
          </div>
          <div className={`${container} absolute inset-x-0 -bottom-1 translate-y-1/2`}>
            <div className="grid gap-5 md:grid-cols-3 md:px-14">
              {products.map(({ title, description, icon: Icon }) => <Card key={title} className="rounded-md border-[#e5e8ed] bg-white shadow-[0_12px_35px_rgba(35,45,65,.08)]"><CardContent className="flex min-h-44 flex-col items-center justify-center p-6 text-center"><Icon className="size-9 stroke-[1.6] text-[var(--brand)]" /><h2 className="mt-4 text-xl font-medium">{title}</h2><p className="mt-2 text-sm leading-6 text-[#8295b0]">{description}</p></CardContent></Card>)}
            </div>
          </div>
        </section>

        <section className="pb-28 pt-44 lg:pb-36 lg:pt-52">
          <div className={`${container} grid gap-x-24 gap-y-12 md:grid-cols-2`}>
            {features.map(({ title, description, icon: Icon }) => <article key={title} className="flex gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fbe9e1] text-[var(--brand)]"><Icon className="size-5 stroke-[1.7]" /></span><div><h2 className="text-xl font-normal">{title}</h2><p className="mt-3 text-[15px] leading-7 text-[#8295b0]">{description}</p></div></article>)}
          </div>
        </section>

        <section className="pb-28 lg:pb-40">
          <div className={container}>
            <h2 className="text-center text-3xl font-normal uppercase tracking-[0.04em]">Why Us</h2>
            <div className="mt-24 space-y-24 lg:space-y-32">
              {showcases.map((item, index) => <article key={item.title} className="grid items-center gap-12 md:grid-cols-2 lg:gap-24"><div className={`relative min-h-[330px] ${index % 2 ? "md:order-2" : ""}`}><Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-contain" /></div><div><h3 className="text-3xl font-normal tracking-tight">{item.title}</h3><p className="mt-3 text-xl font-medium">{item.subtitle}</p><p className="mt-5 text-[15px] leading-7 text-[#8295b0]">{item.description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="industri" className="pb-28 lg:pb-36">
          <div className={container}>
            <div className="mx-auto max-w-2xl text-center"><h2 className="text-3xl font-normal uppercase tracking-[0.04em]">Industri</h2><p className="mt-5 leading-7 text-[#8295b0]">Platform kami dapat diterapkan di berbagai industri dan disesuaikan dengan kebutuhan perusahaan Anda.</p></div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <Link key={industry.title} href={industry.href} className="group relative aspect-[.9] overflow-hidden rounded-md shadow-lg"><Image src={industry.image} alt={industry.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" /><h3 className="absolute bottom-5 left-5 text-lg font-medium text-white">{industry.title}</h3></Link>)}</div>
          </div>
        </section>

        <section id="kontak" className="pb-28">
          <div className={container}>
            <Card className="rounded-md border-[#e5e8ed] bg-white shadow-[0_14px_40px_rgba(35,45,65,.08)]"><CardContent className="p-7"><h2 className="text-xl font-medium">Hubungi Kami</h2><form className="mt-7 space-y-5"><div className="grid gap-5 md:grid-cols-3">{[["Nama","text","Nama"],["Alamat Email","email","Alamat email"],["Subyek","text","Subyek"]].map(([label,type,placeholder]) => <label key={label} className="space-y-2 text-sm font-medium">{label} <span className="text-[var(--brand)]">*</span><Input type={type} placeholder={placeholder} required className="mt-2 h-11 rounded-md focus-visible:ring-[var(--brand)]" /></label>)}</div><label className="block space-y-2 text-sm font-medium">Pesan <span className="text-[var(--brand)]">*</span><textarea required rows={5} placeholder="Pesan" className="mt-2 w-full resize-none rounded-md border bg-transparent px-3 py-3 text-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-orange-100" /></label><div className="flex justify-end gap-3"><Button type="reset" variant="ghost">Reset</Button><Button type="submit" className="bg-[var(--brand)] text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94700]"><Send className="size-4" />Kirim Pesan</Button></div></form></CardContent></Card>
          </div>
        </section>

        <section className="pb-28"><div className={container}><h2 className="text-center text-3xl font-normal">Klien</h2><div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">{clients.map((client) => <div key={client} className="flex h-20 items-center justify-center text-center text-sm font-semibold text-[#8295b0] grayscale transition hover:text-[var(--brand)] hover:grayscale-0">{client}</div>)}</div></div></section>
      </main>

      <footer id="kontak-footer" className="relative overflow-hidden bg-[#1b0700] text-[#c9b9b2]"><svg viewBox="0 0 1440 90" className="absolute inset-x-0 top-0 w-full -translate-y-px text-[#f7f8fb]" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 0h1440v22C1090 89 600 5 0 82V0Z" /></svg><div className={`${container} grid gap-12 pb-16 pt-36 md:grid-cols-[1.25fr_.75fr_1fr]`}><div><div className="flex items-center gap-2 text-xl font-bold text-white"><span className="grid size-9 place-items-center rounded-lg bg-[var(--brand)] text-sm">K</span>KAROMAP</div><p className="mt-6 max-w-sm leading-7">Jl. Cendrawasih, Mejing Lor, Ambarketawang, Gamping, Sleman 55294</p><div className="mt-4 space-y-2 text-sm"><p>Telepon: +62 274 2820 302</p><p>WhatsApp: +62 896 2349 8800</p><p>Email: contact@karomap.com</p></div><div className="mt-6 flex gap-2">{["Fb", "Yt", "Gh"].map((label) => <Button key={label} variant="outline" size="icon-sm" className="border-white/20 bg-transparent text-xs text-white hover:bg-white/10" aria-label={label}>{label}</Button>)}<Button variant="outline" size="icon-sm" className="border-white/20 bg-transparent text-white hover:bg-white/10" aria-label="WhatsApp"><MessageCircle className="size-4" /></Button></div></div><div><h2 className="text-lg font-medium text-white">Bidang Industri</h2><ul className="mt-6 space-y-3 text-sm">{industries.map((industry) => <li key={industry.title}><Link href={industry.href} className="transition hover:text-[var(--brand)]">{industry.title}</Link></li>)}</ul></div><div><h2 className="text-lg font-medium text-white">Surat Kabar</h2><p className="mt-6 leading-7">Berlangganan informasi terbaru dari kami.</p><form className="mt-5 space-y-3"><label className="relative block"><Mail className="absolute left-3 top-3 size-5" /><Input type="email" required placeholder="Masukkan alamat email" className="h-11 border-white/15 bg-black/30 pl-11 text-white placeholder:text-white/35" /></label><Button className="w-full bg-[#745044] text-white hover:bg-[#865d50]">Berlangganan</Button></form></div></div><div className="border-t border-white/10"><div className={`${container} flex items-center justify-between py-6 text-sm`}><p>© 2026 CV. Karomap Semesta. All rights reserved.</p><Link href="#top" aria-label="Kembali ke atas" className={cn(buttonVariants({ size: "icon-sm" }), "bg-[var(--brand)] text-white")}><ArrowUp /></Link></div></div></footer>
    </div>
  );
}
