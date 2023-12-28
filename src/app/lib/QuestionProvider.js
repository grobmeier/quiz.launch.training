'use client'

import { createContext, useState } from 'react'
import { languagesExam } from '../exams-data/data.js'

/**
 * Note the dynamic array should be passed by the page / initial loading
 * of the question. TBD - temporary solution mimic the existing qtns for
 * inserting the answers
 */

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    const [rightAnswers, setRightAnswers] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const allQtns = languagesExam.map((p) => p.id)
    const userTmpAnswers = languagesExam.map(({ id }) => ({
        id,
        calculatedPoints: 0,
        answered: [],
    }))

    const [userAnswers, setUserAnswers] = useState(userTmpAnswers)
    console.log(userTmpAnswers)

    return (
        <ProgressContext.Provider
            value={{
                rightAnswers,
                setRightAnswers,
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
