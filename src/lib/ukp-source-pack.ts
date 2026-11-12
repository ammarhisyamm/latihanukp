import type { PracticeItem } from "./ukp-practice";

function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
  return value as Record<string, unknown>;
}

function text(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) throw new Error();
  return value;
}

function positiveInteger(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1) throw new Error();
  return value;
}

export function parseSourcePack(input: string): PracticeItem[] {
  const pack = object(JSON.parse(input));
  const items = pack["questions"];
  if (pack["version"] !== 1 || !Array.isArray(items) || !items.length || items.length > 200) {
    throw new Error();
  }

  return items.map((value: unknown, index) => {
    const item = object(value);
    const options = item["options"];
    const answer = item["answer"];
    if (
      !Array.isArray(options) ||
      options.length !== 4 ||
      typeof answer !== "number" ||
      !Number.isInteger(answer) ||
      answer < 0 ||
      answer >= options.length
    )
      throw new Error();

    const source = object(item["source"]);
    return {
      id: `source-import-${index + 1}`,
      kind: "kasus",
      topicSlug: "",
      topic: text(item["topic"]),
      pages: "",
      prompt: text(item["prompt"]),
      options: [text(options[0]), text(options[1]), text(options[2]), text(options[3])],
      answer,
      explanation: "Kunci mengikuti dokumen sumber.",
      originalSource: {
        title: text(source["title"]),
        page: positiveInteger(source["page"]),
        number: positiveInteger(source["number"]),
      },
    };
  });
}
