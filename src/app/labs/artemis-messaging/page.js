import Link from 'next/link';
import { Intro, FinalCleanup, LabToolbar } from '../ui/LabPages';
import styles from '../ui/labs.module.scss';
export const metadata = { title: 'Messaging with Apache Artemis | Launch Training Labs', description: 'Three practical Java 21 stations: queues, publish/subscribe, acknowledgement and failure recovery.' };
export default function Page() { return <main id="main-content" className={styles.main}><Link href="/labs/">← All labs</Link><LabToolbar /><Intro /><FinalCleanup /></main>; }
