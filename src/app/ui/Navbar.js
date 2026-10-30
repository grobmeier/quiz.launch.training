'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
export function Navbar() {
  const pathname = usePathname();
  return <header className={styles.navbar}>
    <Link href="#main-content" className={styles.skip}>Skip to content</Link>
    <nav className={styles.container} aria-label="Main navigation">
      <Link href="/" aria-label="Launch Training home"><Image src="/icons/launch-training-logo.svg" alt="Launch Training" width={188} height={48} priority /></Link>
      <ul>
        <li><Link href="/labs/" aria-current={pathname.startsWith('/labs') ? 'page' : undefined}>Labs</Link></li>
        <li><Link href="/quizzes/" aria-current={pathname.startsWith('/quizzes') || pathname.startsWith('/exams') ? 'page' : undefined}>Quizzes</Link></li>
        <li><a href="https://grobmeier.solutions/en/training/">Team training ↗</a></li>
      </ul>
    </nav>
  </header>;
}
