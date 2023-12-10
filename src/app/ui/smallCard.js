import styles from './small-card.module.css'
import Image from 'next/image'
import { Rating } from '@smastrom/react-rating'

import Link from 'next/link'

export function SmallCard({ link }) {
    return (
        <Link href={`/${link}`}>
            <div className={styles.card}>
                <div className={styles.container}>
                    <div>
                        <h4>
                            <b>HTML</b>
                        </h4>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.3}
                            readOnly
                        />
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
