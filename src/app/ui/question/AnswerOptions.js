import styles from './SingleOptionQuestion.module.scss';
import { INDEX_TO_CHARACTER } from '@/app/lib/Constants';

// Shared answer presentation; storage and scoring stay with the caller.
export function AnswerOptions({ answers, selected, completed, onSelect }) {
  return answers.map((item, index) => (
    <div className={styles.answerContainer} key={index}>
      <button onClick={(event) => onSelect(event, index)} disabled={completed} type="button"
        aria-pressed={selected.includes(item.text)}
        className={`${styles.container} ${selected.includes(item.text) ? styles.selectedBtn : ''}`}>
        <span>{INDEX_TO_CHARACTER[index]}</span><span>{item.text}</span>
      </button>
      {completed && item.correct && <span className={styles.correctIndicator} aria-label="Correct answer">&#x2B05;</span>}
    </div>
  ));
}
