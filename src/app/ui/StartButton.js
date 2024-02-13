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

    // const isExamTaken =
    //     typeof window !== 'undefined' && localStorage.getItem('examTaken')

    // const checkExam = JSON.parse(isExamTaken) === 1 ? true : false

    // Properly initialize the matrix of answers

    let progress = JSON.parse(localStorage.getItem('currentIndex'))

    useEffect(() => {
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
        // if (checkExam) {
        //     router.push('/results')
        // } else {
        // setIsTaken(!isTaken)
        // router.push(`/questions/${examName}-1`)
        // }
        setExamInProgress(examName)
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
