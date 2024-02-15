import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

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
                        <a href="https://www.launch.training/">
                            <p>Back To Main Site</p>
                        </a>
                    </li>
                    <li>
                        <Link href="/exams">
                            <p>Exams</p>
                        </Link>
                    </li>
                    {/* <li>
                        <a href="#">Contact</a>
                    </li> */}
                </ul>
                <ul className={styles.menuItems}>
                    {/* <li>
                        <a href="#food">Create Account</a>
                    </li> */}
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
