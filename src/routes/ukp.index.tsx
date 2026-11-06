import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ukpHead, ukpLevels } from "@/lib/ukp";

export const Route = createFileRoute("/ukp/")({
  head: () =>
    ukpHead("Belajar UKP", "Rangkuman dan latihan pajak per topik untuk Tingkat A dan B."),
  component: UkpHome,
});

function UkpHome() {
  return (
    <div className="flex flex-col gap-8">
      <header className="rounded-xl border bg-card p-6 sm:p-10">
        <BookOpen className="mb-5 size-8 text-primary" aria-hidden="true" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Belajar UKP</h1>
        <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-muted-foreground">
          Rangkuman per butir booklet, kartu hafalan angka penting, latihan soal dengan
          pembahasan, dan simulasi ujian berwaktu untuk Tingkat A dan B.
        </p>
      </header>
      <section aria-labelledby="ukp-levels">
        <h2 id="ukp-levels" className="mb-3 text-xl font-semibold">
          Pilih tingkat
        </h2>
        <div className="divide-y rounded-xl border bg-card px-4 sm:px-6">
          {(["a", "b"] as const).map((level) => (
            <div key={level} className="flex flex-wrap items-center justify-between gap-4 py-5">
              <div className="min-w-0 flex-1 basis-56">
                <h3 className="text-lg font-semibold">Tingkat {level.toUpperCase()}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {ukpLevels[level].length} topik ·{" "}
                  {level === "a"
                    ? "Administrasi pajak, PPh orang pribadi, dan PPN dasar"
                    : "Termasuk PBB-P5L, akuntansi perpajakan, dan PPh badan"}
                </p>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ukp/$level" params={{ level }}>
                  Buka Tingkat {level.toUpperCase()} <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      <p className="text-sm text-muted-foreground">
        Materi mengacu pada booklet UKP Tingkat A dan B karya Daniel William Legawa, edisi Oktober
        2026. Soal disusun untuk latihan mandiri.{" "}
        <Link to="/ukp/rujukan" className="text-primary underline underline-offset-4">
          Lihat rujukan dan pola soal
        </Link>
        .
      </p>
    </div>
  );
}
