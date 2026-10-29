'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { commandText, labRoot } from '../content/lab.mjs';
import { AnswerOptions } from '@/app/ui/question/AnswerOptions';
import styles from './labs.module.scss';

const PlatformContext = createContext({ platform: 'windows', setPlatform: () => {} });
const preferenceKey = 'launch-training-labs-platform';
export function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState('windows');
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(preferenceKey);
      if (saved === 'unix') setPlatform(saved);
    } catch { /* Storage may be unavailable; commands still work. */ }
  }, []);
  function choose(value) {
    setPlatform(value);
    try { sessionStorage.setItem(preferenceKey, value); } catch { /* Session-only preference. */ }
  }
  return <PlatformContext.Provider value={{ platform, setPlatform: choose }}>{children}</PlatformContext.Provider>;
}
export function PlatformPicker() {
  const { platform, setPlatform } = useContext(PlatformContext);
  return <div className={styles.platform} data-no-print>
    <label htmlFor="lab-platform">Command platform</label>
    <select id="lab-platform" value={platform} onChange={(e) => setPlatform(e.target.value)}>
      <option value="windows">Windows · cmd.exe</option>
      <option value="unix">Linux / macOS · shell</option>
    </select>
    <span>Kept for this browser session. No learning progress is saved.</span>
  </div>;
}
export function CommandStep({ step }) {
  const { platform } = useContext(PlatformContext);
  const [copyState, setCopyState] = useState('');
  const text = commandText(step, platform);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState('Commands copied.');
    } catch { setCopyState('Copy unavailable. Select and copy the command text below.'); }
  }
  return <section className={styles.step} aria-labelledby={step.id}>
    <div className={styles.terminal}>{step.terminal}</div>
    <h3 id={step.id}>{step.title}</h3>
    <p className={styles.directory}>{step.directory || labRoot}</p>
    <p>{step.instruction}</p>
    {text && <>
      <div className={styles.copyRow} data-no-print>
        <button type="button" onClick={copy} aria-label={`Copy commands: ${step.title}`}>Copy commands</button>
        <span role="status">{copyState}</span>
      </div>
      <pre tabIndex={0} aria-label={`${step.terminal} commands`}><code>{text}</code></pre>
    </>}
    <p className={styles.evidence}><strong>Observe:</strong> {step.evidence}</p>
  </section>;
}
export function SelfCheck({ question }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  return <form className={styles.check} onSubmit={(e) => { e.preventDefault(); if (selected !== null) setAnswered(true); }}>
    <fieldset>
      <legend>{question.text}</legend>
      <AnswerOptions answers={question.answers} selected={selected === null ? [] : [question.answers[selected].text]}
        completed={answered} onSelect={(_, index) => setSelected(index)} />
    </fieldset>
    {!answered && <button type="submit" disabled={selected === null}>Check answer</button>}
    <div role="status">{answered && <p className={styles.evidence}>
      <strong>{question.answers[selected].correct ? 'Correct. ' : 'Try the explanation. '}</strong>{question.explanation}
    </p>}</div>
    {answered && <button type="button" onClick={() => { setSelected(null); setAnswered(false); }}>Try again</button>}
  </form>;
}
export function PrintButton() {
  return <button type="button" onClick={() => window.print()} data-no-print>Print learning pages</button>;
}
