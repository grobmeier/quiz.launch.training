import styles from './SmallCard.module.css'
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
                            <b>Programming Languages and Their Differences</b>
                        </h4>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={4.3}
                            readOnly
                        />
                        <h6>15:00 min</h6>
                        <p>
                            Programming languages are the backbone of the
                            digital world, serving as the communication bridge
                            between humans and computers. This topic delves into
                            the fascinating ...
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
