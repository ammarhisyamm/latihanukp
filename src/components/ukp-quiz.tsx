import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { UkpLevel } from "@/lib/ukp";
import {
  dueQuestions,
  loadReview,
  pickQuestions,
  questionKey,
  recordAnswer,
  rememberQuestion,
  shuffled,
  type PracticeItem,
} from "@/lib/ukp-practice";

type PracticeQuestion = Omit<PracticeItem, "options"> & { options: string[] };

export function UkpQuiz({
  level,
  title,
  questions,
  slug,
}: {
  level: UkpLevel;
  slug?: string;
  title: string;
  questions: PracticeItem[];
}) {
  const [session, setSession] = useState<PracticeQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState<number[]>([]);
  const focusHeading = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const total = session.length;
  const current = session[index];
  const key = current ? questionKey(current) : undefined;
  const [review, setReview] = useState<ReturnType<typeof loadReview>>({});
  const [bookletItem, setBookletItem] = useState("");
  const checked = answers.length > index;
  const score = answers.filter((answer, i) => answer === session[i]?.answer).length;

  useEffect(() => {
    if (focusHeading.current) {
      heading.current?.focus();
      focusHeading.current = false;
    }
  }, [index, session]);

  useEffect(() => {
    if (key) rememberQuestion(key);
  }, [key]);

  useEffect(() => {
    setReview(loadReview(level));
  }, [level]);

  function move(next: number) {
    focusHeading.current = true;
    setSelected("");
    setIndex(next);
  }

  const cases = questions.filter((item) => item.caseStudy);
  const tryout = questions.filter((item) => item.tryoutSource);
  const calculations = questions.filter(
    (item) => item.family && (!bookletItem || item.bookletItem === bookletItem),
  );
  const items = [...new Set(questions.flatMap((item) => item.bookletItem ?? []))];
  const due = dueQuestions(questions, review, questions.length);
  const mastered = questions.filter((item) => review[questionKey(item)]?.streak === 3).length;
  const attempted = questions.filter((item) => review[questionKey(item)]).length;
  const dueByTopic = new Map<string, number>();
  for (const item of due) dueByTopic.set(item.topic, (dueByTopic.get(item.topic) ?? 0) + 1);
  const nextTopic = [...dueByTopic].sort((a, b) => b[1] - a[1])[0];
  const [mode, setMode] = useState<
    "quick" | "all" | "case" | "extended" | "review" | "calculation" | "tryout"
  >("quick");

  function start(nextMode: typeof mode) {
    const pool =
      nextMode === "case"
        ? cases
        : nextMode === "calculation"
          ? calculations
          : nextMode === "tryout"
            ? tryout
            : questions;
    const selectedQuestions =
      nextMode === "review" ? dueQuestions(questions, loadReview(level), 10) : undefined;
    if (selectedQuestions && !selectedQuestions.length) {
      setSession([]);
      setReview(loadReview(level));
      return;
    }
    const size =
      nextMode === "quick"
        ? slug
          ? 5
          : 10
        : nextMode === "extended"
          ? 20
          : nextMode === "calculation"
            ? 10
            : pool.length;
    setMode(nextMode);
    setSession(
      (selectedQuestions ?? pickQuestions(pool, size, !slug)).map((item) => {
        const options = shuffled(item.options);
        return { ...item, options, answer: options.indexOf(item.options[item.answer]!) };
      }),
    );
    setAnswers([]);
    move(0);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <Button variant="ghost" asChild className="self-start">
        {slug ? (
          <Link to="/ukp/$level/$topic/materi" params={{ level, topic: slug }}>
            <ArrowLeft aria-hidden="true" /> Buka rangkuman
          </Link>
        ) : (
          <Link to="/ukp/$level" params={{ level }}>
            <ArrowLeft aria-hidden="true" /> Daftar topik
          </Link>
        )}
      </Button>
      <header>
        <p className="mb-2 text-sm font-medium text-primary">
          Latihan Tingkat {level.toUpperCase()}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      </header>
      {!total ? (
        <section className="rounded-xl border bg-card p-4 sm:p-7" aria-labelledby="ukp-session">
          <h2 id="ukp-session" ref={heading} tabIndex={-1} className="text-xl font-semibold">
            Pilih jumlah soal
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Soal yang belum kamu lihat di browser ini diprioritaskan. Pilihan jawaban diacak setiap
            sesi.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => start("quick")}>
              {slug ? "Latihan cepat · 5 soal" : "Latihan campuran · 10 soal"}
            </Button>
            {slug ? (
              <>
                <Button size="lg" variant="outline" onClick={() => start("all")}>
                  Semua soal · {questions.length} soal
                </Button>
                <Button size="lg" variant="outline" onClick={() => start("case")}>
                  Latihan kasus · {cases.length} soal
                </Button>
              </>
            ) : (
              <Button size="lg" variant="outline" onClick={() => start("extended")}>
                Latihan campuran · 20 soal
              </Button>
            )}
          </div>
          {tryout.length > 0 && (
            <Button size="lg" className="mt-3" variant="outline" onClick={() => start("tryout")}>
              Adaptasi tryout · {tryout.length} soal
            </Button>
          )}
          <div className="mt-5 border-t pt-5">
            <h3 className="font-semibold">Hafalan dan hitungan</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {due.length} perlu diulang · {mastered} dari {questions.length} soal benar dalam 3
              sesi terjadwal. Jawaban salah bisa langsung diulang. Jawaban benar dijadwalkan lagi
              setelah 1, 3, lalu 7 hari.
            </p>
            {!slug && nextTopic && (
              <p className="mt-2 text-sm text-muted-foreground">
                Paling banyak perlu diulang: {nextTopic[0]} ({nextTopic[1]} soal).
              </p>
            )}
            {slug && items.length > 0 && (
              <label className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                Butir booklet untuk latihan hitungan
                <select
                  value={bookletItem}
                  onChange={(event) => setBookletItem(event.target.value)}
                  className="rounded-md border bg-card px-2 py-2"
                >
                  <option value="">Semua butir yang tersedia</option>
                  {items.map((item) => (
                    <option key={item} value={item}>
                      Butir {item}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                size="lg"
                variant="outline"
                disabled={!due.length}
                onClick={() => start("review")}
              >
                Ulang soal jatuh tempo
              </Button>
              <Button
                size="lg"
                variant="outline"
                disabled={!calculations.length}
                onClick={() => start("calculation")}
              >
                Latihan hitungan · 10 soal
              </Button>
            </div>
          </div>
          <Link
            to="/ukp/rujukan"
            className="mt-5 inline-block text-sm text-primary underline underline-offset-4"
          >
            Lihat rujukan latihan
          </Link>
        </section>
      ) : current ? (
        <section className="rounded-xl border bg-card p-4 sm:p-7" aria-labelledby="ukp-question">
          <p className="mb-2 text-sm tabular-nums text-muted-foreground">
            Soal {index + 1} dari {total}
            {!slug && ` · ${current.topic}`}
            {current.caseStudy && " · Kasus"}
            {current.family && " · Variasi hitungan"}
          </p>
          <Progress aria-label="Soal yang sudah diperiksa" value={(answers.length / total) * 100} />
          <h2
            id="ukp-question"
            ref={heading}
            tabIndex={-1}
            className="my-5 text-lg leading-relaxed font-semibold"
          >
            {current.prompt}
          </h2>
          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            disabled={checked}
            aria-labelledby="ukp-question"
          >
            {current.options.map((option, optionIndex) => (
              <label
                key={option}
                className="flex min-h-12 items-center gap-3 rounded-lg border px-3 py-2.5 text-sm leading-relaxed has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 has-[:enabled]:cursor-pointer"
              >
                <RadioGroupItem value={String(optionIndex)} />
                <span>{option}</span>
              </label>
            ))}
          </RadioGroup>
          <div aria-live="polite">
            {checked && (
              <div className="mt-5 rounded-lg bg-muted p-4 text-sm leading-relaxed">
                <p className="font-semibold">
                  {answers[index] === current.answer ? "Jawaban benar" : "Jawaban belum tepat"}
                </p>
                {answers[index] !== current.answer && (
                  <p className="mt-1 font-medium">
                    Jawaban benar: {current.options[current.answer]}
                  </p>
                )}
                <p className="mt-1">{current.explanation}</p>
                <p className="mt-2 text-muted-foreground">
                  Booklet Tingkat {level.toUpperCase()} ·{" "}
                  {current.bookletItem && `Butir ${current.bookletItem} · `}hlm.{" "}
                  {current.bookletPage ?? current.pages}
                </p>
                {current.tryoutSource && (
                  <p className="mt-1 text-muted-foreground">
                    Pola soal: {current.tryoutSource.title} · hlm. {current.tryoutSource.page}
                  </p>
                )}
                {current.legalSource && (
                  <a
                    href={current.legalSource.href}
                    className="mt-1 inline-block text-primary underline"
                  >
                    {current.legalSource.label}
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="mt-5 flex justify-end">
            {checked ? (
              <Button size="lg" onClick={() => move(index + 1)}>
                {index + 1 === total ? "Lihat hasil" : "Soal berikutnya"}{" "}
                <ArrowRight aria-hidden="true" />
              </Button>
            ) : (
              <Button
                size="lg"
                disabled={selected === ""}
                onClick={() => {
                  const answer = Number(selected);
                  setAnswers([...answers, answer]);
                  setReview(recordAnswer(level, current, answer === current.answer));
                }}
              >
                Periksa jawaban
              </Button>
            )}
          </div>
        </section>
      ) : (
        <section className="rounded-xl border bg-card p-4 sm:p-7" aria-labelledby="ukp-result">
          <h2 id="ukp-result" ref={heading} tabIndex={-1} className="text-2xl font-bold">
            {score} dari {total} jawaban benar
          </h2>
          <ol className="mt-5 divide-y border-y">
            {session.map((item, i) => (
              <li key={item.prompt} className="py-4 text-sm leading-relaxed">
                <p className="font-semibold">
                  {i + 1}. {item.prompt}
                </p>
                <p className="mt-1 text-muted-foreground">
                  Jawabanmu: {item.options[answers[i]!]} (
                  {answers[i] === item.answer ? "benar" : "belum tepat"})
                </p>
                {answers[i] !== item.answer && <p>Jawaban benar: {item.options[item.answer]}</p>}
                <p className="mt-2">{item.explanation}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => {
                start(mode);
              }}
            >
              <RotateCcw aria-hidden="true" />{" "}
              {mode === "quick" || mode === "extended" || mode === "calculation"
                ? "Ambil set berikutnya"
                : "Ulangi latihan"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => start("review")}
              disabled={!due.length}
            >
              Ulang soal jatuh tempo · {due.length}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setSession([]);
                setAnswers([]);
                move(0);
              }}
            >
              Pilih mode lain
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/ukp/$level" params={{ level }}>
                Pilih topik lain
              </Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
