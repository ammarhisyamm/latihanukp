import { describe, expect, it } from "vitest";
import { getBookletItems } from "./ukp-curriculum";
import { getUkpTopic, ukpLevels } from "./ukp";

const million = 1_000_000;
const expected: Record<string, (n: number) => number> = {
  rangkap: (n) => n * (2 + (n % 3)) * 10_000,
  ambang: (n) => (n + 2) * 10_000,
  "kurang-bayar": (n) => n * 20_000,
  "alat-bukti": (n) => (n + 6) * 10_000,
  "bunga-pembetulan": (n) => n * 96_000,
  "bagian-bulan": (n) => (n + 9) * 30_000,
  "sisa-restitusi": (n) => (3 * n + 25) * million,
  "denda-keberatan": (n) => (2 * n + 42) * 300_000,
  "lapisan-op": (n) => (5 * n + 15) * 150_000 + 3 * million,
  nppn: (n) => (350 + 17 * n) * (6 + (n % 4)) * 50_000,
  "alokasi-ph": (n) => (n + 20) * 400_000,
  "kredit-op": (n) => (2 * n + 13) * million,
  "ter-bonus": (n) => (n + 12) * 60_000,
  "masa-terakhir": (n) => (n + 16) * 500_000,
  "sewa-campur": (n) => 220_000 * n + 2_160_000,
  impor: (n) => (10 * n + 124) * 25_000,
  nonmewah: (n) => n * 1_320_000,
  "uang-muka": (n) => (4 * n + 50) * 110_000,
  "kompensasi-ppn": (n) => (n + 4) * million,
  "retur-ppn": (n) => 30 * million - (n + 13) * 110_000,
  "areal-produktif": (n) => (200 * n + 1300) * million,
  njkp: (n) => n * 120 * million,
  "pbb-dua-objek": (n) => (n + 3) * million,
  "sisa-pbb": (n) => (n + 3) * million,
  "kas-jasa": (n) => (n * 4 + 25) * 980_000,
  "sewa-dimuka": (n) => (n * 6 + 30) * million,
  tangguhan: (n) => (7 * n + 15) * 220_000,
  rekonsiliasi: (n) => (7 * n + 91) * million,
  "fasilitas-31e": (n) => (n * 20 + 200) * 176_000,
  "penyusutan-awal": (n) => (n + 15) * million,
  "angsuran-25": (n) => (n + 6) * million,
  "sisa-29-badan": (n) => (n * 10 + 400) * 220_000 - 50 * million,
};

describe("variasi hitungan UKP", () => {
  it("memiliki 1.024 kasus berbeda dengan kunci hitungan dan butir yang cocok", () => {
    const variants = new Map<string, string>();
    for (const level of ["a", "b"] as const) {
      for (const topic of ukpLevels[level]) {
        const itemNumbers = new Set(getBookletItems(level, topic).map(([number]) => number));
        for (const question of getUkpTopic(level, topic)!.questions) {
          if (!question.family || !question.id) continue;
          const i = Number(question.id.split("-").at(-1));
          const value = Number(question.options[question.answer]!.replace(/[^\d]/g, ""));
          expect(value, question.id).toBe(expected[question.family]!(i));
          expect(itemNumbers.has(question.bookletItem!), question.id).toBe(true);
          expect(new Set(question.options).size).toBe(4);
          expect(question.legalSource?.href).toMatch(/^https:\/\//);
          if (variants.has(question.id)) expect(variants.get(question.id)).toBe(question.prompt);
          variants.set(question.id, question.prompt);
        }
      }
    }
    expect(variants.size).toBe(1024);
    expect(new Set(variants.values()).size).toBe(1024);
  });
});
