import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isUkpLevel, ukpHead, ukpLevels, ukpTopics, type UkpLevel } from "@/lib/ukp";
import { ukpNotes } from "@/lib/ukp-notes";
import { getUkpStudy } from "@/lib/ukp-study";

export const Route = createFileRoute("/ukp/$level/$topic_/materi")({
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    const level = params.level;
    const slug = ukpLevels[level].find((key) => key === params.topic);
    if (!slug) throw notFound();
    const topic = ukpTopics[slug];
    return {
      level,
      title: topic.title,
      description: topic.description,
      pages: (topic.pages as Partial<Record<UkpLevel, string>>)[level],
      notes: ukpNotes[level][slug] ?? [],
      guides: getUkpStudy(level, slug),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(
          `Materi ${loaderData.title} · Tingkat ${loaderData.level.toUpperCase()}`,
          loaderData.description,
        )
      : {},
  component: UkpMaterial,
});

function UkpMaterial() {
  const { level, title, pages, notes, guides } = Route.useLoaderData();
  const params = Route.useParams();

  return (
    <div className="flex flex-col gap-7">
      <Button variant="ghost" asChild className="self-start">
        <Link to="/ukp/$level" params={{ level }}>
          <ArrowLeft aria-hidden="true" /> Daftar topik Tingkat {level.toUpperCase()}
        </Link>
      </Button>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Materi belajar · Booklet Tingkat {level.toUpperCase()}, hlm. {pages}
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/ukp/$level/$topic" params={params}>
            Mulai latihan <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </header>
      <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_15rem]">
        <nav
          aria-label="Daftar isi materi"
          className="rounded-xl border bg-card p-4 md:sticky md:top-5 md:col-start-2 md:row-start-1 md:max-h-[calc(100svh-3rem)] md:overflow-y-auto"
        >
          <h2 className="mb-2 font-semibold">Di halaman ini</h2>
          <ul className="mb-3 space-y-1 border-b pb-3">
            {guides.map((guide, i) => (
              <li key={guide.title}>
                <a
                  href={`#contoh-${i + 1}`}
                  className="block rounded px-2 py-1 text-sm hover:bg-muted"
                >
                  {guide.title}
                </a>
              </li>
            ))}
          </ul>
          <details>
            <summary className="cursor-pointer text-sm font-semibold">
              Ringkasan per bahasan
            </summary>
            <ul className="mt-2 space-y-1">
              {notes.map(([title], i) => (
                <li key={title}>
                  <a
                    href={`#bahasan-${i + 1}`}
                    className="block rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </nav>
        <div className="min-w-0 space-y-6 md:col-start-1 md:row-start-1">
          <section
            aria-labelledby="ukp-formulas"
            className="divide-y rounded-xl border bg-card px-4 sm:px-6"
          >
            <header className="py-5">
              <h2 id="ukp-formulas" className="text-xl font-semibold">
                Rumus, alur, dan contoh
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Baca asumsi setiap kasus sebelum memakai rumus. Untuk soal pajak, cek dulu jenis
                transaksi, dasar pengenaan, dan periode yang ditanyakan.
              </p>
            </header>
            {guides.map((guide, i) => (
              <section
                key={guide.title}
                id={`contoh-${i + 1}`}
                className="scroll-mt-5 space-y-4 py-6"
              >
                <h3 className="text-lg font-semibold">{guide.title}</h3>
                <p className="max-w-[68ch] leading-relaxed text-muted-foreground">
                  {guide.concept}
                </p>
                {guide.formula && (
                  <div className="rounded-lg bg-muted px-4 py-3">
                    <h4 className="mb-2 text-sm font-semibold">Rumus atau urutan</h4>
                    <ul className="space-y-2 text-sm leading-relaxed tabular-nums">
                      {guide.formula.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">Contoh soal</h4>
                  <p className="mt-1 max-w-[68ch] leading-relaxed">{guide.scenario}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Langkah penyelesaian</h4>
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
                    {guide.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-lg border px-4 py-3">
                  <h4 className="text-sm font-semibold">Jebakan soal</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{guide.trap}</p>
                </div>
                {guide.source && (
                  <a
                    href={guide.source[1]}
                    className="inline-block text-sm text-primary underline underline-offset-4"
                  >
                    {guide.source[0]}
                  </a>
                )}
              </section>
            ))}
          </section>
          <article
            aria-labelledby="ukp-summary"
            className="divide-y rounded-xl border bg-card px-4 sm:px-6"
          >
            <h2 id="ukp-summary" className="py-5 text-xl font-semibold">
              Ringkasan per bahasan
            </h2>
            {notes.map(([title, summary], i) => (
              <section key={title} id={`bahasan-${i + 1}`} className="scroll-mt-5 py-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 max-w-[68ch] leading-relaxed text-muted-foreground">{summary}</p>
              </section>
            ))}
          </article>
          <Button asChild size="lg">
            <Link to="/ukp/$level/$topic" params={params}>
              Latihan topik ini <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
