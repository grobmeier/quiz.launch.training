// import styles from './SmallCard.module.css'
import styles from './SmallCard.module.scss'
import Image from 'next/image'
import { Rating } from '@smastrom/react-rating'
import { Button } from '@/app/ui/Button'

import Link from 'next/link'

export function SmallCard({ link }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div>
                    <h4>
                        <b>Programming Languages and Their Differences</b>
                    </h4>
                    <Rating
                        style={{ maxWidth: 100 }}
                        className={styles.stars}
                        value={4.3}
                        readOnly
                    />
                    <span>15:00 min</span>{' '}
                    <span className={styles.level}> HARD </span>
                    <p>
                        Programming languages are the backbone of the digital
                        world, serving as the communication bridge between
                        humans and computers. This topic delves into the
                        fascinating ...
                    </p>
                    <div className={styles.containerBtn}>
                        <Button link={'training-list'}>More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
