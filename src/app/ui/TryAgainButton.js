'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function TryAgainButton() {
    const router = useRouter()
    let {
        setCurrentIndex,
        setExamInProgress,
        setIsTaken,
        isTaken,
        userInitialAnswers,
    } = useContext(ProgressContext)

    function handleTryAgain() {
        // console.log(userInitialAnswers)
        localStorage.setItem('currentIndex', JSON.stringify(0))
        localStorage.setItem('examTaken', JSON.stringify(0))
        setIsTaken(!isTaken)
        setExamInProgress('')
        localStorage.setItem('currentExam', '')
        setCurrentIndex(0)
        // router.push(`/exams/${examInProgress}`, { shallow: true })
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
