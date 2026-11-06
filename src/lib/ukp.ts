import { topicContent } from "./content";
import type { Flashcard, SummarySection } from "./content";
import { getBookletItems } from "./ukp-curriculum";
import { getUkpStudy } from "./ukp-study";

export type UkpLevel = "a" | "b";
export type QuestionKind = "konsep" | "hitung" | "kasus";

export type Question = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
  kind: QuestionKind;
  /** Id bagian rangkuman. Kosong untuk drill hitung. */
  section?: string | undefined;
  /** Pola drill hitung; hanya ada pada soal angka acak. */
  family?: string | undefined;
  bookletItem?: string | undefined;
  bookletPage?: number | undefined;
  source?: string | undefined;
  legal?: string | undefined;
  legalSource?: { label: string; href: string };
};

type TopicMeta = {
  title: string;
  short: string;
  description: string;
  pages: Partial<Record<UkpLevel, string>>;
};

export const ukpTopics = {
  "bea-meterai": {
    title: "Bea Meterai",
    short: "Meterai",
    description: "Objek dokumen, saat terutang, pemungut, dan pemeteraian kemudian.",
    pages: { a: "1–5", b: "13–15" },
  },
  kup: {
    title: "KUP, PPSP, dan Pengadilan Pajak",
    short: "KUP",
    description: "Administrasi, sanksi, penagihan, pemeriksaan, dan sengketa pajak.",
    pages: { a: "5–17", b: "1–13" },
  },
  "pph-orang-pribadi": {
    title: "PPh Orang Pribadi",
    short: "PPh OP",
    description: "Subjek, objek, NPPN, PTKP, tarif progresif, dan penghasilan keluarga.",
    pages: { a: "17–27", b: "30–32" },
  },
  "pph-potong-pungut": {
    title: "PPh Potong/Pungut",
    short: "Potput",
    description: "PPh 21/26 dengan TER, PPh 22, PPh 23, dan PPh final Pasal 4 ayat (2).",
    pages: { a: "27–38", b: "32–41" },
  },
  ppn: {
    title: "PPN dan SPT PPN",
    short: "PPN",
    description: "DPP, Faktur Pajak, pengkreditan Pajak Masukan, retur, dan fasilitas.",
    pages: { a: "38–44", b: "41–46" },
  },
  "pbb-p5l": {
    title: "PBB-P5L",
    short: "PBB",
    description: "Subjek dan objek, NJOP per sektor, NJKP, serta keberatan dan pengurangan.",
    pages: { b: "15–18" },
  },
  "akuntansi-perpajakan": {
    title: "Akuntansi Perpajakan",
    short: "Akuntansi",
    description: "Jurnal pajak, rekonsiliasi fiskal, serta pajak kini dan tangguhan.",
    pages: { b: "18–22" },
  },
  "pph-badan": {
    title: "PPh Badan",
    short: "PPh Badan",
    description: "Biaya fiskal, penyusutan, Pasal 31E, kredit pajak, dan PPh 25/29.",
    pages: { b: "22–30" },
  },
} satisfies Record<string, TopicMeta>;

export type UkpTopic = keyof typeof ukpTopics;

export const ukpLevels = {
  a: ["bea-meterai", "kup", "pph-orang-pribadi", "pph-potong-pungut", "ppn"],
  b: [
    "kup",
    "bea-meterai",
    "pbb-p5l",
    "akuntansi-perpajakan",
    "pph-badan",
    "pph-orang-pribadi",
    "pph-potong-pungut",
    "ppn",
  ],
} satisfies Record<UkpLevel, UkpTopic[]>;

export function isUkpLevel(value: string): value is UkpLevel {
  return value === "a" || value === "b";
}

export function findUkpTopic(level: UkpLevel, slug: string): UkpTopic | undefined {
  return (ukpLevels[level] as readonly UkpTopic[]).find((topic) => topic === slug);
}

export type UkpTopicData = {
  slug: UkpTopic;
  title: string;
  short: string;
  description: string;
  pages: string;
  summary: (SummarySection & { bookletPage?: number | undefined })[];
  questions: Question[];
  flashcards: Flashcard[];
  guides: ReturnType<typeof getUkpStudy>;
};

const cache = new Map<string, UkpTopicData>();

export function getUkpTopic(level: UkpLevel, slug: string): UkpTopicData | undefined {
  const key = findUkpTopic(level, slug);
  if (!key) return undefined;
  const cached = cache.get(`${level}/${key}`);
  if (cached) return cached;
  const meta: TopicMeta = ukpTopics[key];
  const content = topicContent[key];
  const items = getBookletItems(level, key);
  const pageOf = (number?: string) => items.find(([n]) => n === number)?.[2];
  const summary = content.summary
    .filter((section) => section.levels.includes(level))
    .map((section) => ({ ...section, bookletPage: pageOf(section.bookletItem?.[level]) }));
  const sections = new Map(summary.map((section) => [section.id, section]));
  const data: UkpTopicData = {
    slug: key,
    title: meta.title,
    short: meta.short,
    description: meta.description,
    pages: meta.pages[level]!,
    summary,
    questions: content.questions
      .filter((item) => item.levels.includes(level))
      .map((item): Question => {
        const section = sections.get(item.section);
        return {
          id: item.id,
          prompt: item.prompt,
          options: [...item.options],
          answer: item.answer,
          explanation: item.explanation,
          kind: item.kind,
          section: item.section,
          bookletItem: section?.bookletItem?.[level],
          bookletPage: section?.bookletPage,
          source: item.source,
          legal: item.legal,
        };
      }),
    flashcards: content.flashcards.filter((card) => card.levels.includes(level)),
    guides: getUkpStudy(level, key),
  };
  cache.set(`${level}/${key}`, data);
  return data;
}

export function ukpHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  };
}
