import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  dueQuestions,
  loadReview,
  pickQuestions,
  recordAnswer,
  rememberQuestion,
  loadUnderstood,
  setUnderstood,
  withShuffledOptions,
  type PracticeItem,
} from "./ukp-practice";

const question: PracticeItem = {
  prompt: "Hitung pajak",
  options: ["1", "2", "3", "4"],
  answer: 0,
  explanation: "1",
  id: "calc-first",
  family: "first",
  kind: "hitung",
  topic: "PPN",
  topicSlug: "ppn",
  pages: "1",
};
const day = 86_400_000;

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(0);
});
afterEach(() => vi.useRealTimers());

describe("latihan UKP", () => {
  it("mengutamakan soal baru dan menyebar jenis hitungan", () => {
    const pool = [
      question,
      { ...question, id: "calc-second", prompt: "Hitung 2" },
      { ...question, id: "calc-third", prompt: "Hitung 3", family: "third" },
      { ...question, id: "calc-fourth", prompt: "Hitung 4", family: "fourth" },
    ];
    rememberQuestion(question.id);
    const set = pickQuestions(pool, 3, false);
    expect(set.map((item) => item.id)).not.toContain(question.id);
    expect(new Set(set.map((item) => item.family)).size).toBe(3);
  });

  it("menjadwalkan ulang jawaban benar, mengulang jawaban salah, dan memisahkan tingkat", () => {
    const id = question.id;
    expect(recordAnswer("a", question, false)[id]).toEqual({ streak: 0, due: 0 });
    expect(dueQuestions([question], loadReview("a"), 10)).toEqual([question]);
    expect(recordAnswer("a", question, true)[id]).toEqual({ streak: 1, due: day });
    expect(recordAnswer("a", question, true)[id]?.streak).toBe(1);
    expect(dueQuestions([question], loadReview("a"), 10)).toEqual([]);
    vi.setSystemTime(day);
    expect(recordAnswer("a", question, true)[id]).toEqual({ streak: 2, due: 4 * day });
    vi.setSystemTime(4 * day);
    expect(recordAnswer("a", question, true)[id]).toEqual({ streak: 3, due: 11 * day });
    expect(loadReview("b")).toEqual({});
    expect(recordAnswer("a", question, false)[id]?.streak).toBe(0);
  });

  it("mengacak pilihan tanpa mengubah jawaban benar", () => {
    const item = withShuffledOptions(question);
    expect(item.options[item.answer]).toBe("1");
    expect([...item.options].sort()).toEqual(["1", "2", "3", "4"]);
  });

  it("menyimpan bagian yang sudah dipahami per tingkat", () => {
    setUnderstood("a", "objek", true);
    expect(loadUnderstood("a")).toEqual(["objek"]);
    expect(loadUnderstood("b")).toEqual([]);
    setUnderstood("a", "objek", false);
    expect(loadUnderstood("a")).toEqual([]);
  });
});
