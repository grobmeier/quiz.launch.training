import Link from 'next/link';
import { lab } from './content/index.mjs';
import styles from './ui/labs.module.scss';
export const metadata = { title: 'Labs | Launch Training', description: 'Guided practical Java labs. Predict, run, break, explain and adapt.' };
export default function Page() {
  return <main id="main-content" className={styles.main}>
    <p className={styles.eyebrow}>Launch Training</p><h1>Learn by running the experiment.</h1>
    <p className={styles.lead}>Make a prediction. Observe a real system. Explain what changed, then adapt the code.</p>
    <section><h2>Available labs</h2><ul className={styles.cards}><li><Link href="/labs/artemis-messaging/"><span className={styles.eyebrow}>{lab.level} · 3 stations · {lab.duration}</span><h3>{lab.title}</h3><p>Follow orders through queues, independent subscribers and controlled failures on your own local broker.</p><span className={styles.action}>Explore the lab →</span></Link></li></ul></section>
    <Link href="/">Browse quizzes →</Link>
  </main>;
}
