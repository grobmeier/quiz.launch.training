'use client'
import styles from './result/Result.module.scss'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext } from 'react'

export function DoneButton() {
    const router = useRouter()
    let { setCurrentIndex, setExamInProgress, setSeenQtns } =
        useContext(ProgressContext)

    function handleDone() {
        setCurrentIndex(0)
        setSeenQtns(0)
        setExamInProgress('')
        localStorage.clear()
        router.push('/')
    }
    return (
        <button className={styles.doneBtn} type="button" onClick={handleDone}>
            Done
        </button>
    )
}
