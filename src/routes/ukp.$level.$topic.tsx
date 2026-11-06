import { createFileRoute, notFound } from "@tanstack/react-router";
import { UkpQuiz } from "@/components/ukp-quiz";
import { getUkpTopic, isUkpLevel, ukpHead } from "@/lib/ukp";

export const Route = createFileRoute("/ukp/$level/$topic")({
  loader: ({ params }) => {
    if (!isUkpLevel(params.level)) throw notFound();
    const topic = getUkpTopic(params.level, params.topic);
    if (!topic) throw notFound();
    return { level: params.level, topic };
  },
  head: ({ loaderData }) =>
    loaderData
      ? ukpHead(
          `Latihan ${loaderData.topic.title} · UKP Tingkat ${loaderData.level.toUpperCase()}`,
          "Latihan pilihan ganda dengan pembahasan.",
        )
      : {},
  component: UkpPractice,
});

function UkpPractice() {
  const data = Route.useLoaderData();
  const { topic: slug } = Route.useParams();
  return (
    <UkpQuiz
      key={`${data.level}/${slug}`}
      slug={slug}
      level={data.level}
      title={data.topic.title}
      questions={data.topic.questions.map((question) => ({
        ...question,
        topic: data.topic.title,
        pages: data.topic.pages,
      }))}
    />
  );
}
