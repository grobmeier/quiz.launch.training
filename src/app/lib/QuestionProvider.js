'use client'

import { createContext, useState } from 'react'

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    const [rightAnswers, setRightAnswers] = useState(0)

    return (
        <ProgressContext.Provider value={{ rightAnswers, setRightAnswers }}>
            {children}
        </ProgressContext.Provider>
    )
}
