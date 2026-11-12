import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  CircleHelp,
  Clock,
  Flag,
  GraduationCap,
  ListChecks,
  RotateCcw,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseSourcePack } from "@/lib/ukp-source-pack";
import { cn } from "@/lib/utils";
import type { QuestionKind, UkpLevel } from "@/lib/ukp";
import {
  dueQuestions,
  loadReview,
  pickQuestions,
  recordAnswer,
  rememberQuestion,
  saveResult,
  withShuffledOptions,
  type PracticeItem,
  type ReviewHistory,
} from "@/lib/ukp-practice";

export type QuizMode = "latihan" | "simulasi" | "ulang" | "hitung";

const letters = ["A", "B", "C", "D"] as const;
const kindLabel: Record<QuestionKind, string> = {
  konsep: "Konsep",
  hitung: "Hitungan",
  kasus: "Kasus",
};
const passingGrade = 60;
const secondsPerQuestion = 120;

type SectionOption = { id: string; title: string };

export type UkpQuizProps = {
  level: UkpLevel;
  title: string;
  /** Topik tunggal: slug untuk tautan rangkuman. Kosong bila campuran. */
  slug?: string | undefined;
  questions: PracticeItem[];
  sections?: SectionOption[] | undefined;
  /** Pembuat soal drill hitung (angka acak). */
  drill?: (() => PracticeItem[]) | undefined;
  initialMode?: QuizMode | undefined;
  initialSection?: string | undefined;
  back: ReactNode;
};

type RunMode = QuizMode | "sumber";

type Run = {
  mode: RunMode;
  items: PracticeItem[];
  answers: (number | undefined)[];
  checked: boolean[];
  flagged: boolean[];
  index: number;
  startedAt: number;
  deadline?: number | undefined;
  finishedAt?: number | undefined;
};

