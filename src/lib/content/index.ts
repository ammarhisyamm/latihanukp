import type { UkpTopic } from "../ukp";
import type { TopicContent } from "./types";
import akuntansi from "./akuntansi-perpajakan";
import beaMeterai from "./bea-meterai";
import kup from "./kup";
import pbb from "./pbb-p5l";
import badan from "./pph-badan";
import orangPribadi from "./pph-orang-pribadi";
import potongPungut from "./pph-potong-pungut";
import ppn from "./ppn";

export const topicContent: Record<UkpTopic, TopicContent> = {
  "bea-meterai": beaMeterai,
  kup,
  "pph-orang-pribadi": orangPribadi,
  "pph-potong-pungut": potongPungut,
  ppn,
  "pbb-p5l": pbb,
  "akuntansi-perpajakan": akuntansi,
  "pph-badan": badan,
};

export type { BankItem, Flashcard, SummarySection, TopicContent } from "./types";
