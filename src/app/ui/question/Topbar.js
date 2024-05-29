import styles from './Topbar.module.scss'
import { useRouter } from 'next/navigation'
import { CountdownWrapper } from '@/app/ui/question/CountdownWrapper'
import { Storage, read, put, remove, readJSON } from '@/app/lib/Storage.js';

export function Topbar() {
    const router = useRouter()

    let currentIndex = readJSON(Storage.CURRENT_INDEX);
    let totalQuestions = readJSON(Storage.USER_ANSWERS).length;

    function handleCancel() {
        localStorage.clear();
        router.push('/');
    }

    return (
        <div className={styles.container}>
            <button className={styles.cancel} onClick={handleCancel}>
                Exit
            </button>
            <span>
                <strong>
                    <p>
                        {true ? currentIndex + 1 : 0} of{' '}
                        {true ? totalQuestions : 0}
                    </p>
                </strong>
            </span>
        </div>
    )
}
