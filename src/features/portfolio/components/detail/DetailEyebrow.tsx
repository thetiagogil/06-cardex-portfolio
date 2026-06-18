export const DetailEyebrow = ({ children }: { children?: string }) =>
  children ? (
    <p className="text-foreground/65 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase md:text-[11px]">
      {children}
    </p>
  ) : null;
