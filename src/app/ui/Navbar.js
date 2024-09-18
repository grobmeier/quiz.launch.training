'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ProgressContext } from '@/app/lib/QuestionProvider.js';
import { useRouter, usePathname } from 'next/navigation';
import { confirmAlert } from 'react-confirm-alert' ;
import 'react-confirm-alert/src/react-confirm-alert.css';

export function Navbar() {
    const [comingFromTest, setComingFromTest] = useState(false)
    let {
        examInProgress,
        setCurrentIndex,
        setExamInProgress,
        setSeenQtns,
        setUserAnswers,
    } = useContext(ProgressContext)
    const router = useRouter()
    const pathname = usePathname()

    function confirmExit(address) {
        confirmAlert({
            message:
                'Are you sure you want to do this? If you exit your progress will be wiped out!',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        setCurrentIndex(0)
                        setSeenQtns(0)
                        setExamInProgress('')
                        localStorage.clear()
                        if (address === 'exitSite') {
                            router.push('https://www.launch.training/')
                        }
                        if (address === 'goToHome') {
                            router.push('/')
                        }
                    },
                },
                {
                    label: 'No',
                    onClick: () => {},
                },
            ],
        })
    }

    useEffect(() => {
        if (pathname.includes('exam') && examInProgress !== '') {
            setComingFromTest(true)
        } else {
            setComingFromTest(false)
        }

        if (pathname === '/' &&
            localStorage['allExamQtns'] &&
            localStorage['userAnswers'] &&
            localStorage['allQtns']) {
            localStorage.removeItem('allExamQtns')
            localStorage.removeItem('userAnswers')
            localStorage.removeItem('allQtns')
            setUserAnswers('')
        }
    }, [pathname, examInProgress, setUserAnswers])

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContainer} ${styles.container}`}>
                <div className={styles.hamburgerLines}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span className={`${styles.line} ${styles.line2}`}></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
                <ul className={styles.menuItems}>
                    <li className={styles.backLinkMobile}>
                        {comingFromTest ? (
                            <a href="#" onClick={() => confirmExit('exitSite')}>
                                Back To Main Site
                            </a>
                        ) : (
                            <a href="https://www.launch.training/">
                                Back To Main Site
                            </a>
                        )}
                    </li>
                    <li>
                        {comingFromTest ? (
                            <Link
                                href="#"
                                onClick={() => confirmExit('goToHome')}
                            >
                                Exams
                            </Link>
                        ) : (
                            <Link href="/">Exams</Link>
                        )}
                    </li>
                </ul>
                <div className={styles.logo}>
                    {comingFromTest ? (
                        <Link href="#" onClick={() => confirmExit('goToHome')}>
                            <Image
                                src="/icons/launch-training-logo.svg"
                                alt="Launch Training Logo"
                                width={188}
                                height={48}
                                priority
                            />
                        </Link>
                    ) : (
                        <Link href="/">
                            <Image
                                src="/icons/launch-training-logo.svg"
                                alt="Launch Training Logo"
                                width={188}
                                height={48}
                                priority
                            />
                        </Link>
                    )}
                    {comingFromTest ? (
                        <li className={styles.backLinkDesktop}>
                            <a href="#" onClick={() => confirmExit('exitSite')}>
                                Back To Main Site
                            </a>
                        </li>
                    ) : (
                        <li className={styles.backLinkDesktop}>
                            <a href="https://www.launch.training/">
                                Back To Main Site
                            </a>
                        </li>
                    )}
                </div>
            </div>
        </nav>
    )
}
