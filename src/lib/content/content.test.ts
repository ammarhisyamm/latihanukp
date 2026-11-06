import { describe, expect, it } from "vitest";
import { getBookletItems } from "../ukp-curriculum";
import { getUkpTopic, ukpLevels } from "../ukp";
import { topicContent } from ".";

const all = Object.entries(topicContent);
const normalize = (text: string) =>
  text
    .toLocaleLowerCase("id")
    .replace(/rp[\d.,]+( (ribu|juta|miliar))?/g, "#")
    .replace(/\d+([.,]\d+)?/g, "#")
    .replace(/[^\p{L}#]+/gu, " ")
    .trim();

describe("bank konten UKP", () => {
  it("memakai id unik, section yang ada, dan empat pilihan berbeda", () => {
    const ids = new Set<string>();
    for (const [slug, content] of all) {
      const sections = new Set(content.summary.map((section) => section.id));
      expect(sections.size, slug).toBe(content.summary.length);
      for (const item of content.questions) {
        expect(ids.has(item.id), item.id).toBe(false);
        ids.add(item.id);
        expect(sections.has(item.section), item.id).toBe(true);
        expect(new Set(item.options).size, item.id).toBe(4);
        expect(item.options[item.answer], item.id).toBeTruthy();
        expect(item.levels.length, item.id).toBeGreaterThan(0);
      }
      for (const card of content.flashcards) expect(sections.has(card.section), card.front).toBe(true);
    }
  });

  it("tidak memuat soal kembar yang hanya beda angka", () => {
    const seen = new Map<string, string>();
    for (const [, content] of all) {
      for (const item of content.questions) {
        const key = normalize(item.prompt);
        expect(seen.get(key), `${item.id} sama dengan ${seen.get(key)}`).toBeUndefined();
        seen.set(key, item.id);
      }
    }
  });

  it("menautkan butir booklet yang ada dan memberi tiap bagian soal latihan", () => {
    for (const level of ["a", "b"] as const) {
      for (const slug of ukpLevels[level]) {
        const topic = getUkpTopic(level, slug)!;
        const numbers = new Set(getBookletItems(level, slug).map(([number]) => number));
        expect(topic.summary.length, `${level}/${slug}`).toBeGreaterThan(0);
        for (const section of topic.summary) {
          const item = section.bookletItem?.[level];
          if (item) expect(numbers.has(item), `${level}/${slug}/${section.id}: ${item}`).toBe(true);
          expect(
            topic.questions.some((question) => question.section === section.id),
            `${level}/${slug}/${section.id} tanpa soal`,
          ).toBe(true);
        }
      }
    }
  });
});
