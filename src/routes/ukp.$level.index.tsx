import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  GraduationCap,
  Layers,
  RotateCcw,
  Search,
  Shuffle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isUkpLevel, ukpHead, type UkpLevel } from "@/lib/ukp";
import { levelPool, levelTopics } from "@/lib/ukp-pool";
import {
  dueQuestions,
  loadResults,
  loadReview,
  loadUnderstood,
  type ReviewHistory,
  type SessionResult,
} from "@/lib/ukp-practice";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ukp/$level/")({
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    return { level: params.level };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(
          `UKP Tingkat ${loaderData.level.toUpperCase()}`,
          "Rangkuman, kartu hafalan, latihan soal, dan simulasi ujian per topik.",
        )
      : {},
  component: UkpLevelPage,
});

function UkpLevelPage() {
  const { level } = Route.useLoaderData();
  return <LevelDashboard key={level} level={level} />;
}

const modeName: Record<string, string> = {
  latihan: "Latihan",
  simulasi: "Simulasi",
  ulang: "Ulang",
  hitung: "Drill hitung",
};

function LevelDashboard({ level }: { level: UkpLevel }) {
  const [query, setQuery] = useState("");
  const [review, setReview] = useState<ReviewHistory>({});
  const [understood, setUnderstood] = useState<string[]>([]);
  const [results, setResults] = useState<SessionResult[]>([]);
  useEffect(() => {
    setReview(loadReview(level));
    setUnderstood(loadUnderstood(level));
    setResults(loadResults(level));
  }, [level]);

  const topics = levelTopics(level);
  const pool = levelPool(level);
  const due = dueQuestions(pool, review, pool.length).length;
  const totalQuestions = pool.length;
  const totalCards = topics.reduce((sum, topic) => sum + topic.flashcards.length, 0);
  const search = query.trim().toLocaleLowerCase("id");

  const rows = topics
    .map((topic) => {
      const matches = search
        ? topic.summary.filter((section) =>
            [section.title, ...section.points, ...(section.traps ?? [])]
              .join(" ")
              .toLocaleLowerCase("id")
              .includes(search),
          )
        : [];
      return {
        topic,
        matches,
        visible:
          !search ||
          matches.length > 0 ||
          `${topic.title} ${topic.description}`.toLocaleLowerCase("id").includes(search),
        mastered: topic.questions.filter((q) => review[q.id]?.streak === 3).length,
        attempted: topic.questions.filter((q) => review[q.id]).length,
        read: topic.summary.filter((s) => understood.includes(s.id)).length,
      };
    })
    .filter((row) => row.visible);

  return (
    <div className="flex flex-col gap-7">
      <header>
        <p className="mb-1 text-sm font-medium text-primary">Ujian Kompetensi Perpajakan</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tingkat {level.toUpperCase()}
        </h1>
        <p className="mt-2 max-w-[65ch] leading-relaxed text-muted-foreground tabular-nums">
          {topics.length} topik · {totalQuestions} soal kurasi · {totalCards} kartu hafalan. Baca
          rangkuman, hafalkan angka penting, lalu uji diri dengan latihan atau simulasi.
        </p>
      </header>

      <section aria-label="Mulai latihan" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Action
          to="simulasi"
          level={level}
          icon={<GraduationCap />}
          title="Simulasi ujian"
          text="Semua topik, berwaktu, pembahasan di akhir."
          primary
        />
        <Action
          to="latihan"
          level={level}
          icon={<Shuffle />}
          title="Latihan campuran"
          text="Acak lintas topik dengan pembahasan langsung."
        />
        <Action
          to="ulang"
          level={level}
          icon={<RotateCcw />}
          title="Ulang soal salah"
          text={due ? `${due} soal jatuh tempo hari ini.` : "Belum ada soal yang jatuh tempo."}
          disabled={!due}
        />
        <Action
          to="hitung"
          level={level}
          icon={<Calculator />}
          title="Drill hitung"
          text="Pola hitungan dengan angka acak tiap sesi."
        />
      </section>

      <section aria-labelledby="ukp-topic-list" className="overflow-hidden rounded-xl border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4 sm:p-5">
          <h2 id="ukp-topic-list" className="text-lg font-semibold">
            Topik
          </h2>
          <div className="relative w-full sm:max-w-xs">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Cari topik atau istilah di rangkuman"
              placeholder="Cari istilah, mis. SKPKBT"
              className="h-10 pl-9"
            />
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          {rows.length} topik ditemukan
        </p>
        {rows.length ? (
          <ul className="divide-y">
            {rows.map(({ topic, matches, mastered, attempted, read }) => (
              <li key={topic.slug} className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div className="min-w-0">
                  <h3 className="font-semibold">{topic.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                  <div className="mt-3 grid max-w-lg grid-cols-2 gap-3 text-xs text-muted-foreground tabular-nums">
                    <Meter label="Rangkuman dipahami" value={read} total={topic.summary.length} />
                    <Meter
                      label={`Soal dikuasai · ${attempted} dijawab`}
                      value={mastered}
                      total={topic.questions.length}
                    />
                  </div>
                  {matches.length > 0 && (
                    <p className="mt-3 text-sm leading-relaxed">
                      Ditemukan di:{" "}
                      {matches.map((section, i) => (
                        <span key={section.id}>
                          {i > 0 && ", "}
                          <Link
                            to="/ukp/$level/$topic/materi"
                            params={{ level, topic: topic.slug }}
                            hash={`bagian-${section.id}`}
                            className="text-primary underline underline-offset-4"
                          >
                            {section.title}
                          </Link>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      to="/ukp/$level/$topic/materi"
                      params={{ level, topic: topic.slug }}
                      aria-label={`Rangkuman ${topic.title}`}
                    >
                      <BookOpen aria-hidden="true" /> Rangkuman
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      to="/ukp/$level/$topic/materi"
                      params={{ level, topic: topic.slug }}
                      search={{ tab: "hafalan" }}
                      aria-label={`Kartu hafalan ${topic.title}`}
                    >
                      <Layers aria-hidden="true" /> Hafalan
                    </Link>
                  </Button>
                  <Button size="lg" asChild>
                    <Link
                      to="/ukp/$level/$topic"
                      params={{ level, topic: topic.slug }}
                      aria-label={`Latihan ${topic.title}`}
                    >
                      Latihan · {topic.questions.length} <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-6">
            <p className="font-semibold">Tidak ada topik yang cocok</p>
            <p className="mt-1 text-sm text-muted-foreground">Coba istilah lain atau hapus pencarian.</p>
            <Button variant="outline" className="mt-3" onClick={() => setQuery("")}>
              Hapus pencarian
            </Button>
          </div>
        )}
      </section>

      {results.length > 0 && (
        <section aria-labelledby="ukp-history" className="rounded-xl border bg-card p-4 sm:p-5">
          <h2 id="ukp-history" className="mb-3 text-lg font-semibold">
            Riwayat latihan terakhir
          </h2>
          <ul className="divide-y text-sm">
            {results.slice(0, 8).map((result) => {
              const score = Math.round((result.correct / result.total) * 100);
              return (
                <li key={result.at} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
                  <span className="min-w-0">
                    <span className="font-medium">{modeName[result.mode] ?? result.mode}</span>
                    <span className="text-muted-foreground"> · {result.scope}</span>
                  </span>
                  <span className="flex items-center gap-3 text-muted-foreground tabular-nums">
                    {new Date(result.at).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-xs font-semibold",
                        score >= 60
                          ? "bg-[var(--soft-green)] text-[var(--green-ink)]"
                          : "bg-[var(--error-soft)] text-destructive",
                      )}
                    >
                      {result.correct}/{result.total} · {score}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

function Meter({ label, value, total }: { label: string; value: number; total: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between gap-2">
        <span>{label}</span>
        <span>
          {value}/{total}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-primary" style={{ width: `${(value / Math.max(1, total)) * 100}%` }} />
      </div>
    </div>
  );
}

function Action({
  to,
  level,
  icon,
  title,
  text,
  primary,
  disabled,
}: {
  to: "simulasi" | "latihan" | "ulang" | "hitung";
  level: UkpLevel;
  icon: ReactNode;
  title: string;
  text: string;
  primary?: boolean;
  disabled?: boolean;
}) {
  const body = (
    <>
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-lg [&_svg]:size-5",
          primary ? "bg-white/15" : "bg-primary/10 text-primary",
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="font-semibold">{title}</span>
      <span className={cn("text-sm leading-relaxed", primary ? "text-white/85" : "text-muted-foreground")}>
        {text}
      </span>
    </>
  );
  const className = cn(
    "flex flex-col gap-2 rounded-xl border p-4 transition-colors",
    primary ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90" : "bg-card hover:border-primary/40",
    disabled && "pointer-events-none opacity-60",
  );
  if (disabled) return <div className={className} aria-disabled="true">{body}</div>;
  return (
    <Link to="/ukp/$level/campuran" params={{ level }} search={{ mode: to }} className={className}>
      {body}
    </Link>
  );
}
