// `app/tests-list/page.tsx` is the UI for the `/tests-lists` URL

import styles from './tests.module.css'
import { SmallCard } from '@/app/ui/smallCard'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>Hello, Tests Page!</h1>
            <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </main>
    )
}
