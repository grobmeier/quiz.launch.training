import styles from './results.module.scss'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'

export default function Page() {
    return (
        <main className={styles.main}>
            <h3>Congratulations</h3>
            <ResultBox />
            <div className={styles.btnsArea}>
                <TryAgainButton />
                <DoneButton />
            </div>
        </main>
    )
}
