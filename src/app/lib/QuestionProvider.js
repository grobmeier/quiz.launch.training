'use client'

import { createContext, useState, useEffect } from 'react'
import { languagesExam } from '../exams-data/data.js'

/**
 * Note the dynamic array should be passed by the page / initial loading
 * of the question. TBD - temporary solution mimic the existing qtns for
 * inserting the answers
 */

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    // const getInitialState = () => {
    //     let progress = localStorage.getItem('currentIndex')
    //     return progress ? JSON.parse(progress) : 0
    // }

    const [currentIndex, setCurrentIndex] = useState(0)
    const allQtns = languagesExam.map((p) => p.id)
    const userTmpAnswers = languagesExam.map(({ id }) => ({
        id,
        calculatedPoints: 0,
        answered: [],
    }))

    const [userAnswers, setUserAnswers] = useState(userTmpAnswers)

    useEffect(() => {
        let progress = localStorage.getItem('currentIndex')
        let qtnsAnswers = localStorage.getItem('userAnswers')
        setCurrentIndex(JSON.parse(progress))
        setUserAnswers(JSON.parse(qtnsAnswers))
    }, [currentIndex])

    return (
        <ProgressContext.Provider
            value={{
                allQtns,
                currentIndex,
                setCurrentIndex,
                userAnswers,
                setUserAnswers,
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
