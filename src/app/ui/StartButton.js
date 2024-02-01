'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useEffect } from 'react'

export function StartButton({ children, examName }) {
    const router = useRouter()
    let { userInitialAnswers, setExamInProgress, setIsTaken, isTaken } =
        useContext(ProgressContext)

    // const isExamTaken =
    //     typeof window !== 'undefined' && localStorage.getItem('examTaken')

    // const checkExam = JSON.parse(isExamTaken) === 1 ? true : false

    // Properly reinstantiate the prestine initial data
    useEffect(() => {
        typeof window !== 'undefined' &&
            localStorage.setItem('currentExam', JSON.stringify(examName))
        typeof window !== 'undefined' &&
            localStorage.setItem('currentIndex', JSON.stringify(0))
        // typeof window !== 'undefined' &&
        //     localStorage.setItem('userAnswers', userInitialAnswers)
        setExamInProgress(examName)
    }, [examName])

    function handleStart() {
        // if (checkExam) {
        //     router.push('/results')
        // } else {
        setIsTaken(!isTaken)
        router.push(`/questions/${examName}-1`)
        // }
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
