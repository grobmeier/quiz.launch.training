import styles from './Topbar.module.scss'

export function Topbar({ currentIndex, totalQtns }) {
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
                    {currentIndex} of {totalQtns}
                </strong>
            </span>
            <span>13:31</span>
        </div>
    )
}
