// `app/tests-list/page.tsx` is the UI for the `/tests-lists` URL

import styles from './page.module.scss'
import { SmallCard } from '@/app/ui/SmallCard'
import { catalogue } from './exams-data/catalogue.js'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>Exams Page</h1>
            <div>
                {catalogue.map((item) => (
                    <SmallCard
                        key={item.exam}
                        examName={item.exam}
                        link={`exams/${item.exam}`}
                        title={item.title}
                        text={item.shortDescription}
                    />
                ))}
            </div>
        </main>
    )
}
