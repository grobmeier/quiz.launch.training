import styles from './Card.module.scss'
import Image from 'next/image'

import Link from 'next/link'

export function Card({ icon, link, title, text }) {
    return (
        <Link href={`/${link}`}>
            <div className={styles.card}>
                <div className={styles.container}>
                    <Image src={icon} alt="" width={64} height={64} priority />
                    <div>
                        <h4>
                            <b>{title}</b>
                        </h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
