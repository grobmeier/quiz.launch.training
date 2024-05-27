'use client'

/**
 * Note the userAnswers array should be passed in order to calculate
 * correct and wrong answers.
 */

import styles from './Result.module.scss'
import { useEffect, useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { AllAnswers } from '@/app/ui/result/AllAnswers'
import { Storage, read, put, remove } from '@/app/lib/Storage.js'

export function ResultBox() {
    let { allQtns } = useContext(ProgressContext)

    const tmpUserAnswers = read(Storage.USER_ANSWERS);

    const [showResult, setShowResult] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    let correctAnswers = 0
    let incorrectAnswers = 0
    let noAnswer = 0

    Array.isArray(tmpUserAnswers) &&
        tmpUserAnswers.map((qtn) => {
            if (qtn.calculatedPoints < 0.99) {
                if (!qtn.answered[0]) {
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
                        <p>Incorrect: </p>
                        <p>No answer: </p>
                    </div>
                    <div>
                        {isClient && (
                            <>
                                <h3>
                                    {correctAnswers} / {allQtns.length}
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
                        Show Answers
                    </button>
                </div>
            </main>
            {showResult && <AllAnswers />}
        </>
    )
}