export function UkpQuiz(props: UkpQuizProps) {
  const [run, setRun] = useState<Run>();
  const [review, setReview] = useState<ReviewHistory>({});
  useEffect(() => setReview(loadReview(props.level)), [props.level, run?.finishedAt]);

  function start(mode: RunMode, items: PracticeItem[], seconds?: number) {
    if (!items.length) return;
    const now = Date.now();
    setRun({
      mode,
      items: mode === "sumber" ? items : items.map(withShuffledOptions),
      answers: items.map(() => undefined),
      checked: items.map(() => false),
      flagged: items.map(() => false),
      index: 0,
      startedAt: now,
      deadline: seconds ? now + seconds * 1000 : undefined,
    });
    window.scrollTo({ top: 0 });
  }

  function finish(current: Run) {
    if (current.finishedAt) return;
    const finishedAt = Date.now();
    if (current.mode === "sumber") {
      setRun({ ...current, finishedAt });
      window.scrollTo({ top: 0 });
      return;
    }
    let correct = 0;
    current.items.forEach((item, i) => {
      const answer = current.answers[i];
      const right = answer === item.answer;
      if (right) correct++;
      // Latihan sudah mencatat saat diperiksa; simulasi dicatat di akhir.
      if (answer !== undefined && !current.checked[i]) recordAnswer(props.level, item, right);
    });
    saveResult(props.level, {
      at: finishedAt,
      mode: current.mode,
      scope: props.title,
      correct,
      total: current.items.length,
      seconds: Math.round((finishedAt - current.startedAt) / 1000),
    });
    setRun({ ...current, finishedAt });
    window.scrollTo({ top: 0 });
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      {!run && (
        <>
          <div className="self-start">{props.back}</div>
          <Setup {...props} review={review} onStart={start} />
        </>
      )}
      {run && !run.finishedAt && (
        <Runner
          run={run}
          setRun={setRun}
          level={props.level}
          slug={props.slug}
          title={props.title}
          onFinish={finish}
          onQuit={() => setRun(undefined)}
        />
      )}
      {run?.finishedAt && (
        <Result
          run={run}
          level={props.level}
          slug={props.slug}
          mixed={!props.slug}
          onRetryWrong={(items) => start(run.mode === "sumber" ? "sumber" : "latihan", items)}
          onAgain={() => setRun(undefined)}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ setup */

function Setup({
  level,
  title,
  slug,
  questions,
  sections = [],
  drill,
  initialMode = "latihan",
  initialSection = "",
  review,
  onStart,
}: UkpQuizProps & {
  review: ReviewHistory;
  onStart: (mode: RunMode, items: PracticeItem[], seconds?: number) => void;
}) {
  const [mode, setMode] = useState<QuizMode>(initialMode);
  const [sourceError, setSourceError] = useState("");
  const advanced = questions.filter((item) => item.id.startsWith("ortax-pattern-"));

  async function openSourceFile(file: File) {
    try {
      if (file.size > 2_000_000) throw new Error();
      onStart("sumber", parseSourcePack(await file.text()));
    } catch {
      setSourceError("File paket soal tidak dapat dibuka. Pilih file JSON paket sumber.");
    }
  }
  const [section, setSection] = useState(
    sections.some((item) => item.id === initialSection) ? initialSection : "",
  );
  const [kinds, setKinds] = useState<QuestionKind[]>([]);
  const [size, setSize] = useState(mode === "simulasi" ? 50 : 10);
  const due = dueQuestions(questions, review, questions.length);
  const attempted = questions.filter((item) => review[item.id]).length;
  const mastered = questions.filter((item) => review[item.id]?.streak === 3).length;

  const filtered = questions.filter(
    (item) =>
      (!section || item.section === section) && (!kinds.length || kinds.includes(item.kind)),
  );
  const pool = mode === "ulang" ? due : filtered;
  const sizes = mode === "simulasi" ? [25, 50, 100] : [10, 20, 40];
  const actual = mode === "hitung" ? undefined : Math.min(size, pool.length);

  function chooseMode(next: QuizMode) {
    setMode(next);
    setSize(next === "simulasi" ? 50 : 10);
  }

  function begin() {
    if (mode === "hitung") return drill && onStart("hitung", pickQuestions(drill(), 20, !slug));
    if (mode === "ulang") return onStart("ulang", due.slice(0, 20));
    const items = pickQuestions(pool, size, !slug);
    onStart(mode, items, mode === "simulasi" ? items.length * secondsPerQuestion : undefined);
  }

  const modes: {
    id: QuizMode;
    icon: ReactNode;
    label: string;
    text: string;
    off?: boolean;
  }[] = [
    {
      id: "latihan",
      icon: <ListChecks aria-hidden="true" />,
      label: "Latihan soal",
      text: "Jawab, periksa, dan baca pembahasan setiap soal.",
    },
    {
      id: "simulasi",
      icon: <GraduationCap aria-hidden="true" />,
      label: "Simulasi ujian",
      text: `Waktu berjalan ${secondsPerQuestion / 60} menit per soal. Pembahasan muncul setelah selesai. Batas lulus ${passingGrade}.`,
    },
    {
      id: "ulang",
      icon: <RotateCcw aria-hidden="true" />,
      label: "Ulang soal salah",
      text: due.length
        ? `${due.length} soal jatuh tempo untuk diulang.`
        : "Belum ada soal yang perlu diulang.",
      off: !due.length,
    },
    ...(drill
      ? [
          {
            id: "hitung" as const,
            icon: <Calculator aria-hidden="true" />,
            label: "Drill hitung",
            text: "Angka acak setiap sesi, satu soal per pola hitungan.",
          },
        ]
      : []),
  ];

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-sm font-medium text-primary">
            Latihan Tingkat {level.toUpperCase()}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground tabular-nums">
            {questions.length} soal · {attempted} pernah dijawab · {mastered} dikuasai
          </p>
        </div>
        {slug && (
          <Button variant="outline" size="lg" asChild>
            <Link to="/ukp/$level/$topic/materi" params={{ level, topic: slug }}>
              <BookOpen aria-hidden="true" /> Buka rangkuman
            </Link>
          </Button>
        )}
      </header>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold">Pilih mode</legend>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {modes.map((item) => (
            <label
              key={item.id}
              className={cn(
                "flex cursor-pointer flex-col gap-2 rounded-xl border bg-card p-4 transition-colors has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50",
                mode === item.id ? "border-primary bg-primary/5" : "hover:border-primary/40",
                item.off && "cursor-not-allowed opacity-60",
              )}
            >
              <input
                type="radio"
                name="mode"
                className="sr-only"
                checked={mode === item.id}
                disabled={item.off}
                onChange={() => chooseMode(item.id)}
              />
              <span className="flex items-center gap-2 font-semibold [&_svg]:size-5 [&_svg]:text-primary">
                {item.icon}
                {item.label}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{item.text}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {(mode === "latihan" || mode === "simulasi") && (
        <div className="grid gap-5 rounded-xl border bg-card p-4 sm:p-6 md:grid-cols-3">
          {sections.length > 0 && (
            <label className="flex min-w-0 flex-col gap-2 text-sm font-semibold">
              Bagian materi
              <select
                value={section}
                onChange={(event) => setSection(event.target.value)}
                className="h-10 w-full min-w-0 truncate rounded-lg border bg-background px-2 font-normal"
              >
                <option value="">Semua bagian ({questions.length})</option>
                {sections.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title} ({questions.filter((q) => q.section === item.id).length})
                  </option>
                ))}
              </select>
            </label>
          )}
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-sm font-semibold">Jenis soal</legend>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(kindLabel) as QuestionKind[]).map((kind) => {
                const on = kinds.includes(kind);
                return (
                  <button
                    key={kind}
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setKinds(on ? kinds.filter((item) => item !== kind) : [...kinds, kind])
                    }
                    className={cn(
                      "h-9 rounded-full border px-3 text-sm",
                      on ? "border-primary bg-primary text-primary-foreground" : "bg-background",
                    )}
                  >
                    {kindLabel[kind]}
                  </button>
                );
              })}
            </div>
            <span className="text-xs text-muted-foreground">
              {kinds.length ? "Hanya jenis yang dipilih" : "Semua jenis"}
            </span>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-sm font-semibold">Jumlah soal</legend>
            <div className="flex flex-wrap gap-2">
              {sizes.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={size === value}
                  onClick={() => setSize(value)}
                  className={cn(
                    "h-9 min-w-12 rounded-full border px-3 text-sm tabular-nums",
                    size === value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "bg-background",
                  )}
                >
                  {value}
                </button>
              ))}
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">
              {pool.length} soal tersedia
              {mode === "simulasi" &&
                actual !== undefined &&
                ` · waktu ${Math.round((actual * secondsPerQuestion) / 60)} menit`}
            </span>
          </fieldset>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button
          size="lg"
          className="h-11 px-5 text-base"
          onClick={begin}
          disabled={mode !== "hitung" && !pool.length}
        >
          {mode === "simulasi" ? "Mulai simulasi" : "Mulai"}
          {actual !== undefined &&
            ` · ${mode === "ulang" ? Math.min(20, pool.length) : actual} soal`}
          <ArrowRight aria-hidden="true" />
        </Button>
        {mode !== "hitung" && !pool.length && (
          <p className="text-sm text-muted-foreground">
            Tidak ada soal untuk pilihan ini. Ubah bagian atau jenis soal.
          </p>
        )}
      </div>
      {advanced.length > 0 && (
        <Button
          variant="outline"
          className="self-start"
          onClick={() => onStart("latihan", pickQuestions(advanced, advanced.length, !slug))}
        >
          Kasus lanjutan Ortax · {advanced.length} soal
        </Button>
      )}
      {level === "b" && !slug && (
        <section className="rounded-xl border bg-card p-4">
          <h2 className="font-semibold">Soal asli dari paket sumber</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Buka paket JSON untuk berlatih dengan teks, urutan pilihan, dan kunci dari sumber. File
            dibaca langsung di browser.
          </p>
          <label className="mt-3 block text-sm">
            <span className="sr-only">Buka paket soal sumber</span>
            <input
              type="file"
              accept=".json,application/json"
              className="max-w-full file:mr-3 file:rounded-md file:border file:bg-card file:px-3 file:py-2"
              onChange={(event) => {
                const file = event.currentTarget.files?.[0];
                event.currentTarget.value = "";
                if (file) void openSourceFile(file);
              }}
            />
          </label>
          {sourceError && (
            <p role="alert" className="mt-2 text-sm text-destructive">
              {sourceError}
            </p>
          )}
        </section>
      )}
      <p className="text-xs leading-relaxed text-muted-foreground">
        Soal yang belum pernah kamu lihat di browser ini diprioritaskan, dan urutan pilihan diacak.
        Simulasi adalah latihan mandiri. Jumlah soal dan durasi ujian resmi mengikuti pengumuman
        BPPK.
      </p>
    </div>
  );
}

