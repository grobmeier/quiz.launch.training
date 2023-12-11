import styles from './question.module.css'
import { SmallCard } from '@/app/ui/SmallCard'
import { Topbar } from '@/app/ui/question/Topbar'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>QUESTION</h1>
            <Topbar />
            <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </main>
    )
}
