import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'

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
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#food">Category</a>
                    </li>
                    <li>
                        <a href="#food-menu">Menu</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonial</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
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
