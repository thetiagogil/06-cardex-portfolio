import { Download } from "lucide-react";

export const ResumeLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 border border-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
  >
    <span>{label}</span>
    <Download className="h-3.5 w-3.5" strokeWidth={1.8} />
  </a>
);
