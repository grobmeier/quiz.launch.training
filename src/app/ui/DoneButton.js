'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function DoneButton() {
    const router = useRouter()
    let { setCurrentIndex, setIsTaken, isTaken } = useContext(ProgressContext)

    function handleDone() {
        localStorage.setItem('currentIndex', JSON.stringify(0))
        localStorage.setItem('examTaken', JSON.stringify(0))
        setIsTaken(!isTaken)
        setCurrentIndex(0)
        router.push('/exams')
    }
    return (
        <button className={styles.doneBtn} type="button" onClick={handleDone}>
            Done
        </button>
    )
}
