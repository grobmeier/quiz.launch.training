'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'

export function StartButton({ children, examName, variant }) {
    const router = useRouter()
    const isExamTaken = localStorage.getItem('examTaken')
    const checkExam = JSON.parse(isExamTaken) === 1 ? true : false
    localStorage.setItem('currentExam', JSON.stringify(examName))

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
