import styles from './button.module.css'
import Link from 'next/link'

export function Button({ text, link }) {
    return (
        <Link href={`/${link}`}>
            <button className={styles.button} type="button">
                {text}
            </button>
        </Link>
    )
}
