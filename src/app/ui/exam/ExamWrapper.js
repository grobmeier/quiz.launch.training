'use client'

import styles from './exam.module.scss'
import { StartButton } from '@/app/ui/StartButton'
import { Rating } from '@smastrom/react-rating'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { Question } from '@/app/ui/question/Question.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { useContext, useEffect } from 'react'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result.
 *
 */

export function ExamWrapper() {
    let {
        userInitialAnswers,
        examInProgress,
        setIsTaken,
        isTaken,
        fullExam,
        currentIndex,
    } = useContext(ProgressContext)
    // console.log(examInProgress)

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient && examInProgress === '') {
        return <ExamMainScreen />
    } else {
        if (isTaken) {
            return (
                <main className={styles.main}>
                    <h3>Congratulations</h3>
                    <ResultBox />
                    <div className={styles.btnsArea}>
                        <TryAgainButton />
                        <DoneButton />
                    </div>
                </main>
            )
        }
        return (
            <main className={styles.main}>
                {!isClient ? (
                    <div>Loading ....</div>
                ) : (
                    <Question questionInfo={fullExam[currentIndex]} />
                )}
            </main>
        )
    }
}
