// `app/tests-list/page.tsx` is the UI for the `/tests-lists` URL

import styles from './tests.module.scss'
import { SmallCard } from '@/app/ui/SmallCard'
import { catalogue } from '../exams-data/catalogue.js'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>Exams Page</h1>
            <div className={styles.grid}>
                {catalogue.map((item) => (
                    <SmallCard
                        key={item.exam}
                        link={`exams/${item.exam}`}
                        title={item.title}
                        rating={item.rating}
                        level={item.level}
                        duration={item.duration}
                        text={item.shortDescription}
                    />
                ))}
            </div>
        </main>
    )
}
