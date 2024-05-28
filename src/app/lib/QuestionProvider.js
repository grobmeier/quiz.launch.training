'use client'

import { createContext, useState, useEffect } from 'react'

/**
 * Note the dynamic array - userAnswers should be passed on the initial loading
 * of the questions. The temporary solution mimics the existing qtns for
 * inserting the answers.TBD May come from database
 */

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [seenQtns, setSeenQtns] = useState(0)
    const [examInProgress, setExamInProgress] = useState('')
    const [isTaken, setIsTaken] = useState(false)
    // indicates in Result that the user arrived because time expired
    const [isTimerExpired, setIsTimerExpired] = useState(false)
    // The variable below is crucial - it holds the real answers at any given moment
    const [userAnswers, setUserAnswers] = useState('')

    
    return (
        <ProgressContext.Provider
            value={{
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
                setSeenQtns
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
