import styles from './exam.module.scss'
import { StartButton } from '@/app/ui/StartButton'

export function ExamMainScreen({ title, exam, fullDescription, startFn }) {
    return (
        <main className={styles.main}>
            <h1>{title}</h1>
            <div className={styles.examBox}>{fullDescription}</div>
            <StartButton examName={exam} startFn={startFn}>Start</StartButton>
        </main>
    )
}
