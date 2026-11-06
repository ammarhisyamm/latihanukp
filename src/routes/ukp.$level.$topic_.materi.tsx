import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, ArrowRight, Check, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UkpFlashcards } from "@/components/ukp-flashcards";
import { findUkpTopic, getUkpTopic, isUkpLevel, ukpHead, ukpTopics, type UkpTopicData } from "@/lib/ukp";
import { loadUnderstood, setUnderstood } from "@/lib/ukp-practice";
import { cn } from "@/lib/utils";

const tabs = [
  ["rangkuman", "Rangkuman"],
  ["contoh", "Contoh bertahap"],
  ["hafalan", "Kartu hafalan"],
] as const;
type Tab = (typeof tabs)[number][0];

export const Route = createFileRoute("/ukp/$level/$topic_/materi")({
  validateSearch: (search: Record<string, unknown>): { tab?: Tab | undefined } => ({
    tab: tabs.find(([id]) => id === search["tab"])?.[0],
  }),
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    const slug = findUkpTopic(params.level, params.topic);
    if (!slug) throw notFound();
    return { level: params.level, slug, title: ukpTopics[slug].title };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(
          `Rangkuman ${loaderData.title} · Tingkat ${loaderData.level.toUpperCase()}`,
          ukpTopics[loaderData.slug].description,
        )
      : {},
  component: UkpMaterial,
});

function UkpMaterial() {
  const { level, slug } = Route.useLoaderData();
  const { tab = "rangkuman" } = Route.useSearch();
  const topic = getUkpTopic(level, slug)!;
  const [understood, setIds] = useState<string[]>([]);
  useEffect(() => setIds(loadUnderstood(level)), [level]);
  const done = topic.summary.filter((section) => understood.includes(section.id)).length;
  const counts = new Map<string, number>();
  for (const q of topic.questions) counts.set(q.section!, (counts.get(q.section!) ?? 0) + 1);

  return (
    <div className="flex flex-col gap-6">
      <Button variant="ghost" asChild className="self-start">
        <Link to="/ukp/$level" params={{ level }}>
          <ArrowLeft aria-hidden="true" /> Daftar topik Tingkat {level.toUpperCase()}
        </Link>
      </Button>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-1 text-sm font-medium text-primary">
            Materi Tingkat {level.toUpperCase()} · booklet hlm. {topic.pages}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {topic.title}
          </h1>
          <p className="mt-2 max-w-[60ch] text-muted-foreground">{topic.description}</p>
        </div>
        <Button asChild size="lg">
          <Link to="/ukp/$level/$topic" params={{ level, topic: slug }}>
            Latihan soal · {topic.questions.length} <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </header>

      <nav aria-label="Jenis materi" className="flex gap-1 overflow-x-auto rounded-xl border bg-card p-1">
        {tabs.map(([id, label]) => (
          <Link
            key={id}
            to="/ukp/$level/$topic/materi"
            params={{ level, topic: slug }}
            search={{ tab: id === "rangkuman" ? undefined : id }}
            aria-current={tab === id ? "page" : undefined}
            className={cn(
              "flex-1 rounded-lg px-4 py-2 text-center text-sm font-medium whitespace-nowrap",
              tab === id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            )}
          >
            {label}
            <span className="ml-1.5 opacity-75 tabular-nums">
              {id === "rangkuman"
                ? topic.summary.length
                : id === "contoh"
                  ? topic.guides.length
                  : topic.flashcards.length}
            </span>
          </Link>
        ))}
      </nav>

      {tab === "rangkuman" && (
        <Summary
          topic={topic}
          level={level}
          understood={understood}
          done={done}
          counts={counts}
          onToggle={(id, value) => setIds(setUnderstood(level, id, value))}
        />
      )}
      {tab === "contoh" && <Guides topic={topic} />}
      {tab === "hafalan" && (
        <UkpFlashcards
          cards={topic.flashcards}
          sections={topic.summary.map(({ id, title }) => ({ id, title }))}
        />
      )}
    </div>
  );
}

