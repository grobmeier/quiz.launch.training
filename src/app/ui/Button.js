// import styles from './Button.module.css'
import styles from './Button.module.scss'
import Link from 'next/link'

export function Button({ children, link, variant }) {
    return (
        <Link href={`/${link}`}>
            <button className={styles.button} type="button">
                {children}
            </button>
        </Link>
    )
}
