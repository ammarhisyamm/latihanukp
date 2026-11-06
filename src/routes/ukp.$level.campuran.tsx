import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UkpQuiz, type QuizMode } from "@/components/ukp-quiz";
import { isUkpLevel, ukpHead } from "@/lib/ukp";
import { levelDrill, levelPool } from "@/lib/ukp-pool";

const modes = ["latihan", "simulasi", "ulang", "hitung"] as const;

export const Route = createFileRoute("/ukp/$level/campuran")({
  validateSearch: (search: Record<string, unknown>): { mode?: QuizMode | undefined } => ({
    mode: modes.find((mode) => mode === search["mode"]),
  }),
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    return { level: params.level };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(
          `Latihan Campuran & Simulasi UKP Tingkat ${loaderData.level.toUpperCase()}`,
          "Latihan acak lintas topik dan simulasi ujian berwaktu.",
        )
      : {},
  component: MixedPractice,
});

function MixedPractice() {
  const { level } = Route.useLoaderData();
  const { mode } = Route.useSearch();
  return (
    <UkpQuiz
      key={`${level}/${mode ?? ""}`}
      level={level}
      title={`Campuran semua topik Tingkat ${level.toUpperCase()}`}
      questions={levelPool(level)}
      drill={() => levelDrill(level)}
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
