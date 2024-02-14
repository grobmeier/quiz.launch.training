'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useEffect } from 'react'

export function StartButton({ children, examName }) {
    const router = useRouter()
    let {
        userInitialAnswers,
        setExamInProgress,
        examInProgress,
        setIsTaken,
        isTaken,
        currentIndex,
    } = useContext(ProgressContext)

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
            localStorage.setItem('userAnswers', userInitialAnswers)
        typeof window !== 'undefined' &&
            localStorage.setItem('currentIndex', JSON.stringify(0))
        typeof window !== 'undefined' &&
            localStorage.setItem('examTaken', JSON.stringify(0))
        // setExamInProgress(examName)
    }, [examName])

    function handleStart() {
        setExamInProgress(examName)
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
