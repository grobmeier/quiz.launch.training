// `app/training-list/page.tsx` is the UI for the `/training-lists` URL

import styles from './page.module.scss'
import { Card } from '@/app/ui/Card'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Home</h1>
            <div className={styles.grid}>
                <Card
                    icon={`/icons/html.png`}
                    link="exams"
                    title="HTML"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
                <Card
                    icon={`/icons/html.png`}
                    link="exams"
                    title="React"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
                <Card
                    icon={`/icons/html.png`}
                    link="exams"
                    title="Git"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
                <Card
                    icon={`/icons/html.png`}
                    link="exams"
                    title="Spring"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
            </div>
        </main>
    )
}
