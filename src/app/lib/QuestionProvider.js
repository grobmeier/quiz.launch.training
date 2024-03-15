'use client'

import { createContext, useState, useEffect } from 'react'
import { javaExam } from '../exams-data/java.js'
import { restExam } from '../exams-data/rest.js'
import { catalogue } from '../exams-data/catalogue.js'

import { shuffle } from '../lib/Functions.js'
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
    const [seenQtns, setSeenQtns] = useState(0)
    const [examInProgress, setExamInProgress] = useState('')
    const [isTaken, setIsTaken] = useState(false)
    // indicates in Result that the user arrived because time expired
    const [isTimerExpired, setIsTimerExpired] = useState(false)
    const maxQtns = 30
    let maxQtnsPerExam = 0

    const [allQtns, setAllQtns] = useState([])

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
            // provideInitialQtnsMatrix()
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
        // Sets the seen questions. Maximum index that has been reached
        // to be utilized in Results area
        if (currentIndex + 1 > seenQtns) {
            setSeenQtns(currentIndex + 1)
        }
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
                seenQtns,
                setSeenQtns,
                setAllQtns,
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
