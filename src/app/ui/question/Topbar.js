import styles from './Tobbar.module.css'

export function Topbar({ counter }) {
    return (
        // <Link href={`/${link}`}>
        //     <button className={styles.button} type="button">
        //         {children}
        //     </button>
        // </Link>
        <div className={styles.container}>
            <span>Cancel</span>
            <span>
                <strong>13 of 43</strong>
            </span>
            <span>13:31</span>
        </div>
    )
}
