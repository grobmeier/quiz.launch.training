'use client'

import styles from './SmallCard.module.scss'
import { Rating } from '@smastrom/react-rating'
import { Button } from '@/app/ui/button'

export function SmallCard({ link, title, text, rating, duration, level }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div>
                    <h4>
                        <b>{title}</b>
                    </h4>
                    <Rating
                        style={{ maxWidth: 100 }}
                        className={styles.stars}
                        value={rating}
                        readOnly
                    />
                    <span>{duration} min</span>
                    <span className={styles.level}> {level} </span>
                    <p>{text}</p>
                    <div className={styles.containerBtn}>
                        <Button link={link}>More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
