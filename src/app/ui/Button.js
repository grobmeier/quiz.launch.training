import styles from './Button.module.scss'
import Link from 'next/link'

export function Button({ children, link, onClick }) {
    if (link === undefined) {
        return (<button className={styles.button} onClick={onClick} type="button">
            {children}
        </button>);
    }

    return (
        <Link href={`/${link}`}>
            <button className={styles.button} type="button">
                {children}
            </button>
        </Link>
    )
}
