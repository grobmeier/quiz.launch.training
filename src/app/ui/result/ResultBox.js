'use client'

import styles from './Result.module.scss'
import { Storage, readJSON } from '@/app/lib/Storage.js'

export function ResultBox({examName}) {
    const userAnswers = readJSON(Storage.USER_ANSWERS, examName);
    const examQuestions = readJSON(Storage.EXAM_QUESTIONS, examName);

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let noAnswer = 0;

    Array.isArray(userAnswers) &&
        userAnswers.map((question) => {
            if (question.calculatedPoints < 0.99) {
                if (!question.answered[0]) {
                    noAnswer += 1
                } else {
                    incorrectAnswers += 1
                }
            } else {
                correctAnswers += 1
            }
        })

    return (
        <>
            <main className={styles.main}>
                <div className={styles.infoArea}>
                    <div>
                        <h3>Result</h3>
                        <p>Correct: </p>
                        <p>Almost correct: </p>
                        <p>No answer: </p>
                    </div>
                    <div>
                        <h3>
                            {correctAnswers} / {examQuestions.length}
                        </h3>
                        <p>{correctAnswers}</p>
                        <p>{incorrectAnswers}</p>
                        <p>{noAnswer}</p>
                    </div>
                </div>
            </main>

        </>
    )
}
