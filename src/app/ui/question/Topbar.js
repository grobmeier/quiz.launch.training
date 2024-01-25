import styles from './Topbar.module.scss'
import { useContext } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'
import { useState, useEffect } from 'react'

export function Topbar() {
    const [isClient, setIsClient] = useState(false)

    let { allQtns, currentIndex } = useContext(ProgressContext)

    let totalQtns = allQtns.length
    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        // <Link href={`/${link}`}>
        //     <button className={styles.button} type="button">
        //         {children}
        //     </button>
        // </Link>
        <div className={styles.container}>
            <span>Cancel</span>
            <span>
                <strong>
                    <p>
                        {isClient ? currentIndex + 1 : 0} of{' '}
                        {isClient ? totalQtns : 0}
                    </p>
                </strong>
            </span>
            <span>13:31</span>
        </div>
    )
}
