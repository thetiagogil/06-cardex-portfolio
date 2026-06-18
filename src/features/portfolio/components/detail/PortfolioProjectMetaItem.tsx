import type { ReactNode } from "react";

export const PortfolioProjectMetaItem = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => (
  <div>
    <dt className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
      {label}
    </dt>
    <dd className="mt-2 text-sm leading-relaxed">{children}</dd>
  </div>
);
