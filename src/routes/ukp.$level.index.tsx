import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Search, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUkpTopic, isUkpLevel, ukpHead, ukpLevels, type UkpLevel } from "@/lib/ukp";
import { ukpNotes } from "@/lib/ukp-notes";

export const Route = createFileRoute("/ukp/$level/")({
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    return { level: params.level };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(`UKP Tingkat ${loaderData.level.toUpperCase()}`, "Rangkuman dan latihan per topik.")
      : {},
  component: UkpLevelPage,
});

function UkpLevelPage() {
  const { level } = Route.useLoaderData();
  return <TopicList key={level} level={level} />;
}

function TopicList({ level }: { level: UkpLevel }) {
  const [query, setQuery] = useState("");
  const search = query.trim().toLocaleLowerCase("id");
  const topics = ukpLevels[level].map((slug) => {
    const topic = getUkpTopic(level, slug)!;
    const notes = ukpNotes[level][slug] ?? [];
    const matches = search
      ? notes.filter((note) => note.join(" ").toLocaleLowerCase("id").includes(search))
      : [];
    return { slug, topic, notes, matches };
  });
  const visible = topics.filter(
    ({ topic, matches }) =>
      matches.length ||
      `${topic.title} ${topic.description}`.toLocaleLowerCase("id").includes(search),
  );

  return (
    <div className="flex flex-col gap-7">
      <header>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          UKP Tingkat {level.toUpperCase()}
        </h1>
        <p className="mt-2 max-w-[65ch] leading-relaxed text-muted-foreground">
          Pilih topik atau mulai latihan campuran dari{" "}
          {topics
            .reduce((sum, { topic }) => sum + topic.questions.length, 0)
            .toLocaleString("id-ID")}{" "}
          soal tingkat ini.
        </p>
        <Button asChild className="mt-4" size="lg">
          <Link to="/ukp/$level/campuran" params={{ level }}>
            <Shuffle aria-hidden="true" /> Latihan campuran
          </Link>
        </Button>
      </header>
      <section
        aria-labelledby="ukp-topic-list"
        className="overflow-hidden rounded-xl border bg-card"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4 sm:p-5">
          <h2 id="ukp-topic-list" className="text-lg font-semibold">
            Daftar topik
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
              aria-label="Cari topik atau istilah"
              placeholder="Cari topik atau istilah"
              className="h-10 pl-9"
            />
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          {visible.length} topik ditemukan
        </p>
        {visible.length ? (
          <ul className="divide-y">
            {visible.map(({ slug, topic, notes, matches }) => (
              <li
                key={slug}
                className="flex flex-col justify-between gap-4 p-4 sm:p-5 md:flex-row md:items-center"
              >
                <div className="min-w-0">
                  <h3 className="font-semibold">{topic.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {notes.length} bahasan · {topic.questions.length} soal ·{" "}
                    {topic.questions.filter((item) => item.family).length} variasi hitungan · hlm.{" "}
                    {topic.pages}
                  </p>
                  {matches.length > 0 && (
                    <p className="mt-2 text-sm leading-relaxed">
                      Bahasan terkait: {matches.map(([title]) => title).join(", ")}
                    </p>
                  )}
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <Button size="lg" variant="outline" asChild>
                    <Link
                      to="/ukp/$level/$topic/materi"
                      params={{ level, topic: slug }}
                      aria-label={`Rangkuman ${topic.title}`}
                    >
                      <BookOpen aria-hidden="true" /> Rangkuman
                    </Link>
                  </Button>
                  <Button size="lg" asChild>
                    <Link
                      to="/ukp/$level/$topic"
                      params={{ level, topic: slug }}
                      aria-label={`Latihan ${topic.title}`}
                    >
                      Latihan <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-6">
            <p className="font-semibold">Tidak ada topik yang cocok</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Coba istilah lain atau hapus pencarian.
            </p>
            <Button variant="outline" className="mt-3" onClick={() => setQuery("")}>
              Hapus pencarian
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
