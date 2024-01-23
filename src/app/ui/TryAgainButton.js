'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useState } from 'react'

export function TryAgainButton() {
    const router = useRouter()
    let { setCurrentIndex, userInitialAnswers } = useContext(ProgressContext)

    function handleTryAgain() {
        router.push(`/exam-java`, { shallow: true })
        localStorage.setItem('currentIndex', JSON.stringify(0))
        localStorage.setItem('examTaken', JSON.stringify(0))
        localStorage.setItem('userAnswers', userInitialAnswers)
        setCurrentIndex(0)
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
