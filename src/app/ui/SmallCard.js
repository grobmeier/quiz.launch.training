'use client'

import styles from './SmallCard.module.scss';
import { Button } from '@/app/ui/Button';
import Link from 'next/link';
import { Storage, read, put, remove, readJSON, removeQuestionDeck } from '@/app/lib/Storage.js';
import {formatDate} from '@/app/lib/Functions.js';
import { useState, useEffect } from 'react';

export function SmallCard({ examName, link, title, text }) {

    const [startTime, setStartTime] = useState(null);

    const startTimeStorage = readJSON(Storage.START_TIME, examName);
    useEffect(() => {
        let startTime = null;
        if (startTimeStorage !== null) {
            startTime = formatDate(startTimeStorage.startTime);
        }
        setStartTime(startTime);
    }, [startTimeStorage]);
    
    function handleRemove(event, examName) {
        removeQuestionDeck(examName);
        setStartTime(null);
    }

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <div>
                    <Link href={link}>
                        <h4>{title}</h4>
                    </Link>
                    <p>{text}</p>
                    <div className={styles.containerBtn}>
                        {startTime !== null &&
                        <>  
                            <span className={styles.startIndicator}>Started on {startTime}</span>
                            <Button onClick={(event) => handleRemove(event, examName)}>Remove</Button>
                            <Button link={link}>Continue</Button>
                        </>
                        }

                        {startTime === null &&
                            <Button link={link}>More</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
