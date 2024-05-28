'use client';
import styles from './result/Result.module.scss';
import { ProgressContext } from '@/app/lib/QuestionProvider';
import { useContext } from 'react';
import { Storage, put } from '@/app/lib/Storage.js';

export function TryAgainButton() {
    let {
        setIsTaken,
        isTaken,
    } = useContext(ProgressContext)

    function handleTryAgain() {
        put(Storage.CURRENT_INDEX, 0);
        put(Storage.EXAM_TAKEN, 0);
        setIsTaken(!isTaken)
    }
    return (
        <button
            className={styles.showBtn}
            type="button"
            onClick={handleTryAgain}>
            Try again
        </button>
    )
}