function Summary({
  topic,
  level,
  understood,
  done,
  counts,
  onToggle,
}: {
  topic: UkpTopicData;
  level: "a" | "b";
  understood: string[];
  done: number;
  counts: Map<string, number>;
  onToggle: (id: string, value: boolean) => void;
}) {
  return (
    <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_16rem]">
      <aside className="rounded-xl border bg-card p-4 md:sticky md:top-5 md:col-start-2 md:row-start-1 md:max-h-[calc(100svh-2.5rem)] md:overflow-y-auto">
        <p className="text-sm font-semibold tabular-nums">
          {done} dari {topic.summary.length} bagian dipahami
        </p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-[var(--green-ink)]"
            style={{ width: `${(done / Math.max(1, topic.summary.length)) * 100}%` }}
          />
        </div>
        <ol className="mt-3 space-y-0.5">
          {topic.summary.map((section) => (
            <li key={section.id}>
              <a
                href={`#bagian-${section.id}`}
                className="flex items-start gap-2 rounded px-2 py-1.5 text-sm hover:bg-muted"
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border",
                    understood.includes(section.id) &&
                      "border-[var(--green-ink)] bg-[var(--green-ink)] text-white",
                  )}
                  aria-hidden="true"
                >
                  {understood.includes(section.id) && <Check className="size-3" />}
                </span>
                <span className="leading-snug">{section.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </aside>

      <div className="min-w-0 space-y-4 md:col-start-1 md:row-start-1">
        {topic.summary.map((section) => {
          const ok = understood.includes(section.id);
          const n = counts.get(section.id) ?? 0;
          return (
            <section
              key={section.id}
              id={`bagian-${section.id}`}
              aria-labelledby={`judul-${section.id}`}
              className="scroll-mt-5 rounded-xl border bg-card p-4 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 id={`judul-${section.id}`} className="text-lg font-semibold text-balance">
                  {section.title}
                </h2>
                {section.bookletItem?.[level] && (
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs whitespace-nowrap text-muted-foreground">
                    Butir {section.bookletItem[level]}
                    {section.bookletPage && ` · hlm. ${section.bookletPage}`}
                  </span>
                )}
              </div>
              <ul className="mt-3 space-y-2">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-2.5 leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {section.table && (
                <div className="mt-4 overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted text-left">
                      <tr>
                        {section.table.head.map((cell) => (
                          <th key={cell} scope="col" className="px-3 py-2 font-semibold">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y tabular-nums">
                      {section.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-3 py-2 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.traps && section.traps.length > 0 && (
                <div className="mt-4 rounded-lg border border-[var(--orange-ink)]/40 bg-[var(--brand-orange-soft)] p-3 text-sm">
                  <p className="flex items-center gap-1.5 font-semibold text-[var(--orange-ink)]">
                    <AlertTriangle className="size-4" aria-hidden="true" /> Jebakan soal
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                    {section.traps.map((trap) => (
                      <li key={trap}>{trap}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3">
                <p className="text-xs text-muted-foreground">{section.legal}</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    aria-pressed={ok}
                    onClick={() => onToggle(section.id, !ok)}
                    className={cn(ok && "border-[var(--green-ink)] text-[var(--green-ink)]")}
                  >
                    <Check aria-hidden="true" /> {ok ? "Sudah paham" : "Tandai paham"}
                  </Button>
                  {n > 0 && (
                    <Button size="sm" asChild>
                      <Link
                        to="/ukp/$level/$topic"
                        params={{ level, topic: topic.slug }}
                        search={{ bagian: section.id }}
                      >
                        <ListChecks aria-hidden="true" /> Latihan bagian ini · {n}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function Guides({ topic }: { topic: UkpTopicData }) {
  return (
    <div className="space-y-4">
      {topic.guides.map((guide, i) => (
        <details
          key={guide.title}
          className="group rounded-xl border bg-card p-4 sm:p-6"
          open={i === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-lg font-semibold">
            {guide.title}
            <ArrowRight className="size-4 shrink-0 transition-transform group-open:rotate-90" aria-hidden="true" />
          </summary>
          <div className="mt-4 space-y-4">
            <p className="max-w-[68ch] leading-relaxed text-muted-foreground">{guide.concept}</p>
            {guide.formula && (
              <div className="rounded-lg bg-muted px-4 py-3">
                <h3 className="mb-2 text-sm font-semibold">Rumus atau urutan</h3>
                <ul className="space-y-2 text-sm leading-relaxed tabular-nums">
                  {guide.formula.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="font-semibold">Contoh soal</h3>
              <p className="mt-1 max-w-[68ch] leading-relaxed">{guide.scenario}</p>
            </div>
            <div>
              <h3 className="font-semibold">Langkah penyelesaian</h3>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg border px-4 py-3">
              <h3 className="text-sm font-semibold">Jebakan soal</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{guide.trap}</p>
            </div>
            {guide.source && (
              <a
                href={guide.source[1]}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm text-primary underline underline-offset-4"
              >
                {guide.source[0]}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
