import styles from './SingleOption.module.css'

export function SingleOption({}) {
    return (
        // <Link href={`/${link}`}>
        //     <button className={styles.button} type="button">
        //         {children}
        //     </button>
        // </Link>
        <div className={styles.container}>
            <span>A.</span>
            <span>{'<HEAD>'}</span>
        </div>
    )
}
