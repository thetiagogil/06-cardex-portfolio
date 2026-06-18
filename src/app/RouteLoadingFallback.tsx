export const RouteLoadingFallback = () => {
  return (
    <main
      aria-live="polite"
      className="text-foreground grid min-h-[60vh] place-items-center px-6"
      role="status"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="font-display text-2xl tracking-tight">Cardex</span>
        <span className="text-muted-foreground font-mono text-[10px] tracking-[0.22em] uppercase">
          Loading page
        </span>
      </div>
    </main>
  );
};
