import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import type { ReactNode } from "react";

export function UkpShell({ children }: { children: ReactNode }) {
  return (
    <div className="ukp-shell flex min-h-svh flex-col bg-background text-foreground">
      <a
        href="#ukp-content"
        className="sr-only focus:not-sr-only focus:absolute focus:bg-card focus:p-2"
      >
        Lewati ke materi
      </a>
      <header className="border-b bg-card">
        <div className="mx-auto flex min-h-16 max-w-5xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:px-8">
          <Link to="/ukp" className="inline-flex items-center gap-2 font-semibold">
            <BookOpen className="size-5 text-primary" aria-hidden="true" />
            Belajar UKP
          </Link>
          <nav aria-label="Tingkat UKP" className="flex gap-1 text-sm">
            {(["a", "b"] as const).map((level) => (
              <Link
                key={level}
                to="/ukp/$level"
                params={{ level }}
                activeOptions={{ exact: false }}
                className="rounded-md px-2.5 py-2 text-muted-foreground hover:bg-muted"
                activeProps={{ className: "bg-muted font-semibold text-foreground" }}
              >
                Tingkat {level.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main
        id="ukp-content"
        tabIndex={-1}
        className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-8 sm:py-12"
      >
        {children}
      </main>
      <footer className="border-t">
        <p className="mx-auto max-w-5xl px-4 py-5 text-sm text-muted-foreground sm:px-8">
          Rujukan materi · Booklet UKP Tingkat A dan B, Oktober 2026
        </p>
      </footer>
    </div>
  );
}
