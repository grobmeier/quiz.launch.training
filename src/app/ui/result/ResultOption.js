import styles from './ResultOption.module.scss'
import { useEffect, useState, Fragment } from 'react'

export function ResultOption({ answers, id }) {
    const [allAnswers, setAllAnswers] = useState([])

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    useEffect(() => {
        let qtnsAnswers = localStorage.getItem('userAnswers')
        setAllAnswers(JSON.parse(qtnsAnswers))
    }, [])

    const isAnswered =
        allAnswers[id] &&
        allAnswers[id].answered !== undefined &&
        allAnswers[id].answered
    return (
        <>
            {answers.map((item, index) => (
                <Fragment key={index}>
                    <button
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
                    {isAnswered &&
                        isAnswered.includes(item.text) &&
                        item.correct && (
                            <span>
                                <small>Right Answer</small>
                            </span>
                        )}
                </Fragment>
            ))}
        </>
    )
}
