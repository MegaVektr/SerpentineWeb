"use client";

import { ReactNode } from "react";

// Next.js 16 + Chrome/Edge support `::view-transition-old/new(root)` natively
// for App Router navigations. The CSS in globals.css activates the crossfade.
// This wrapper exists as a future hook for per-section view-transition-name.
export function PageTransition({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
