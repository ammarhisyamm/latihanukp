import type { Question } from "./ukp";

export type PracticeItem = Question & { topic: string; pages: string };
const storageKey = "ukp:recent-questions:v1";

export function shuffled<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

function loadHistory(): string[] {
  try {
    const history: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(history)
      ? history.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function rememberQuestion(prompt: string) {
  try {
    const history = loadHistory().filter((item) => item !== prompt);
    localStorage.setItem(storageKey, JSON.stringify([...history, prompt].slice(-3000)));
  } catch {
    // Practice remains available when storage is disabled.
  }
}

function spread(items: PracticeItem[], key: (item: PracticeItem) => string): PracticeItem[] {
  const groups = new Map<string, PracticeItem[]>();
  for (const item of items) {
    const group = groups.get(key(item)) ?? [];
    group.push(item);
    groups.set(key(item), group);
  }
  const rounds = Math.max(0, ...Array.from(groups.values(), (group) => group.length));
  const result: PracticeItem[] = [];
  for (let i = 0; i < rounds; i++) {
    for (const group of groups.values()) {
      const item = group[i];
      if (item) result.push(item);
    }
  }
  return result;
}

export function pickQuestions(pool: PracticeItem[], size: number, balanceTopics: boolean) {
  const recency = new Map(loadHistory().map((prompt, index) => [prompt, index]));
  const unseen: PracticeItem[] = [];
  const seen: PracticeItem[] = [];
  for (const item of new Map(pool.map((question) => [question.prompt, question])).values()) {
    (recency.has(questionKey(item)) ? seen : unseen).push(item);
  }
  const fresh = shuffled(unseen);
  seen.sort((a, b) => recency.get(questionKey(a))! - recency.get(questionKey(b))!);
  const diversify = (items: PracticeItem[]) => {
    const families = spread(items, (item) => item.family ?? item.topic);
    return balanceTopics ? spread(families, (item) => item.topic) : families;
  };
  const ordered = [...diversify(fresh), ...diversify(seen)];
  return ordered.slice(0, size);
}

type Review = { streak: number; due: number };
type ReviewHistory = Record<string, Review>;

type QuestionIdentity = Pick<Question, "id" | "prompt">;

export function questionKey(item: QuestionIdentity) {
  return item.id ?? item.prompt;
}

export function loadReview(level: "a" | "b"): ReviewHistory {
  try {
    const entries: unknown = JSON.parse(localStorage.getItem(`ukp:review:v1:${level}`) ?? "{}");
    if (!entries || typeof entries !== "object" || Array.isArray(entries)) return {};
    return Object.fromEntries(
      Object.entries(entries).filter(
        ([, value]) =>
          value &&
          Number.isInteger(value.streak) &&
          value.streak >= 0 &&
          value.streak <= 3 &&
          Number.isFinite(value.due),
      ),
    );
  } catch {
    return {};
  }
}

export function recordAnswer(level: "a" | "b", question: QuestionIdentity, correct: boolean) {
  const history = loadReview(level);
  const key = questionKey(question);
  const previous = history[key];
  const now = Date.now();
  if (!correct || !previous || previous.due <= now) {
    const streak = correct ? Math.min((previous?.streak ?? 0) + 1, 3) : 0;
    const days = [0, 1, 3, 7][streak]!;
    history[key] = { streak, due: now + days * 86_400_000 };
    try {
      localStorage.setItem(`ukp:review:v1:${level}`, JSON.stringify(history));
    } catch {
      // Practice still works without persistent storage.
    }
  }
  return history;
}

export function dueQuestions(pool: PracticeItem[], history: ReviewHistory, size: number) {
  const now = Date.now();
  return pool
    .filter((question) => {
      const review = history[questionKey(question)];
      return review && review.due <= now;
    })
    .sort((a, b) => {
      const first = history[questionKey(a)]!;
      const second = history[questionKey(b)]!;
      return first.streak - second.streak || first.due - second.due;
    })
    .slice(0, size);
}
