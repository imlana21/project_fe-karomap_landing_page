import { Send } from "lucide-react";
import { PageContainer } from "@/components/site/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fields = [
  ["Nama", "text", "Nama"],
  ["Alamat Email", "email", "Alamat email"],
  ["Subyek", "text", "Subyek"],
] as const;

export function ContactSection() {
  return (
    <section id="kontak" className="pb-28">
      <PageContainer>
        <Card className="rounded-md border-[#e5e8ed] bg-white shadow-[0_14px_40px_rgba(35,45,65,.08)]">
          <CardContent className="p-7">
            <h2 className="text-xl font-medium">Hubungi Kami</h2>
            <form className="mt-7 space-y-5">
              <div className="grid gap-5 md:grid-cols-3">
                {fields.map(([label, type, placeholder]) => (
                  <label key={label} className="space-y-2 text-sm font-medium">
                    {label} <span className="text-(--brand)">*</span>
                    <Input
                      type={type}
                      placeholder={placeholder}
                      required
                      className="mt-2 h-11 rounded-md focus-visible:ring-(--brand)"
                    />
                  </label>
                ))}
              </div>
              <label className="block space-y-2 text-sm font-medium">
                Pesan <span className="text-(--brand)">*</span>
                <textarea
                  required
                  rows={5}
                  placeholder="Pesan"
                  className="mt-2 w-full resize-none rounded-md border bg-transparent px-3 py-3 text-sm outline-none transition focus:border-(--brand) focus:ring-2 focus:ring-orange-100"
                />
              </label>
              <div className="flex justify-end gap-3">
                <Button type="reset" variant="ghost">
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="bg-(--brand) text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94700]"
                >
                  <Send className="size-4" />
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </PageContainer>
    </section>
  );
}
