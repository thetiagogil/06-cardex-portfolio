import { Suspense, type ReactNode } from "react";
import { RouteLoadingFallback } from "@/app/RouteLoadingFallback";

interface RouteSuspenseProps {
  children: ReactNode;
}

export const RouteSuspense = ({ children }: RouteSuspenseProps) => (
  <Suspense fallback={<RouteLoadingFallback />}>{children}</Suspense>
);
