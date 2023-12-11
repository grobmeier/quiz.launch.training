import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { Button } from '@/app/ui/Button'

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
                        <a href="#about">Consultation</a>
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
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#home">English</a>
                    </li>
                    <li>
                        <a href="#about">Sign In</a>
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
