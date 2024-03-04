'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function DoneButton() {
    const router = useRouter()
    let { setCurrentIndex, setIsTaken, isTaken, setExamInProgress } =
        useContext(ProgressContext)

    function handleDone() {
        router.push('/', undefined, { shallow: true })
        localStorage.setItem('currentIndex', JSON.stringify(0))
        setCurrentIndex(0)
        localStorage.setItem('examTaken', JSON.stringify(0))
        setExamInProgress('')
        localStorage.setItem('currentExam', '')
        setIsTaken(!isTaken)
    }
    return (
        <button className={styles.doneBtn} type="button" onClick={handleDone}>
            Done
        </button>
    )
}
