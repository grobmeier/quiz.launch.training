import styles from './exam.module.scss'
import { StartButton } from '@/app/ui/StartButton'

/**
 * This Component is responsible for displaying the exam details.
 * By start button it launches exam.
 */

export function ExamMainScreen({ title, rating, exam, fullDescription, startFn }) {
    return (
        <main className={styles.main}>
            <h1>{title}</h1>
            <div className={styles.examBox}>{fullDescription}</div>
            <StartButton examName={exam} startFn={startFn}>Start</StartButton>
        </main>
    )
}
