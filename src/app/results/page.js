import styles from './results.module.css'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { AllAnswers } from '@/app/ui/result/AllAnswers'

export default function Page() {
    return (
        <main className={styles.main}>
            <h3>Congratulations</h3>
            <ResultBox />
            <AllAnswers />
        </main>
    )
}
