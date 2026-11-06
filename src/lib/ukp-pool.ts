import { getUkpTopic, ukpLevels, type Question, type UkpLevel, type UkpTopicData } from "./ukp";
import { drawCalculationQuestions } from "./ukp-calculations";
import type { PracticeItem } from "./ukp-practice";

function toItem(topic: UkpTopicData, question: Question): PracticeItem {
  return {
    ...question,
    topic: topic.title,
    topicSlug: topic.slug,
    pages: topic.pages,
    sectionTitle: topic.summary.find((section) => section.id === question.section)?.title,
  };
}

export function topicPool(topic: UkpTopicData): PracticeItem[] {
  return topic.questions.map((question) => toItem(topic, question));
}

export function levelTopics(level: UkpLevel): UkpTopicData[] {
  return ukpLevels[level].map((slug) => getUkpTopic(level, slug)!);
}

export function levelPool(level: UkpLevel): PracticeItem[] {
  return levelTopics(level).flatMap(topicPool);
}

export function topicDrill(level: UkpLevel, topic: UkpTopicData): PracticeItem[] {
  return drawCalculationQuestions(level, topic.slug).map((question) => toItem(topic, question));
}

export function levelDrill(level: UkpLevel): PracticeItem[] {
  return levelTopics(level).flatMap((topic) => topicDrill(level, topic));
}
