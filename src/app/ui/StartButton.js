'use client'
import styles from './StartButton.module.scss'
import { useRouter } from 'next/navigation'

export function StartButton({ children, link, variant }) {
    const router = useRouter()

    function handleStart() {
        router.push(`/questions/5`)
    }
    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
