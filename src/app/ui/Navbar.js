'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContainer} ${styles.container}`}>
                <div className={styles.hamburgerLines}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <ul className={styles.menuItems}>
                    <li className={styles.backLinkMobile}>
                        <a href="https://www.launch.training/">
                            Back To Main Site
                        </a>
                    </li>
                </ul>
                <div className={styles.logo}>
                        <Link href="/">
                            <Image
                                src="/icons/launch-training-logo.svg"
                                alt="Launch Training Logo"
                                width={188}
                                height={48}
                                priority
                            />
                        </Link>
                        <li className={styles.backLinkDesktop}>
                            <a href="https://www.launch.training/">
                                Back To Main Site
                            </a>
                        </li>
                </div>
            </div>
        </nav>
    )
}
