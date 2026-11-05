import {
  BookOpen,
  Mail,
  MessageCircle,
  Send,
  User,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ContactFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon: LucideIcon;
}

function ContactField({
  label,
  name,
  type = "text",
  placeholder = label,
  icon: Icon,
}: ContactFieldProps) {
  return (
    <label className="block text-sm font-medium text-[#354052]">
      {label} <span className="text-(--brand)">*</span>
      <span className="relative mt-2 block">
        <Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8295b0]" />
        <Input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="h-11 rounded-md pl-10 focus-visible:ring-(--brand)"
        />
      </span>
    </label>
  );
}

interface ContactFormProps {
  columns?: 2 | 3;
  showReset?: boolean;
  submitFullWidth?: boolean;
}

export function ContactForm({
  columns = 3,
  showReset = false,
  submitFullWidth = false,
}: ContactFormProps) {
  return (
    <form className="mt-7 space-y-5">
      <div
        className={cn(
          "grid gap-5",
          columns === 3 ? "md:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        <ContactField label="Nama" name="name" icon={User} />
        <ContactField
          label="Alamat email"
          name="email"
          type="email"
          icon={Mail}
        />
        {columns === 3 && (
          <ContactField label="Subyek" name="subject" icon={BookOpen} />
        )}
      </div>
      {columns === 2 && (
        <ContactField label="Subyek" name="subject" icon={BookOpen} />
      )}
      <label className="block text-sm font-medium text-[#354052]">
        Pesan <span className="text-(--brand)">*</span>
        <span className="relative mt-2 block">
          <MessageCircle className="absolute left-3 top-3 size-4 text-[#8295b0]" />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Pesan"
            className="w-full resize-none rounded-md border bg-transparent py-3 pl-10 pr-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-(--brand) focus:ring-2 focus:ring-orange-100"
          />
        </span>
      </label>
      <div
        className={cn(
          "flex gap-3",
          submitFullWidth ? "block" : "flex-col justify-end sm:flex-row",
        )}
      >
        {showReset && (
          <Button type="reset" variant="outline" className="h-11 sm:min-w-28">
            Reset
          </Button>
        )}
        <Button
          type="submit"
          className={cn(
            "h-11 bg-(--brand) text-white shadow-lg shadow-orange-500/20 hover:bg-[#d94700]",
            submitFullWidth ? "w-full" : "sm:min-w-40",
          )}
        >
          <Send className="size-4" /> Kirim Pesan
        </Button>
      </div>
    </form>
  );
}
