import styles from './exam.module.scss'
import { StartButton } from '@/app/ui/StartButton'
import { Rating } from '@smastrom/react-rating'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result
 *
 */

export function ExamMainScreen() {
    return (
        <main className={styles.main}>
            <h1>JAVA</h1>
            <div className={styles.topArea}>
                <div>Difficulty: </div>
                <div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        className={styles.stars}
                        value={4.5}
                        readOnly
                    />
                </div>
            </div>
            <div className={styles.examBox}>
                <p>
                    Programming languages are the backbone of the digital world,
                    serving as the communication bridge between humans and
                    computers. This topic delves into the fascinating realm of
                    programming languages, exploring their various types,
                    characteristics, and the key differences that set them
                    apart.
                </p>
            </div>
            <StartButton examName={'java'}> Start </StartButton>
        </main>
    )
}
