import type { UkpLevel } from "../ukp";

/** Satu soal pilihan ganda di bank konten per topik. */
export type BankItem = {
  /** Id stabil, unik di seluruh bank. Format: `<prefix-topik>-<nomor tiga digit>`, mis. `bm-001`. */
  id: string;
  /** Tingkat yang memakai soal ini. */
  levels: readonly UkpLevel[];
  /** Id bagian rangkuman (`SummarySection.id`) yang diuji soal ini. */
  section: string;
  /** konsep = hafalan/pemahaman, hitung = satu langkah hitungan, kasus = beberapa langkah/fakta. */
  kind: "konsep" | "hitung" | "kasus";
  prompt: string;
  /** Tepat empat pilihan berbeda. Urutan diacak saat latihan. */
  options: readonly [string, string, string, string];
  /** Indeks pilihan benar. */
  answer: 0 | 1 | 2 | 3;
  /** Pembahasan: kenapa jawaban benar dan kenapa pengecoh utama salah. */
  explanation: string;
  /** Dasar hukum singkat, mis. "UU 10/2020 Pasal 8". */
  legal?: string | undefined;
  /** Asal pola soal bila diadaptasi dari tryout/arsip. */
  source?: string | undefined;
};

/** Satu bagian rangkuman materi. */
export type SummarySection = {
  /** Id singkat kebab-case, unik dalam topik. */
  id: string;
  title: string;
  levels: readonly UkpLevel[];
  /** Nomor butir booklet per tingkat, mengikuti ukp-curriculum.ts. */
  bookletItem?: Partial<Record<UkpLevel, string>> | undefined;
  /** Poin inti, masing-masing satu kalimat padat. */
  points: readonly string[];
  /** Tabel angka penting: tarif, batas, tenggat. */
  table?: { head: readonly string[]; rows: readonly (readonly string[])[] };
  /** Jebakan yang sering muncul di soal. */
  traps?: readonly string[] | undefined;
  legal?: string | undefined;
};

/** Kartu hafalan. */
export type Flashcard = {
  front: string;
  back: string;
  levels: readonly UkpLevel[];
  section: string;
};

export type TopicContent = {
  summary: readonly SummarySection[];
  questions: readonly BankItem[];
  flashcards: readonly Flashcard[];
};
