'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useEffect } from 'react'

export function StartButton({ children, examName }) {
    const router = useRouter()
    let { userInitialAnswers, setExamInProgress } = useContext(ProgressContext)

    function handleStart() {
        setExamInProgress(examName)
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
