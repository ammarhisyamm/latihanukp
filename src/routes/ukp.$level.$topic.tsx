import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UkpQuiz, type QuizMode } from "@/components/ukp-quiz";
import { findUkpTopic, getUkpTopic, isUkpLevel, ukpHead, ukpTopics } from "@/lib/ukp";
import { countCalculationPatterns } from "@/lib/ukp-calculations";
import { topicDrill, topicPool } from "@/lib/ukp-pool";

const modes = ["latihan", "simulasi", "ulang", "hitung"] as const;

export const Route = createFileRoute("/ukp/$level/$topic")({
  validateSearch: (search: Record<string, unknown>): { bagian?: string | undefined; mode?: QuizMode | undefined } => ({
    bagian: typeof search["bagian"] === "string" ? search["bagian"] : undefined,
    mode: modes.find((mode) => mode === search["mode"]),
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
          `Latihan ${loaderData.title} · UKP Tingkat ${loaderData.level.toUpperCase()}`,
          "Latihan soal pilihan ganda dan simulasi ujian dengan pembahasan.",
        )
      : {},
  component: UkpPractice,
});

function UkpPractice() {
  const { level, slug } = Route.useLoaderData();
  const { bagian, mode } = Route.useSearch();
  const topic = getUkpTopic(level, slug)!;
  return (
    <UkpQuiz
      key={`${level}/${slug}/${bagian ?? ""}/${mode ?? ""}`}
      level={level}
      slug={slug}
      title={topic.title}
      questions={topicPool(topic)}
      sections={topic.summary.map(({ id, title }) => ({ id, title }))}
      drill={countCalculationPatterns(level, slug) ? () => topicDrill(level, topic) : undefined}
      initialSection={bagian}
      initialMode={mode}
      back={
        <Button variant="ghost" asChild>
          <Link to="/ukp/$level" params={{ level }}>
            <ArrowLeft aria-hidden="true" /> Daftar topik
          </Link>
        </Button>
      }
    />
  );
}
