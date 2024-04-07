'use client'
import styles from './StartButton.module.scss'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function StartButton({ children, examName }) {
    let { setExamInProgress, setIsTaken } = useContext(ProgressContext)

    function handleStart() {
        setExamInProgress(examName)
        // This is set so that the proper initialization after Done button behaves as intended
        setIsTaken(false)
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
