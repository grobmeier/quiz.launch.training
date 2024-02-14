'use client'

import styles from './exam.module.scss'
import { javaExam } from '../../exams-data/java.js'
import { restExam } from '../../exams-data/rest.js'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { Question } from '@/app/ui/question/Question.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result.
 *
 */

export function ExamWrapper() {
    /**
     * Note the same functionality exists here and inside Provider.
     * That guarantees that the Parent Component has the data on initial load.
     */

    const pathname = usePathname()
    const maxQtns = 30
    let allQtns = []
    let allExamQtns = []
    let userTmpAnswers = ''
    let examName = ''

    if (pathname.includes('java')) {
        examName = 'java'
    }
    if (pathname.includes('rest')) {
        examName = 'rest'
    }

    const firstJavaQtns = javaExam.slice(0, maxQtns)
    const allJavaQtns = firstJavaQtns.map((p) => p.id)
    const javaTmpAnswers = firstJavaQtns.map(({ id }) => ({
        id: id,
        calculatedPoints: 0,
        answered: [],
    }))

    const firstRestQtns = restExam.slice(0, maxQtns)
    const allRestQtns = firstRestQtns.map((p) => p.id)
    const restTmpAnswers = firstRestQtns.map(({ id }) => ({
        id: id,
        calculatedPoints: 0,
        answered: [],
    }))

    if (Object.keys({ javaExam })[0] === examName + 'Exam') {
        allQtns = allJavaQtns
        userTmpAnswers = JSON.stringify(javaTmpAnswers)
        allExamQtns = firstJavaQtns
    }
    if (Object.keys({ restExam })[0] === examName + 'Exam') {
        allQtns = allRestQtns
        userTmpAnswers = JSON.stringify(restTmpAnswers)
        allExamQtns = firstRestQtns
    }

    // console.log(allExamQtns)

    let {
        userInitialAnswers,
        examInProgress,
        setIsTaken,
        setAllQtns,
        isTaken,
        currentIndex,
        setCurrentIndex,
    } = useContext(ProgressContext)
    // console.log(examInProgress)

    /**
     * This initialisation, together with Provider make sure the initial values are properly set
     */

    useEffect(() => {
        // Check if there is exam in progress, if one is found in the localstorage no effect
        let persistedExam = JSON.parse(localStorage.getItem('currentExam'))
        if (persistedExam !== '') {
            return
        }
        typeof window !== 'undefined' &&
            localStorage.setItem('userAnswers', userTmpAnswers)
        typeof window !== 'undefined' &&
            localStorage.setItem('currentIndex', JSON.stringify(0))
        typeof window !== 'undefined' &&
            localStorage.setItem('examTaken', JSON.stringify(0))
        // setAllQtns(allQtns)
        console.log(allQtns)
        setCurrentIndex(0)
    }, [])

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
                    <Question questionInfo={allExamQtns[currentIndex]} />
                )}
            </main>
        )
    }
}
