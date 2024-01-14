import styles from './results.module.css'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'

export default function Page() {
    return (
        <main className={styles.main}>
            <h3>Congratulations</h3>
            <ResultBox />
            <TryAgainButton />
        </main>
    )
}
