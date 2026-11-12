import { expect, it } from "vitest";
import { parseSourcePack } from "./ukp-source-pack";

const question = {
  topic: "PPN",
  prompt: "Baris pertama\nBaris kedua",
  options: ["Pilihan pertama", "Pilihan kedua", "Pilihan ketiga", "Pilihan keempat"],
  answer: 2,
  source: { title: "Latihan.pdf", page: 9, number: 4 },
};

it("mempertahankan teks, urutan pilihan, dan indeks kunci dari paket sumber", () => {
  const [item] = parseSourcePack(JSON.stringify({ version: 1, questions: [question] }));
  expect(item?.prompt).toBe(question.prompt);
  expect(item?.options).toEqual(question.options);
  expect(item?.answer).toBe(question.answer);
  expect(item?.originalSource).toEqual(question.source);
});

it("menolak kunci di luar pilihan", () => {
  expect(() =>
    parseSourcePack(JSON.stringify({ version: 1, questions: [{ ...question, answer: 4 }] })),
  ).toThrow();
});
