'use client'

/**
 * Note the dynamic array should be passed by the page / initial loading
 * of the question. TBD - temporary solution mimic the existing qtns for
 * inserting the answers
 */

import styles from './Result.module.css'
import { useEffect, useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'

export function ResultBox() {
    let {
        rightAnswers,
        setRightAnswers,
        allQtns,
        currentIndex,
        setCurrentIndex,
        userAnswers,
        setUserAnswers,
    } = useContext(ProgressContext)

    console.log('answers', userAnswers)

    let correctAnswers = 0
    let incorrectAnswers = 0
    let noAnswer = 0

    const estimatedResult = userAnswers.map((qtn) => {
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
        console.log('Trigger iframe')
    }

    return (
        <main className={styles.main}>
            <div className={styles.infoArea}>
                <div>
                    <h3>Result</h3>
                    <p>Correct: </p>
                    <p>Incorrect: </p>
                    <p>No answer: </p>
                </div>
                <div>
                    <h3>
                        {correctAnswers} / {allQtns.length}
                    </h3>
                    <p>{correctAnswers}</p>
                    <p>{incorrectAnswers}</p>
                    <p>{noAnswer}</p>
                </div>
            </div>
            <div>
                <button className={styles.nextBtn} onClick={showAnswers}>
                    Show Answers
                </button>
            </div>
        </main>
    )
}
