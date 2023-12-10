// `app/training-list/page.tsx` is the UI for the `/training-lists` URL

import styles from './training.module.css'
import { Card } from '@/app/ui/Card'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>Hello, Traning Page!</h1>
            <div className={styles.grid}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    )
}
