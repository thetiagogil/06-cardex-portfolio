import { Spinner } from "@radix-ui/themes/components/spinner";

export const RouteLoadingFallback = () => {
  return (
    <main
      aria-live="polite"
      className="text-foreground place-items-center p-10"
      role="status"
    >
      <div className="items-centertext-center flex flex-col">
        <Spinner
          aria-label="Loading page"
          className="route-loading-spinner"
          size="2"
        />
      </div>
    </main>
  );
};
