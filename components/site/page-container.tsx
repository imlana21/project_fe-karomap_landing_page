import { cn } from "@/lib/utils";

export const containerClassName = "mx-auto w-full max-w-277.5 px-5 sm:px-6";

export function PageContainer({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={cn(containerClassName, className)}>{children}</div>;
}
