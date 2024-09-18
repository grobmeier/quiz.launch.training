'use client'
import styles from './StartButton.module.scss'

export function StartButton({children, startFn}) {
    function handleStart() {
        startFn();
    }

    return (
        <button className={styles.examBtn} type="button" onClick={handleStart}>
            {children}
        </button>
    )
}
