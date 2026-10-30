"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Storage, readJSON, removeQuestionDeck } from "@/app/lib/Storage";
import { formatDate } from "@/app/lib/Functions";
import styles from "./learning.module.scss";

export function QuizActions({ exam, href }) {
  const [started, setStarted] = useState(null);
  useEffect(() => {
    try {
      const saved = readJSON(Storage.START_TIME, exam);
      setStarted(saved?.startTime ? formatDate(saved.startTime) : null);
    } catch {
      setStarted(null);
    }
  }, [exam]);
  function restart() {
    removeQuestionDeck(exam);
    setStarted(null);
  }
  return (
    <div className={styles.quizActions}>
      {started && <span>Started on {started}</span>}
      <div>
        {started && (
          <button
            type="button"
            onClick={restart}
            aria-label={`Restart ${exam} quiz`}
          >
            Restart
          </button>
        )}
        <Link href={href}>
          {started ? "Continue quiz" : "Open quiz"}{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
