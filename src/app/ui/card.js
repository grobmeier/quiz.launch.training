import styles from './card.module.css'
import Image from 'next/image'

import Link from 'next/link'

export function Card({ link }) {
    return (
        <Link href={`/${link}`}>
            <div className={styles.card}>
                <div className={styles.container}>
                    <Image
                        src="/icons/html.png"
                        alt="HTML Logo"
                        // className={styles.vercelLogo}
                        width={64}
                        height={64}
                        priority
                    />
                    <div>
                        <h4>
                            <b>HTML</b>
                        </h4>
                        <p>
                            HTML is the standard markup language for Web pages.
                            With HTML you can create your own Website
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
