import { useEffect, useState } from "react";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Flashcard } from "@/lib/content";
import { shuffled } from "@/lib/ukp-practice";
import { cn } from "@/lib/utils";

type Props = {
  cards: Flashcard[];
  sections: { id: string; title: string }[];
};

export function UkpFlashcards({ cards, sections }: Props) {
  const [section, setSection] = useState("");
  const [deck, setDeck] = useState<Flashcard[]>(cards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [unknown, setUnknown] = useState<Flashcard[]>([]);
  const [known, setKnown] = useState(0);

  function reset(next: Flashcard[]) {
    setDeck(next);
    setIndex(0);
    setFlipped(false);
    setUnknown([]);
    setKnown(0);
  }

  useEffect(() => {
    reset(section ? cards.filter((card) => card.section === section) : cards);
  }, [section, cards]);

  const card = deck[index];
  const done = !card;

  function grade(ok: boolean) {
    if (!card) return;
    if (ok) setKnown(known + 1);
    else setUnknown([...unknown, card]);
    setFlipped(false);
    setIndex(index + 1);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.target as HTMLElement).closest("input, select, textarea")) return;
      if (event.key === " " && card) {
        event.preventDefault();
        setFlipped((value) => !value);
      } else if (flipped && (event.key === "ArrowRight" || event.key === "1")) grade(true);
      else if (flipped && (event.key === "ArrowLeft" || event.key === "2")) grade(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!cards.length) {
    return <p className="text-sm text-muted-foreground">Belum ada kartu hafalan untuk topik ini.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex min-w-0 items-center gap-2 text-sm">
          <span className="font-semibold">Bagian</span>
          <select
            value={section}
            onChange={(event) => setSection(event.target.value)}
            className="h-9 w-full max-w-64 min-w-0 truncate rounded-lg border bg-background px-2"
          >
            <option value="">Semua ({cards.length})</option>
            {sections
              .filter((item) => cards.some((card) => card.section === item.id))
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title} ({cards.filter((card) => card.section === item.id).length})
                </option>
              ))}
          </select>
        </label>
        <div className="flex items-center gap-3 text-sm text-muted-foreground tabular-nums">
          <span>
            {Math.min(index + 1, deck.length)}/{deck.length}
          </span>
          <span className="text-[var(--green-ink)]">{known} hafal</span>
          <span className="text-destructive">{unknown.length} belum</span>
          <Button variant="outline" size="sm" onClick={() => reset(shuffled(deck))}>
            <Shuffle aria-hidden="true" /> Acak
          </Button>
        </div>
      </div>

      {done ? (
        <div className="rounded-xl border bg-card p-8 text-center">
          <p className="text-xl font-semibold">Satu putaran selesai</p>
          <p className="mt-1 text-sm text-muted-foreground tabular-nums">
            {known} hafal · {unknown.length} perlu diulang
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {unknown.length > 0 && (
              <Button onClick={() => reset(shuffled(unknown))}>
                <RotateCcw aria-hidden="true" /> Ulangi {unknown.length} kartu belum hafal
              </Button>
            )}
            <Button variant="outline" onClick={() => reset(shuffled(deck))}>
              Putaran baru
            </Button>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setFlipped(!flipped)}
            aria-label={flipped ? "Tampilkan pertanyaan" : "Tampilkan jawaban"}
            className={cn(
              "flex min-h-56 w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 p-6 text-center transition-colors sm:min-h-64 sm:p-10",
              flipped ? "border-primary bg-primary/5" : "bg-card hover:border-primary/40",
            )}
          >
            <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              {flipped ? "Jawaban" : "Pertanyaan"}
            </span>
            <span
              className={cn(
                "max-w-[42ch] text-pretty",
                flipped ? "text-lg leading-relaxed" : "text-xl font-semibold sm:text-2xl",
              )}
            >
              {flipped ? card.back : card.front}
            </span>
            {!flipped && (
              <span className="text-xs text-muted-foreground">Klik atau tekan spasi untuk membalik</span>
            )}
          </button>
          <div className="flex justify-center gap-3">
            <Button
              size="lg"
              variant="outline"
              disabled={!flipped}
              onClick={() => grade(false)}
              className="min-w-36 border-destructive/40 text-destructive"
            >
              <X aria-hidden="true" /> Belum hafal
            </Button>
            <Button size="lg" disabled={!flipped} onClick={() => grade(true)} className="min-w-36">
              <Check aria-hidden="true" /> Sudah hafal
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
