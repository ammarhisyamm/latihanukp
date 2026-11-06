import type { ReactNode } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { UkpShell } from "@/components/ukp-shell";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: ({ children }: { children: ReactNode }) => (
    <html lang="id">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  ),
  component: () => <UkpShell><Outlet /></UkpShell>,
  notFoundComponent: () => (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
      <Link to="/ukp" className="text-primary underline">Kembali ke Belajar UKP</Link>
    </div>
  ),
});
