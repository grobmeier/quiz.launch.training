import styles from './SingleOption.module.css'

export function SingleOption({ text, correct, qtnIndex }) {
    function handleClick(event) {
        event.preventDefault()
        // perform some action here
        console.log(correct)
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        // <Link href={`/${link}`}>
        //     <button className={styles.button} type="button">
        //         {children}
        //     </button>
        // </Link>
        <div onClick={handleClick} className={styles.container}>
            <span>{indexToCharacter[qtnIndex]}</span>
            <span>{text}</span>
        </div>
    )
}
