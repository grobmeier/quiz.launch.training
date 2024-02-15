import styles from './exam.module.scss'
import { StartButton } from '@/app/ui/StartButton'
import { Rating } from '@smastrom/react-rating'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result
 *
 */

export function ExamMainScreen({ title, rating, exam, fullDescription }) {
    return (
        <main className={styles.main}>
            <h1> {title}</h1>
            <div className={styles.topArea}>
                <div>Difficulty: </div>
                <div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        className={styles.stars}
                        value={rating}
                        readOnly
                    />
                </div>
            </div>
            <div className={styles.examBox}>{fullDescription}</div>
            <StartButton examName={exam}> Start </StartButton>
        </main>
    )
}
