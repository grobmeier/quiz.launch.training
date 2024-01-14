'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'

export function StartButton({ children, link, variant }) {
    const router = useRouter()
    const isExamTaken = localStorage.getItem('examTaken')
    const checkExam = JSON.parse(isExamTaken) === 1 ? true : false

    function handleStart() {
        if (checkExam) {
            router.push('/results')
        } else {
            router.push(`/questions/5`)
        }
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
