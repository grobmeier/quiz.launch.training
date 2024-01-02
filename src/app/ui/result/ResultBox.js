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

    return (
        <main className={styles.main}>
            <h3>Results Page Inner</h3>
            <p>correct: {correctAnswers}</p>
            <p>incorrect: {incorrectAnswers}</p>
            <p>unanswered: {noAnswer}</p>
        </main>
    )
}
