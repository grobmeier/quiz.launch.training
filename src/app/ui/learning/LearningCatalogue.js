"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { filterActivities } from "@/app/lib/LearningCatalogue.mjs";
import { QuizActions } from "./QuizActions";
import styles from "./learning.module.scss";

export function LearningCatalogue({ activities, initialFormat = "all" }) {
  const [format, setFormat] = useState(initialFormat);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const visible = filterActivities(activities, format, query);
  return (
    <section
      className={styles.catalogue}
      id="catalogue"
      aria-labelledby="catalogue-title"
    >
      <div className={styles.catalogueHeading}>
        <div>
          <p className={styles.eyebrow}>Explore the material</p>
          <h2 id="catalogue-title">What would you like to practise?</h2>
        </div>
        <label className={styles.search}>
          <span>Find a topic</span>
          <input
            ref={searchRef}
            type="search"
            placeholder="Try Java, messaging or Spring…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className={styles.controls}>
        <div
          className={styles.filters}
          role="group"
          aria-label="Learning format"
        >
          {[
            ["all", "All"],
            ["labs", "Labs"],
            ["quizzes", "Quizzes"],
          ].map(([value, label]) => (
            <button
              type="button"
              key={value}
              aria-pressed={format === value}
              onClick={() => setFormat(value)}
            >
              {label}{" "}
              <span>
                {
                  activities.filter(
                    (item) => value === "all" || item.kind === value,
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
        <p role="status">
          {visible.length} learning{" "}
          {visible.length === 1 ? "activity" : "activities"}
        </p>
      </div>
      <div className={styles.activityGrid}>
        {visible.map((item) => (
          <article
            className={`${styles.activityCard} ${item.kind === "labs" ? styles.labCard : ""}`}
            key={item.id}
          >
            <p className={styles.activityType}>
              {item.kind === "labs" ? "Guided lab" : "Quiz"}{" "}
              <span>· {item.topic}</span>
            </p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.kind === "labs" ? (
              <>
                <div className={styles.cardTags}>
                  <span>3 stations</span>
                  <span>JDK 21</span>
                </div>
                <Link className={styles.cardLink} href={item.href}>
                  Explore lab <span aria-hidden="true">→</span>
                </Link>
              </>
            ) : (
              <QuizActions exam={item.id} href={item.href} />
            )}
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className={styles.noResults}>
          <h3>No activity matches that search.</h3>
          <p>Try another topic or show all learning material.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFormat("all");
              searchRef.current?.focus();
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
