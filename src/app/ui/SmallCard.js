'use client'

import styles from './SmallCard.module.scss'
import { Rating } from '@smastrom/react-rating'
import { Button } from '@/app/ui/Button'
import Link from 'next/link'

export function SmallCard({ link, title, text, rating, duration, level }) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div>
                    <Link href={link}>
                        <h4>{title}</h4>
                    </Link>

                    {/*
                    <Rating
                        style={{ maxWidth: 100 }}
                        className={styles.stars}
                        value={rating}
                        readOnly
                    />
                    */}
                    {/* <Link href={link}>
                        <span>{duration}m</span>
                    </Link> */}
                    {/*
                    <Link href={link}>
                        <span className={styles.level}>{level}</span>
                    </Link>
                    */}

                    <p>{text}</p>
                    <div className={styles.containerBtn}>
                        <Button link={link}>More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
