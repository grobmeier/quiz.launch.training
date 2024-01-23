// `app/tests-list/page.tsx` is the UI for the `/tests-lists` URL

import styles from './tests.module.scss'
import { SmallCard } from '@/app/ui/SmallCard'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>HTML (exams page)</h1>
            <div className={styles.grid}>
                <SmallCard
                    link={'exam-java'}
                    title="JAVA Basics"
                    rating={4.3}
                    level="HARD"
                    duration={`15:00`}
                    text={`
                    Programming languages are the backbone of the digital
                    world, serving as the communication bridge between
                    humans and computers. This topic delves into the
                    fascinating ...
                    `}
                />
                <SmallCard
                    link={'training-list'}
                    title="Programming Languages and Their Differences 1"
                    rating={2.3}
                    level="EASY"
                    duration={`25:00`}
                    text={`
                    Programming languages are the backbone of the digital
                    world, serving as the communication bridge between
                    humans and computers. This topic delves into the
                    fascinating ...
                    `}
                />
                <SmallCard
                    link={'training-list'}
                    title="Programming Languages and Their Differences 2"
                    rating={2.3}
                    level="EASY"
                    duration={`25:00`}
                    text={`
                    Programming languages are the backbone of the digital
                    world, serving as the communication bridge between
                    humans and computers. This topic delves into the
                    fascinating ...
                    `}
                />
                <SmallCard
                    link={'training-list'}
                    title="Programming Languages and Their Differences 3"
                    rating={5}
                    level="EASY"
                    duration={`25:00`}
                    text={`
                    Programming languages are the backbone of the digital
                    world, serving as the communication bridge between
                    humans and computers. This topic delves into the
                    fascinating ...
                    `}
                />
            </div>
        </main>
    )
}
