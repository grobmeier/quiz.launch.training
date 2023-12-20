'use client'

import { createContext, useState } from 'react'
import { languagesExam } from '../exams-data/data.js'

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    const [rightAnswers, setRightAnswers] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const allQtns = languagesExam.map((p) => p.id)

    return (
        <ProgressContext.Provider
            value={{
                rightAnswers,
                setRightAnswers,
                allQtns,
                currentIndex,
                setCurrentIndex,
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
