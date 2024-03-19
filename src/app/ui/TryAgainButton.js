'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function TryAgainButton() {
    let {
        setCurrentIndex,
        setExamInProgress,
        setIsTaken,
        isTaken,
        setSeenQtns,
    } = useContext(ProgressContext)

    function handleTryAgain() {
        localStorage.setItem('currentIndex', JSON.stringify(0))
        localStorage.setItem('examTaken', JSON.stringify(0))
        setExamInProgress('')
        localStorage.setItem('currentExam', '')
        setCurrentIndex(0)
        setSeenQtns(0)
        localStorage.setItem('allQtns', JSON.stringify([]))
        setIsTaken(!isTaken)
    }
    return (
        <button
            className={styles.showBtn}
            type="button"
            onClick={handleTryAgain}
        >
            Try Again
        </button>
    )
}
