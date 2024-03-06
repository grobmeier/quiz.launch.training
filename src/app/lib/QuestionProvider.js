'use client'

import { createContext, useState, useEffect } from 'react'
import { javaExam } from '../exams-data/java.js'
import { restExam } from '../exams-data/rest.js'
// import { htmlExam } from '../exams-data/html.js'
import { usePathname } from 'next/navigation'

/**
 * Note the dynamic array should be passed by the page / initial loading
 * of the question. TBD - temporary solution mimic the existing qtns for
 * inserting the answers. May come from database
 */

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    const pathname = usePathname()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [examInProgress, setExamInProgress] = useState('')
    const [isTaken, setIsTaken] = useState(false)
    // indicates in Result that the user arrived because time expired
    const [isTimerExpired, setIsTimerExpired] = useState(false)
    const maxQtns = 30
    let allQtns = []

    let examName = ''
    if (pathname.includes('java')) {
        examName = 'java'
    }
    if (pathname.includes('rest')) {
        examName = 'rest'
    }

    // Load all exams questions

    const firstJavaQtns = javaExam.slice(0, maxQtns)
    const allJavaQtns = firstJavaQtns.map((p) => p.id)

    const firstRestQtns = restExam.slice(0, maxQtns)
    const allRestQtns = firstRestQtns.map((p) => p.id)

    // const firstHtmlQtns = htmlExam.slice(0, maxQtns)
    // const allHtmlQtns = firstHtmlQtns.map((p) => p.id)
    // const htmlTmpAnswers = firstHtmlQtns.map(({ id }) => ({
    //     id: 'html-' + id,
    //     calculatedPoints: 0,
    //     answered: [],
    // }))

    /**
     * Load all Qtsn and matrix of the calculated answers based on the currentExam
     * value (Java / HTML) form localstorage.
     * */

    if (Object.keys({ javaExam })[0] === examName + 'Exam') {
        allQtns = allJavaQtns
    }
    if (Object.keys({ restExam })[0] === examName + 'Exam') {
        allQtns = allRestQtns
    }
    // if (Object.keys({ htmlExam })[0] === examName + 'Exam') {
    //     allQtns = allHtmlQtns
    //     userTmpAnswers = JSON.stringify(htmlTmpAnswers)
    // }

    // The variable below is crucial - it holds the real answers at any given moment
    const [userAnswers, setUserAnswers] = useState('')

    /**
     * Triggered from Start Button, it updates the localstorage
     * in order to indicate that the exam is ongoing
     */
    useEffect(() => {
        // Is NOT triggered when current exam is ongoing
        let persistedExam =
            localStorage['currentExam'] &&
            JSON.parse(localStorage.getItem('currentExam'))
        if (!persistedExam) {
            typeof window !== 'undefined' &&
                localStorage.setItem(
                    'currentExam',
                    JSON.stringify(examInProgress),
                )
        }
    }, [examInProgress])

    /**
     * Persist the state on refresh by checking the localstorage userAnswers value,
     * the index and ongoing exam
     */

    useEffect(() => {
        let progress = localStorage.getItem('currentIndex')
        let qtnsAnswers = localStorage.getItem('userAnswers')
        setCurrentIndex(JSON.parse(progress))
        localStorage['userAnswers'] && setUserAnswers(JSON.parse(qtnsAnswers))
        let persistedExam = localStorage.getItem('currentExam')
        setExamInProgress(JSON.parse(persistedExam))
    }, [currentIndex])

    return (
        <ProgressContext.Provider
            value={{
                allQtns,
                currentIndex,
                setCurrentIndex,
                userAnswers,
                setUserAnswers,
                isTaken,
                setIsTaken,
                examInProgress,
                setExamInProgress,
                isTimerExpired,
                setIsTimerExpired,
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