/* ----------------------------------------------------------------- runner */

function useNow(active: boolean) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!active) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [active]);
  return now;
}

function clock(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
}

function Runner({
  run,
  setRun,
  level,
  slug,
  title,
  onFinish,
  onQuit,
}: {
  run: Run;
  setRun: (run: Run) => void;
  level: UkpLevel;
  slug?: string | undefined;
  title: string;
  onFinish: (run: Run) => void;
  onQuit: () => void;
}) {
  const exam = run.mode === "simulasi";
  const now = useNow(true);
  const heading = useRef<HTMLHeadingElement>(null);
  const [confirming, setConfirming] = useState(false);
  const current = run.items[run.index]!;
  const answer = run.answers[run.index];
  const checked = run.checked[run.index]!;
  const answered = run.answers.filter((item) => item !== undefined).length;
  const remaining = run.deadline ? (run.deadline - now) / 1000 : undefined;
  const last = run.index === run.items.length - 1;

  useEffect(() => {
    if (remaining !== undefined && remaining <= 0) onFinish(run);
  }, [remaining, run, onFinish]);

  useEffect(() => {
    if (!current.originalSource) rememberQuestion(current.id);
    heading.current?.focus({ preventScroll: true });
  }, [current.id, current.originalSource]);

  function update(patch: Partial<Run>) {
    setRun({ ...run, ...patch });
  }
  function choose(option: number) {
    if (checked) return;
    const answers = [...run.answers];
    answers[run.index] = option;
    update({ answers });
  }
  function go(index: number) {
    if (index < 0 || index >= run.items.length) return;
    setConfirming(false);
    update({ index });
  }
  function check() {
    if (answer === undefined || checked) return;
    const checkedList = [...run.checked];
    checkedList[run.index] = true;
    if (!current.originalSource) recordAnswer(level, current, answer === current.answer);
    update({ checked: checkedList });
  }
  function toggleFlag() {
    const flagged = [...run.flagged];
    flagged[run.index] = !flagged[run.index];
    update({ flagged });
  }
  function next() {
    if (last) {
      if (exam && answered < run.items.length) setConfirming(true);
      else onFinish(run);
    } else go(run.index + 1);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement;
      if (target.closest("input, select, textarea")) return;
      const key = event.key.toLowerCase();
      const pick = "abcd".indexOf(key) >= 0 ? "abcd".indexOf(key) : "1234".indexOf(key);
      if (pick >= 0) {
        event.preventDefault();
        choose(pick);
      } else if (key === "enter" && !target.closest("button, a")) {
        event.preventDefault();
        if (!exam && !checked) check();
        else next();
      } else if (key === "arrowright") go(run.index + 1);
      else if (key === "arrowleft") go(run.index - 1);
      else if (key === "r" && exam) toggleFlag();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const status = (i: number) => {
    if (i === run.index) return "current";
    if (run.flagged[i]) return "flag";
    if (run.checked[i]) return run.answers[i] === run.items[i]!.answer ? "right" : "wrong";
    return run.answers[i] === undefined ? "empty" : "done";
  };

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_17rem]">
      <section
        aria-labelledby="ukp-question"
        className="flex flex-col gap-5 rounded-xl border bg-card p-4 sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground tabular-nums">
            <span className="font-semibold text-foreground">
              Soal {run.index + 1} dari {run.items.length}
            </span>
            {" · "}
            {exam ? "Simulasi" : run.mode === "hitung" ? "Drill hitung" : title}
          </p>
          <div className="flex items-center gap-2">
            {remaining !== undefined && (
              <span
                role="timer"
                aria-label="Sisa waktu"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-semibold tabular-nums",
                  remaining < 300 && "border-destructive text-destructive",
                )}
              >
                <Clock className="size-4" aria-hidden="true" /> {clock(remaining)}
              </span>
            )}
            <Button variant="ghost" size="sm" onClick={onQuit}>
              <X aria-hidden="true" /> Keluar
            </Button>
          </div>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-[width]"
            style={{
              width: `${((exam ? answered : run.checked.filter(Boolean).length) / run.items.length) * 100}%`,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-muted px-2.5 py-1 font-medium">
            {kindLabel[current.kind]}
          </span>
          {!slug && <span className="rounded-full bg-muted px-2.5 py-1">{current.topic}</span>}
          {current.sectionTitle && (
            <span className="rounded-full bg-muted px-2.5 py-1">{current.sectionTitle}</span>
          )}
        </div>

        <h2
          id="ukp-question"
          ref={heading}
          tabIndex={-1}
          className="whitespace-pre-line text-lg leading-relaxed font-semibold text-pretty outline-none sm:text-xl"
        >
          {current.prompt}
        </h2>

        <div role="radiogroup" aria-labelledby="ukp-question" className="flex flex-col gap-2.5">
          {current.options.map((option, i) => {
            const selected = answer === i;
            const correct = checked && i === current.answer;
            const wrong = checked && selected && i !== current.answer;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={selected}
                disabled={checked}
                onClick={() => choose(i)}
                className={cn(
                  "flex min-h-13 w-full items-start gap-3 rounded-lg border bg-background px-3 py-3 text-left text-[15px] leading-relaxed transition-colors",
                  !checked && "hover:border-primary/50 hover:bg-primary/5",
                  selected && !checked && "border-primary bg-primary/5 ring-1 ring-primary",
                  correct && "border-[var(--green-ink)] bg-[var(--soft-green)]",
                  wrong && "border-destructive bg-[var(--error-soft)]",
                  checked && !correct && !wrong && "opacity-70",
                )}
              >
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-md border text-sm font-semibold",
                    selected && !checked && "border-primary bg-primary text-primary-foreground",
                    correct && "border-[var(--green-ink)] bg-[var(--green-ink)] text-white",
                    wrong && "border-destructive bg-destructive text-white",
                  )}
                  aria-hidden="true"
                >
                  {correct ? (
                    <Check className="size-4" />
                  ) : wrong ? (
                    <X className="size-4" />
                  ) : (
                    letters[i]
                  )}
                </span>
                <span className="pt-0.5">{option}</span>
              </button>
            );
          })}
        </div>

        <div aria-live="polite">
          {checked && <Explanation item={current} level={level} chosen={answer} slug={slug} />}
        </div>

        {confirming && (
          <div className="rounded-lg border border-[var(--orange-ink)] bg-[var(--brand-orange-soft)] p-4 text-sm">
            <p className="font-semibold">
              {run.items.length - answered} soal belum dijawab. Kumpulkan sekarang?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button size="sm" onClick={() => onFinish(run)}>
                Kumpulkan
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => go(run.answers.findIndex((item) => item === undefined))}
              >
                Ke soal kosong
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() => go(run.index - 1)}
              disabled={run.index === 0}
            >
              <ArrowLeft aria-hidden="true" /> Sebelumnya
            </Button>
            {exam && (
              <Button
                variant="outline"
                size="lg"
                aria-pressed={run.flagged[run.index]}
                onClick={toggleFlag}
                className={cn(
                  run.flagged[run.index] && "border-[var(--orange-ink)] text-[var(--orange-ink)]",
                )}
              >
                <Flag aria-hidden="true" /> Ragu-ragu
              </Button>
            )}
          </div>
          {!exam && !checked ? (
            <Button size="lg" onClick={check} disabled={answer === undefined}>
              Periksa jawaban
            </Button>
          ) : (
            <Button size="lg" onClick={next}>
              {last ? (exam ? "Kumpulkan" : "Lihat hasil") : "Berikutnya"}
              <ArrowRight aria-hidden="true" />
            </Button>
          )}
        </div>
        <p className="hidden text-xs text-muted-foreground sm:block">
          Pintasan: A–D pilih jawaban · Enter {exam ? "lanjut" : "periksa/lanjut"} · ← → pindah soal
          {exam && " · R tandai ragu"}
        </p>
      </section>

      <aside className="rounded-xl border bg-card p-4 lg:sticky lg:top-5">
        <h2 className="mb-1 text-sm font-semibold">Navigasi soal</h2>
        <p className="mb-3 text-xs text-muted-foreground tabular-nums">
          {exam ? `${answered} dijawab` : `${run.checked.filter(Boolean).length} diperiksa`} dari{" "}
          {run.items.length}
        </p>
        <ol className="grid grid-cols-8 gap-1.5 sm:grid-cols-10 lg:grid-cols-5">
          {run.items.map((item, i) => {
            const state = status(i);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Soal ${i + 1}`}
                  aria-current={state === "current" ? "step" : undefined}
                  className={cn(
                    "flex aspect-square w-full items-center justify-center rounded-md border text-xs font-medium tabular-nums",
                    state === "current" && "border-primary ring-2 ring-primary",
                    state === "done" && "border-primary bg-primary text-primary-foreground",
                    state === "flag" &&
                      "border-[var(--orange-ink)] bg-[var(--brand-orange-soft)] text-[var(--orange-ink)]",
                    state === "right" &&
                      "border-[var(--green-ink)] bg-[var(--soft-green)] text-[var(--green-ink)]",
                    state === "wrong" &&
                      "border-destructive bg-[var(--error-soft)] text-destructive",
                  )}
                >
                  {i + 1}
                </button>
              </li>
            );
          })}
        </ol>
        <ul className="mt-3 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
          {exam ? (
            <>
              <Legend className="border-primary bg-primary">Dijawab</Legend>
              <Legend className="border-[var(--orange-ink)] bg-[var(--brand-orange-soft)]">
                Ragu
              </Legend>
              <Legend className="bg-background">Kosong</Legend>
            </>
          ) : (
            <>
              <Legend className="border-[var(--green-ink)] bg-[var(--soft-green)]">Benar</Legend>
              <Legend className="border-destructive bg-[var(--error-soft)]">Salah</Legend>
              <Legend className="bg-background">Belum</Legend>
            </>
          )}
        </ul>
        {exam && (
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={() => (answered < run.items.length ? setConfirming(true) : onFinish(run))}
          >
            Kumpulkan jawaban
          </Button>
        )}
      </aside>
    </div>
  );
}

function Legend({ className, children }: { className: string; children: ReactNode }) {
  return (
    <li className="flex items-center gap-1.5">
      <span className={cn("size-3 rounded-sm border", className)} aria-hidden="true" />
      {children}
    </li>
  );
}

function Explanation({
  item,
  level,
  chosen,
  slug,
}: {
  item: PracticeItem;
  level: UkpLevel;
  chosen?: number | undefined;
  slug?: string | undefined;
}) {
  const right = chosen === item.answer;
  const topic = slug ?? item.topicSlug;
  return (
    <div
      className={cn(
        "rounded-lg border-l-4 bg-muted p-4 text-sm leading-relaxed",
        right ? "border-l-[var(--green-ink)]" : "border-l-destructive",
      )}
    >
      <p className="flex items-center gap-1.5 font-semibold">
        {right ? (
          <Check className="size-4 text-[var(--green-ink)]" aria-hidden="true" />
        ) : (
          <CircleHelp className="size-4 text-destructive" aria-hidden="true" />
        )}
        {chosen === undefined ? "Tidak dijawab" : right ? "Jawaban benar" : "Jawaban belum tepat"}
      </p>
      {!right && (
        <p className="mt-1 font-medium">
          Jawaban benar: {letters[item.answer]}. {item.options[item.answer]}
        </p>
      )}
      <p className="mt-2">{item.explanation}</p>
      {item.originalSource ? (
        <p className="mt-2 text-xs text-muted-foreground">
          Kunci sumber {letters[item.answer]} · {item.originalSource.title} · hlm.{" "}
          {item.originalSource.page} · Soal {item.originalSource.number}
        </p>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">
          {item.legal && `${item.legal} · `}
          Booklet Tingkat {level.toUpperCase()}
          {item.bookletItem && ` · butir ${item.bookletItem}`} · hlm.{" "}
          {item.bookletPage ?? item.pages}
          {item.source && ` · pola soal: ${item.source}`}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {item.section && (
          <Link
            to="/ukp/$level/$topic/materi"
            params={{ level, topic }}
            hash={`bagian-${item.section}`}
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            Baca rangkuman: {item.sectionTitle ?? "bagian ini"}
          </Link>
        )}
        {item.legalSource && (
          <a
            href={item.legalSource.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary underline underline-offset-4"
          >
            {item.legalSource.label}
          </a>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- result */

function Result({
  run,
  level,
  slug,
  mixed,
  onRetryWrong,
  onAgain,
}: {
  run: Run;
  level: UkpLevel;
  slug?: string | undefined;
  mixed: boolean;
  onRetryWrong: (items: PracticeItem[]) => void;
  onAgain: () => void;
}) {
  const [filter, setFilter] = useState<"semua" | "salah" | "ragu">("salah");
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => heading.current?.focus(), []);
  const rows = run.items.map((item, i) => ({
    item,
    chosen: run.answers[i],
    right: run.answers[i] === item.answer,
    flagged: run.flagged[i],
  }));
  const correct = rows.filter((row) => row.right).length;
  const score = Math.round((correct / rows.length) * 100);
  const wrong = rows.filter((row) => !row.right);
  const seconds = Math.round((run.finishedAt! - run.startedAt) / 1000);
  const groups = useMemo(() => {
    const map = new Map<string, { label: string; right: number; total: number }>();
    for (const row of rows) {
      const key = mixed ? row.item.topic : (row.item.sectionTitle ?? "Drill hitung");
      const group = map.get(key) ?? { label: key, right: 0, total: 0 };
      group.total++;
      if (row.right) group.right++;
      map.set(key, group);
    }
    return [...map.values()].sort((a, b) => a.right / a.total - b.right / b.total);
  }, [rows, mixed]);
  const shown = rows.filter((row) =>
    filter === "semua" ? true : filter === "salah" ? !row.right : row.flagged,
  );
  const exam = run.mode === "simulasi";

  return (
    <div className="flex flex-col gap-5">
      <section className="grid gap-5 rounded-xl border bg-card p-5 sm:p-7 md:grid-cols-[auto_1fr]">
        <div
          className={cn(
            "flex size-32 flex-col items-center justify-center rounded-full border-8 tabular-nums",
            score >= passingGrade ? "border-[var(--green-ink)]" : "border-destructive",
          )}
        >
          <span className="text-3xl font-bold">{score}</span>
          <span className="text-xs text-muted-foreground">nilai</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h1
            ref={heading}
            tabIndex={-1}
            className="text-2xl font-bold tracking-tight outline-none sm:text-3xl"
          >
            {correct} dari {rows.length} jawaban benar
          </h1>
          <p className="text-sm text-muted-foreground tabular-nums">
            {exam &&
              (score >= passingGrade
                ? `Di atas batas lulus ${passingGrade}. `
                : `Belum mencapai batas lulus ${passingGrade}. `)}
            Waktu {clock(seconds)} · {rows.filter((row) => row.chosen === undefined).length} tidak
            dijawab
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button
              size="lg"
              onClick={() => onRetryWrong(wrong.map((row) => row.item))}
              disabled={!wrong.length}
            >
              <RotateCcw aria-hidden="true" /> Ulangi {wrong.length} soal salah
            </Button>
            <Button size="lg" variant="outline" onClick={onAgain}>
              Sesi baru
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/ukp/$level" params={{ level }}>
                Daftar topik
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border bg-card p-5 sm:p-6" aria-labelledby="ukp-breakdown">
        <h2 id="ukp-breakdown" className="mb-4 font-semibold">
          Hasil per {mixed ? "topik" : "bagian"} · terlemah di atas
        </h2>
        <ul className="flex flex-col gap-3">
          {groups.map((group) => {
            const pct = Math.round((group.right / group.total) * 100);
            return (
              <li
                key={group.label}
                className="grid gap-1.5 text-sm sm:grid-cols-[14rem_1fr_4rem] sm:items-center"
              >
                <span className="truncate">{group.label}</span>
                <span className="h-2 overflow-hidden rounded-full bg-muted">
                  <span
                    className={cn(
                      "block h-full",
                      pct >= passingGrade ? "bg-[var(--green-ink)]" : "bg-destructive",
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </span>
                <span className="text-muted-foreground tabular-nums sm:text-right">
                  {group.right}/{group.total}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-xl border bg-card" aria-labelledby="ukp-review">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4 sm:px-6">
          <h2 id="ukp-review" className="font-semibold">
            Pembahasan
          </h2>
          <div className="flex gap-1 rounded-lg bg-muted p-1 text-sm" role="tablist">
            {(
              [
                ["salah", `Salah (${wrong.length})`],
                ...(exam ? [["ragu", `Ragu (${rows.filter((r) => r.flagged).length})`]] : []),
                ["semua", `Semua (${rows.length})`],
              ] as [typeof filter, string][]
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                onClick={() => setFilter(id)}
                className={cn(
                  "rounded-md px-3 py-1.5",
                  filter === id && "bg-card font-semibold shadow-sm",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        {shown.length ? (
          <ol className="divide-y">
            {shown.map((row) => (
              <li key={row.item.id} className="p-4 sm:px-6">
                <p className="mb-2 font-semibold leading-relaxed">
                  {rows.indexOf(row) + 1}. {row.item.prompt}
                </p>
                {row.chosen !== undefined && !row.right && (
                  <p className="mb-2 text-sm text-destructive">
                    Jawabanmu: {letters[row.chosen]}. {row.item.options[row.chosen]}
                  </p>
                )}
                <Explanation item={row.item} level={level} chosen={row.chosen} slug={slug} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="p-6 text-sm text-muted-foreground">Tidak ada soal di daftar ini.</p>
        )}
      </section>
    </div>
  );
}
