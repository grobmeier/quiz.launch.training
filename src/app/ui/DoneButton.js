'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function DoneButton() {
    const router = useRouter()
    let {
        setIsTaken,
        isTaken,
        setCurrentIndex,
        setExamInProgress,
        setSeenQtns,
    } = useContext(ProgressContext)

    function handleDone() {
        // localStorage.setItem('currentIndex', JSON.stringify(0))
        // localStorage.setItem('examTaken', JSON.stringify(0))
        // localStorage.setItem('currentExam', '')
        setCurrentIndex(0)
        setSeenQtns(0)
        setExamInProgress('')
        localStorage.clear()
        router.push('/')
        // setIsTaken(!isTaken)
    }
    return (
        <button className={styles.doneBtn} type="button" onClick={handleDone}>
            Done
        </button>
    )
}
