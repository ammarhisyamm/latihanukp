import type { Question, UkpLevel } from "./ukp";

export type PracticeItem = Question & {
  /** Judul topik untuk tampilan. */
  topic: string;
  topicSlug: string;
  pages: string;
  /** Judul bagian rangkuman. */
  sectionTitle?: string | undefined;
};

const storageKey = "ukp:recent-questions:v1";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Latihan tetap jalan tanpa penyimpanan.
  }
}

export function shuffled<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

function loadHistory(): string[] {
  const history: unknown = read(storageKey, []);
  return Array.isArray(history)
    ? history.filter((item): item is string => typeof item === "string")
    : [];
}

export function rememberQuestion(id: string) {
  const history = loadHistory().filter((item) => item !== id);
  write(storageKey, [...history, id].slice(-3000));
}

/** Susun bergiliran antarkelompok supaya satu konsep tidak muncul berdekatan. */
function spread<T>(items: T[], key: (item: T) => string): T[] {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const group = groups.get(key(item)) ?? [];
    group.push(item);
    groups.set(key(item), group);
  }
  const rounds = Math.max(0, ...Array.from(groups.values(), (group) => group.length));
  const result: T[] = [];
  for (let i = 0; i < rounds; i++) {
    for (const group of groups.values()) {
      const item = group[i];
      if (item) result.push(item);
    }
  }
  return result;
}

/**
 * Pilih soal: yang belum pernah dilihat lebih dulu, lalu yang paling lama tidak dilihat.
 * Soal disebar per bagian (dan per topik bila campuran) agar tidak beruntun satu konsep.
 */
export function pickQuestions(pool: PracticeItem[], size: number, balanceTopics: boolean) {
  const recency = new Map(loadHistory().map((id, index) => [id, index]));
  const unique = [...new Map(pool.map((question) => [question.id, question])).values()];
  const unseen: PracticeItem[] = [];
  const seen: PracticeItem[] = [];
  for (const item of unique) (recency.has(item.id) ? seen : unseen).push(item);
  seen.sort((a, b) => recency.get(a.id)! - recency.get(b.id)!);
  const diversify = (items: PracticeItem[]) => {
    const bySection = spread(items, (item) => item.family ?? item.section ?? item.topicSlug);
    return balanceTopics ? spread(bySection, (item) => item.topicSlug) : bySection;
  };
  return [...diversify(shuffled(unseen)), ...diversify(seen)].slice(0, size);
}

/** Acak pilihan dan sesuaikan indeks jawaban, kecuali pada soal asli. */
export function withShuffledOptions<T extends Question>(item: T): T {
  if (item.originalSource) return item;
  const options = shuffled(item.options) as T["options"];
  return { ...item, options, answer: options.indexOf(item.options[item.answer]!) };
}

type Review = { streak: number; due: number };
export type ReviewHistory = Record<string, Review>;

export function questionKey(item: Pick<Question, "id">) {
  return item.id;
}

export function loadReview(level: UkpLevel): ReviewHistory {
  const entries: unknown = read(`ukp:review:v1:${level}`, {});
  if (!entries || typeof entries !== "object" || Array.isArray(entries)) return {};
  return Object.fromEntries(
    Object.entries(entries as Record<string, Review>).filter(
      ([, value]) =>
        value &&
        Number.isInteger(value.streak) &&
        value.streak >= 0 &&
        value.streak <= 3 &&
        Number.isFinite(value.due),
    ),
  );
}

/** Jadwal ulang: salah → hari ini; benar → 1, 3, lalu 7 hari. */
export function recordAnswer(level: UkpLevel, question: Pick<Question, "id">, correct: boolean) {
  const history = loadReview(level);
  const key = questionKey(question);
  const previous = history[key];
  const now = Date.now();
  if (!correct || !previous || previous.due <= now) {
    const streak = correct ? Math.min((previous?.streak ?? 0) + 1, 3) : 0;
    const days = [0, 1, 3, 7][streak]!;
    history[key] = { streak, due: now + days * 86_400_000 };
    write(`ukp:review:v1:${level}`, history);
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

export type SessionResult = {
  at: number;
  mode: string;
  scope: string;
  correct: number;
  total: number;
  seconds: number;
};

export function loadResults(level: UkpLevel): SessionResult[] {
  const results: unknown = read(`ukp:results:v1:${level}`, []);
  return Array.isArray(results) ? (results as SessionResult[]) : [];
}

export function saveResult(level: UkpLevel, result: SessionResult) {
  write(`ukp:results:v1:${level}`, [result, ...loadResults(level)].slice(0, 30));
}

/** Bagian rangkuman yang ditandai sudah dipahami. */
export function loadUnderstood(level: UkpLevel): string[] {
  const ids: unknown = read(`ukp:understood:v1:${level}`, []);
  return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === "string") : [];
}

export function setUnderstood(level: UkpLevel, id: string, value: boolean) {
  const ids = new Set(loadUnderstood(level));
  if (value) ids.add(id);
  else ids.delete(id);
  write(`ukp:understood:v1:${level}`, [...ids]);
  return [...ids];
}
