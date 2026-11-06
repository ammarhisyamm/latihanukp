import { createFileRoute, notFound } from "@tanstack/react-router";
import { UkpQuiz } from "@/components/ukp-quiz";
import { getUkpTopic, isUkpLevel, ukpHead, ukpLevels } from "@/lib/ukp";

export const Route = createFileRoute("/ukp/$level/campuran")({
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    return { level: params.level };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(
          `Latihan Campuran UKP Tingkat ${loaderData.level.toUpperCase()}`,
          "Latihan acak lintas topik UKP.",
        )
      : {},
  component: MixedPractice,
});

function MixedPractice() {
  const { level } = Route.useLoaderData();
  const questions = ukpLevels[level].flatMap((slug) => {
    const topic = getUkpTopic(level, slug)!;
    return topic.questions.map((item) => ({ ...item, topic: topic.title, pages: topic.pages }));
  });
  return <UkpQuiz key={level} level={level} title="Latihan campuran" questions={questions} />;
}
