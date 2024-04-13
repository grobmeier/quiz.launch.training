import styles from './SingleOption.module.scss'
import { useEffect, useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { INDEX_TO_CHARACTER } from '@/app/lib/Constants'

export function SingleOption({ answers, id }) {
    let { currentIndex, userAnswers, setUserAnswers } =
        useContext(ProgressContext)

    let currentCalculatedPoints = '0'
    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)

    const tmpUsers =
        typeof window !== 'undefined' && localStorage.getItem('userAnswers')
    const tmpUsersFormatted = tmpUsers && JSON.parse(tmpUsers)

    useEffect(() => {
        const progress = localStorage.getItem('userAnswers')
        const progressParsed = progress && JSON.parse(progress)
        if (
            progressParsed &&
            progressParsed[currentIndex] &&
            progressParsed[currentIndex].answered
        ) {
            setCurrentSelected(progressParsed[currentIndex].answered)
        }
    }, [userAnswers, clicked])

    function handleClick(event, item) {
        event.preventDefault()
        setClicked(!clicked)

        if (currentSelected.includes(item.text)) {
            if (item.correct) {
                currentCalculatedPoints = '0'
            }
            currentSelected[0] = ''
            setCurrentSelected(currentSelected)
        } else {
            currentSelected[0] = item.text
            if (item.correct) {
                currentCalculatedPoints = '1'
            } else {
                currentCalculatedPoints = '0'
            }
            setCurrentSelected(currentSelected)
        }

        // inserts the selected answers and calculated points into the global state (local storage)

        let temp = tmpUsersFormatted.map((item) =>
            item.id === id
                ? {
                      ...item,
                      answered: currentSelected,
                      calculatedPoints: currentCalculatedPoints,
                  }
                : { ...item },
        )
        localStorage.setItem('userAnswers', JSON.stringify(temp))
        setUserAnswers(temp)
    }

    return (
        <>
            {answers.map((item, index) => (
                <button
                    onClick={(event) => handleClick(event, item)}
                    key={index}
                    type="button"
                    className={`${styles.container} ${
                        currentSelected.includes(item.text)
                            ? styles.selectedBtn
                            : ''
                    }`}
                >
                    <span>{INDEX_TO_CHARACTER[index]}</span>
                    <span>{item.text}</span>
                </button>
            ))}
        </>
    )
}
