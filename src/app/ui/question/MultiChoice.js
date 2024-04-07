import styles from './MultiChoice.module.scss'
import { useContext, useState, useEffect } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'

export function MultiChoice({ answers, options, id }) {
    let { currentIndex, userAnswers, examInProgress, setUserAnswers, allQtns } =
        useContext(ProgressContext)

    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)

    const maxSelects = options
    const calculateAnswerWeight = (1 / options).toFixed(2)

    const tmpUsers =
        typeof window !== 'undefined' && localStorage.getItem('userAnswers')
    const tmpUsersFormatted = tmpUsers && JSON.parse(tmpUsers)

    useEffect(() => {
        const progress = localStorage.getItem('userAnswers')
        const progressParsed = JSON.parse(progress)
        if (progressParsed && progressParsed[currentIndex].answered) {
            setCurrentSelected(progressParsed[currentIndex].answered)
        }
    }, [userAnswers, clicked, examInProgress, allQtns])

    function handleClick(event, item) {
        event.preventDefault()
        setClicked(!clicked)
        if (
            currentSelected.length >= maxSelects &&
            !currentSelected.includes(item.text)
        ) {
            alert('You reached maximum allowed answers')
            return
        }
        let optionToCheck = currentSelected.indexOf(item.text)
        if (optionToCheck === -1) {
            currentSelected.push(item.text)
            if (item.correct && userAnswers[currentIndex]) {
                userAnswers[currentIndex].calculatedPoints = (
                    parseFloat(userAnswers[currentIndex].calculatedPoints) +
                    parseFloat(calculateAnswerWeight)
                ).toFixed(2)
            }
            setCurrentSelected(currentSelected)
        } else {
            if (item.correct) {
                userAnswers[currentIndex].calculatedPoints = (
                    parseFloat(userAnswers[currentIndex].calculatedPoints) -
                    parseFloat(calculateAnswerWeight)
                ).toFixed(2)
            }
            currentSelected.splice(optionToCheck, 1)
            setCurrentSelected(currentSelected)
        }
        // inserts the selected answers into the global state
        let temp = tmpUsersFormatted.map((item) =>
            item.id === id
                ? {
                      ...item,
                      answered: currentSelected,
                  }
                : { ...item },
        )

        localStorage.setItem('userAnswers', JSON.stringify(temp))
        setUserAnswers(temp)
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        <>
            <span>You may pick {maxSelects} answers</span>
            {answers.map((item, index) => (
                <button
                    key={index}
                    onClick={(event) => handleClick(event, item)}
                    type="button"
                    className={`${styles.container} ${
                        currentSelected.includes(item.text)
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
