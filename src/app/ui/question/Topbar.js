import styles from './Topbar.module.scss'
import { useRouter } from 'next/navigation'
import { Storage, readJSON } from '@/app/lib/Storage.js';

export function Topbar({examName}) {
    const router = useRouter()

    let currentIndex = readJSON(Storage.CURRENT_INDEX, examName);
    let totalQuestions = readJSON(Storage.USER_ANSWERS, examName).length;

    function handleCancel() {
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
