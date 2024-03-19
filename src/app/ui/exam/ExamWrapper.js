'use client'

import styles from './exam.module.scss'
import { javaExam } from '../../exams-data/java.js'
import { restExam } from '../../exams-data/rest.js'
import { catalogue } from '../../exams-data/catalogue.js'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { Question } from '@/app/ui/question/Question.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { shuffle, searchMatchingIds } from '@/app/lib/Functions.js'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result.
 *
 */

export function ExamWrapper() {
    let { setAllQtns, allQtns } = useContext(ProgressContext)

    /**
     * Initalization happens here and allQtns is passed to the Provider.
     * That guarantees that the Parent Component has the data on initial load.
     */

    const pathname = usePathname()
    let maxQtnsPerExam = 0

    let examName = ''

    if (pathname.includes('java')) {
        examName = 'java'
    }
    if (pathname.includes('rest')) {
        examName = 'rest'
    }

    const [allExamQtns, setAllExamQtns] = useState([])
    let userTmpAnswers = ''

    function provideInitialQtnsMatrix() {
        // Load all exams questions
        let examToCheck = catalogue.filter((i) => i.exam.includes(examName))
        maxQtnsPerExam = examToCheck[0].maxQuestions

        // Prepare the random qtns for each exam
        let randomizedJavaExam = shuffle(javaExam)
        let randomizedRestExam = shuffle(restExam)

        // console.log(randomizedJavaExam)

        const firstJavaQtns = randomizedJavaExam.slice(0, maxQtnsPerExam)
        const allJavaQtns = firstJavaQtns.map((p) => p.id)

        const firstRestQtns = randomizedRestExam.slice(0, maxQtnsPerExam)
        const allRestQtns = firstRestQtns.map((p) => p.id)

        /**
         * Load all Qtsn and matrix of the calculated answers based on the currentExam
         * value (Java / HTML) form localstorage.
         * */

        if (examName === 'java') {
            setAllQtns(allJavaQtns)
        }
        if (examName === 'rest') {
            setAllQtns(allRestQtns)
        }
    }

    const filteredExam = catalogue.filter((item) => item.exam === examName)
    // console.log(filteredExam[0].exam)
    let {
        examInProgress,
        isTaken,
        currentIndex,
        setCurrentIndex,
        isTimerExpired,
        setIsTimerExpired,
        setUserAnswers,
    } = useContext(ProgressContext)
    // console.log(examInProgress)

    /**
     * This initialisation, together with Provider make sure the initial values are properly set
     */

    useEffect(() => {
        // Check if AllQtns are present, that is the trigger to provide inital values for localstorage
        let persistedQtns =
            typeof window !== 'undefined' &&
            localStorage['allQtns'] &&
            JSON.parse(localStorage.getItem('allQtns')).length > 0
        if (!persistedQtns) {
            console.log(allQtns.length + 'BEFORE')
            provideInitialQtnsMatrix()
        }
    }, [isTaken])

    useEffect(() => {
        // Check if there is exam in progress, if one is found in the localstorage no effect
        let persistedExam =
            localStorage['currentExam'] &&
            JSON.parse(localStorage.getItem('currentExam'))
        if (persistedExam !== '') {
            return
        }
        typeof window !== 'undefined' &&
            localStorage.setItem('currentIndex', JSON.stringify(0))
        typeof window !== 'undefined' &&
            localStorage.setItem('examTaken', JSON.stringify(0))
        setIsTimerExpired(false)
        setCurrentIndex(0)
    }, [examInProgress])

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        /**
         * Here we update the inital Matrix according to the most recent allQtns
         */
        let persistedQtns =
            typeof window !== 'undefined' &&
            localStorage['currentExam'] &&
            JSON.parse(localStorage.getItem('currentExam')) !== ''
        // During the exam allExamQtns is kept in localstorage. Values are taken from there
        if (persistedQtns) {
            let persistedAllExamQtns =
                typeof window !== 'undefined' && localStorage['allExamQtns']
            setAllExamQtns(JSON.parse(persistedAllExamQtns))
        }
        if (examName === 'java' && !persistedQtns) {
            let tmpAllExamQtns = searchMatchingIds(javaExam, allQtns)
            setAllExamQtns(tmpAllExamQtns)
            typeof window !== 'undefined' &&
                localStorage.setItem(
                    'allExamQtns',
                    JSON.stringify(tmpAllExamQtns),
                )
            const javaTmpAnswers = allQtns.map((id) => ({
                id: id,
                calculatedPoints: 0,
                answered: [],
            }))
            userTmpAnswers = JSON.stringify(javaTmpAnswers)
            // setUserAnswers(userTmpAnswers)
            typeof window !== 'undefined' &&
                localStorage.setItem('userAnswers', userTmpAnswers)
            typeof window !== 'undefined' &&
                localStorage.setItem('allQtns', JSON.stringify(allQtns))
        }
        if (examName === 'rest' && !persistedQtns) {
            let tmpAllExamQtns = searchMatchingIds(restExam, allQtns)
            setAllExamQtns(tmpAllExamQtns)
            typeof window !== 'undefined' &&
                localStorage.setItem(
                    'allExamQtns',
                    JSON.stringify(tmpAllExamQtns),
                )
            const restTmpAnswers = allQtns.map((id) => ({
                id: id,
                calculatedPoints: 0,
                answered: [],
            }))
            userTmpAnswers = JSON.stringify(restTmpAnswers)
            // setUserAnswers(userTmpAnswers)
            typeof window !== 'undefined' &&
                localStorage.setItem('userAnswers', userTmpAnswers)
            typeof window !== 'undefined' &&
                localStorage.setItem('allQtns', JSON.stringify(allQtns))
        }
        console.log(allQtns.length + 'AFTER')
    }, [allQtns])

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient && examInProgress === '') {
        return (
            <>
                <h3>{filteredExam.title}</h3>
                <ExamMainScreen
                    title={filteredExam[0].title}
                    rating={filteredExam[0].rating}
                    exam={filteredExam[0].exam}
                    fullDescription={filteredExam[0].fullDescription}
                />
            </>
        )
    } else {
        if (isTaken) {
            return (
                <main className={styles.main}>
                    {!isTimerExpired ? (
                        <h3>Congratulations</h3>
                    ) : (
                        <h3>Your time was up - here are your results</h3>
                    )}
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
                {!isClient | !allExamQtns ? (
                    <div>Loading ....</div>
                ) : (
                    <Question
                        questionInfo={
                            allExamQtns &&
                            allExamQtns.length &&
                            allExamQtns[currentIndex]
                        }
                    />
                )}
            </main>
        )
    }
}
