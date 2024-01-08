import styles from './ResultOption.module.css'
import { useEffect, useContext, useState } from 'react'

export function ResultOption({ answers, id }) {
    const [allAnswers, setAllAnswers] = useState([])

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    useEffect(() => {
        let qtnsAnswers = localStorage.getItem('userAnswers')
        setAllAnswers(JSON.parse(qtnsAnswers))
        console.log(allAnswers)
    }, [])

    const isAnswered =
        allAnswers[id] &&
        allAnswers[id].answered !== undefined &&
        allAnswers[id].answered
    return (
        <>
            {answers.map((item, index) => (
                <button
                    key={index}
                    type="button"
                    className={`${styles.container} ${
                        isAnswered && isAnswered.includes(item.text)
                            ? styles.selectedBtn
                            : ''
                    }`}
                >
                    <span>{indexToCharacter[index]}</span>
                    <span>{item.text}</span>
                </button>
            ))}
        </>
    )
}
