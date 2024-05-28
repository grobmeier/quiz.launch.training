'use client'

import styles from './Result.module.scss'
import { useEffect, useState } from 'react'
import { AllAnswers } from '@/app/ui/result/AllAnswers'
import { Storage, readJSON } from '@/app/lib/Storage.js'

export function ResultBox() {
    const userAnswers = readJSON(Storage.USER_ANSWERS);
    const examQuestions = readJSON(Storage.EXAM_QUESTIONS);

    const [showResult, setShowResult] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

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

    function showAnswers() {
        setShowResult(!showResult)
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.infoArea}>
                    <div>
                        <h3>Result</h3>
                        <p>Correct: </p>
                        <p>Wrong: </p>
                        <p>No answer: </p>
                    </div>
                    <div>
                        {isClient && (
                            <>
                                <h3>
                                    {correctAnswers} / {examQuestions.length}
                                </h3>
                                <p>{correctAnswers}</p>
                                <p>{incorrectAnswers}</p>
                                <p>{noAnswer}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.btnArea}>
                    <button className={styles.showBtn} onClick={showAnswers}>
                        Show answers
                    </button>
                </div>
            </main>
            {showResult && <AllAnswers />}
        </>
    )
}
