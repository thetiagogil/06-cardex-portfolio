import { ArrowLeft } from "lucide-react";

export const PortfolioDetailBackButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
  >
    <ArrowLeft className="h-3.5 w-3.5" />
    <span>{label}</span>
  </button>
);
