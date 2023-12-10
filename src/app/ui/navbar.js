import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

// import Logo from './Logo'
// import Button from './Button'

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
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">Consultation</a>
                    </li>
                    <li>
                        <a href="#food">Training</a>
                    </li>
                    <li>
                        <a href="#food-menu">Learn</a>
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
                    <li>
                        <a href="#food">Create Account</a>
                    </li>
                </ul>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/icons/launch-training-logo.png"
                            alt="Launch Training Logo"
                            width={188}
                            height={48}
                            priority
                        />
                    </Link>
                </div>
                {/* <ul className="">
                        <li>
                            <Link href="/">
                                <p>About Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/training-list">
                                <p>Services</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <p>Contacts</p>
                            </Link>
                        </li>
                    </ul> */}
                {/* <h1 className="logo">RS</h1> */}
            </div>
        </nav>
    )
}
