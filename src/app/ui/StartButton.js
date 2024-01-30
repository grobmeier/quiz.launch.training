'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useState } from 'react'

export function StartButton({ children, examName, variant }) {
    const router = useRouter()
    // let { setCurrentIndex, userInitialAnswers, examInProgress } =
    //     useContext(ProgressContext)

    const isExamTaken =
        typeof window !== 'undefined' && localStorage.getItem('examTaken')
    const checkExam = JSON.parse(isExamTaken) === 1 ? true : false
    typeof window !== 'undefined' &&
        localStorage.setItem('currentExam', JSON.stringify(examName))
    // typeof window !== 'undefined' &&
    //     localStorage.setItem('userAnswers', userInitialAnswers)

    function handleStart() {
        if (checkExam) {
            router.push('/results')
        } else {
            router.push(`/questions/${examName}-1`)
        }
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
