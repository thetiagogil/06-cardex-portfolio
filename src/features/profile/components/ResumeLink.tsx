import { Download } from "lucide-react";

export const ResumeLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="border-foreground text-foreground hover:bg-foreground hover:text-background inline-flex items-center gap-2 border px-5 py-3 font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300"
  >
    <span>{label}</span>
    <Download className="h-3.5 w-3.5" strokeWidth={1.8} />
  </a>
);
