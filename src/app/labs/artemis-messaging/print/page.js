import Link from 'next/link';
import { stations } from '../../content/index.mjs';
import { Intro, StationBody, FinalCleanup, LabToolbar } from '../../ui/LabPages';
import styles from '../../ui/labs.module.scss';
export const metadata = { title: 'Printable Artemis lab | Launch Training Labs' };
export default function Page() { return <main id="main-content" className={styles.main}><div data-no-print><Link href="/labs/artemis-messaging/">← Lab overview</Link><LabToolbar /><p>Print this complete view or save it as PDF before going offline. The Markdown worksheet includes both command platforms.</p></div><Intro print />{stations.map((s) => <article key={s.id} className={styles.printStation}><StationBody station={s} print /></article>)}<FinalCleanup /></main>; }
