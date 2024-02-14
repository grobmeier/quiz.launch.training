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

    // Load all exams questions

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
        userTmpAnswers = JSON.stringify(javaTmpAnswers)
        allExamQtns = firstJavaQtns
    }
    if (Object.keys({ restExam })[0] === examName + 'Exam') {
        allQtns = allRestQtns
        userTmpAnswers = JSON.stringify(restTmpAnswers)
        allExamQtns = firstRestQtns
    }
    // if (Object.keys({ htmlExam })[0] === examName + 'Exam') {
    //     allQtns = allHtmlQtns
    //     userTmpAnswers = JSON.stringify(htmlTmpAnswers)
    // }

    // The variable below is needed for Try Again button, to keep a snapshot of the initial moment
    const [userInitialAnswers, setUserInitialAnswers] = useState(userTmpAnswers)
    const [userAnswers, setUserAnswers] = useState(userTmpAnswers)

    /**
     * Responsible for proper initial matrix based on exam value coming from Start Button
     * or from Try Again Button
     */
    useEffect(() => {
        // Is NOT triggered when under question dynamic path only outside
        let persistedExam = JSON.parse(localStorage.getItem('currentExam'))
        if (!persistedExam) {
            typeof window !== 'undefined' &&
                localStorage.setItem(
                    'currentExam',
                    JSON.stringify(examInProgress),
                )
        }
    }, [examInProgress])

    /**
     * Persist the state on refresh by checking the localstorage userAnswers value
     */

    useEffect(() => {
        let progress = localStorage.getItem('currentIndex')
        let qtnsAnswers = localStorage.getItem('userAnswers')
        setCurrentIndex(JSON.parse(progress))
        localStorage['userAnswers'] && setUserAnswers(JSON.parse(qtnsAnswers))
        //NOTE this is removed to properly load initial Screen - ExamMainScreen
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
                userInitialAnswers,
                examInProgress,
                setExamInProgress,
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
