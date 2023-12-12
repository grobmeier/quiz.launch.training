import styles from './question.module.css'
import { Topbar } from '@/app/ui/question/Topbar'
import { SingleOption } from '@/app/ui/question/SingleOption'

export default function Page() {
    return (
        <main className={styles.main}>
            <Topbar />
            <h3>What language do you see in the picture?</h3>
            <SingleOption />
            <SingleOption />
            {/* <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div> */}
        </main>
    )
}
