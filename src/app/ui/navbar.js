import Link from 'next/link'
import Image from 'next/image'

// import Logo from './Logo'
// import Button from './Button'

export function Navbar() {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <Link href="/">
                        <Image
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={180}
                            height={37}
                            priority
                        />
                    </Link>
                    <ul className="">
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
                    </ul>
                </div>
            </div>
        </div>
    )
}
