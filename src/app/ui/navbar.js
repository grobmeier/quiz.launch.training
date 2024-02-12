import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import { Button } from '@/app/ui/button'

// import Logo from './Logo'

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContainer} ${styles.container}`}>
                <input type="checkbox" name="" id="" />
                <div className={styles.hamburgerLines}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <ul className={styles.menuItems}>
                    <li>
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Consultation</a>
                    </li>
                    <li>
                        <Link href="/training-list">
                            <p>Training</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tests-list">
                            <p>Learn</p>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#">English</a>
                    </li>
                    <li>
                        <a href="#">Sign In</a>
                    </li>
                    {/* <li>
                        <a href="#food">Create Account</a>
                    </li> */}
                    <li>
                        <Button link={'training-list'}>Create Account</Button>
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
                </div>
                {/* <h1 className="logo">RS</h1> */}
            </div>
        </nav>
    )
}
