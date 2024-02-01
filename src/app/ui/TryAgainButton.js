'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useState } from 'react'

export function TryAgainButton() {
    const router = useRouter()
    let {
        setCurrentIndex,
        userInitialAnswers,
        examInProgress,
        setIsTaken,
        isTaken,
    } = useContext(ProgressContext)

    function handleTryAgain() {
        // console.log(userInitialAnswers)
        localStorage.setItem('currentIndex', JSON.stringify(0))
        // localStorage.setItem('userAnswers', userInitialAnswers)
        localStorage.setItem('examTaken', JSON.stringify(0))
        setIsTaken(!isTaken)
        setCurrentIndex(0)
        router.push(`/exam-${examInProgress}`, { shallow: true })
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
