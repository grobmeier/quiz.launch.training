'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'
import { useRouter } from 'next/navigation'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
// import Logo from './Logo'

/**
 * Here the consideration to pick the approach with checking the @examInProgress in state
 * in order to show Confirmation Box to the user is due to the fact that the current navigation
 * on Next doesn't provide a direct way to catch the event of moving to another Route
 * router.events has been replaced in useRouter.
 */

export function Navbar() {
    const [comingFromTest, setComingFromTest] = useState(false)
    let { examInProgress, setCurrentIndex, setExamInProgress, setSeenQtns } =
        useContext(ProgressContext)
    const router = useRouter()

    function confirmExit(address) {
        confirmAlert({
            // title: 'Confirm to exit the test',
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
        if (examInProgress !== '') {
            // console.log('DURING EXAM')
            setComingFromTest(true)
        } else {
            // console.log('Exit EXAM')
            setComingFromTest(false)
        }
    }, [examInProgress])

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContainer} ${styles.container}`}>
                <input type="checkbox" name="" id="" />
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
                {/* <h1 className="logo">RS</h1> */}
            </div>
        </nav>
    )
}
