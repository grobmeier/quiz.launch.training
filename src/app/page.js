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
                    link="tests-list"
                    title="HTML"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
                <Card
                    icon={`/icons/html.png`}
                    link="training-list"
                    title="React"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
                <Card
                    icon={`/icons/html.png`}
                    link="training-list"
                    title="Git"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
                <Card
                    icon={`/icons/html.png`}
                    link="training-list"
                    title="Spring"
                    text={`HTML is the standard markup language for Web pages.
                    With HTML you can create your own Website`}
                />
            </div>
        </main>
    )
}
