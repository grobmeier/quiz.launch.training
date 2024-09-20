'use client';
import styles from './result/Result.module.scss';
import { useRouter } from 'next/navigation';
import { removeQuestionDeck } from '@/app/lib/Storage';

export function DoneButton({examName}) {
    const router = useRouter();

    function handleDone() {
        removeQuestionDeck(examName);
        router.push('/');
    }
    return (
        <button className={styles.doneBtn} type="button" onClick={handleDone}>
            Reset quiz
        </button>
    )
}
