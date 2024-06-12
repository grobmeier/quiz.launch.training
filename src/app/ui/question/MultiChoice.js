import styles from './MultiChoice.module.scss'
import { useState, useEffect } from 'react'
import { INDEX_TO_CHARACTER } from '@/app/lib/Constants'
import { Storage, read, put, remove, readJSON } from '@/app/lib/Storage.js'

export function MultiChoice({ answers, options, id }) {
    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)

    const maxSelects = options
    const calculateAnswerWeight = (1 / options).toFixed(2)

    let currentIndex = readJSON(Storage.CURRENT_INDEX);
    
    useEffect(() => {
        const userAnswers = readJSON(Storage.USER_ANSWERS);
        if (userAnswers[currentIndex].answered) {
            setCurrentSelected(userAnswers[currentIndex].answered)
        }
    }, [currentIndex, clicked]);

    function handleClick(event, item) {
        event.preventDefault();
        const userAnswers = readJSON(Storage.USER_ANSWERS);
        if (currentSelected.length >= maxSelects && !currentSelected.includes(item.text)) {
            alert('You reached maximum allowed answers');
            return;
        }

        let optionToCheck = currentSelected.indexOf(item.text);
        if (optionToCheck === -1) {
            currentSelected.push(item.text);
            if (item.correct && userAnswers[currentIndex]) {
                userAnswers[currentIndex].calculatedPoints = (
                    parseFloat(
                        userAnswers[currentIndex].calculatedPoints,
                    ) + parseFloat(calculateAnswerWeight)
                ).toFixed(2)
            }
        } else {
            if (item.correct) {
                userAnswers[currentIndex].calculatedPoints = (
                    parseFloat(
                        userAnswers[currentIndex].calculatedPoints,
                    ) - parseFloat(calculateAnswerWeight)
                ).toFixed(2)
            }
            currentSelected.splice(optionToCheck, 1);
        }

        // inserts the selected answers into the global state
        let temp = userAnswers.map((item) =>
            item.id === id ? {
                      ...item,
                      answered: currentSelected,
                  } : { ...item }
        );

        put(Storage.USER_ANSWERS, temp);
        setClicked(!clicked);
    }

    return (
        <>
            <span>{maxSelects} answers are correct.</span>
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
                    <span>{INDEX_TO_CHARACTER[index]}</span>
                    <span>{item.text}</span>
                </button>
            ))}
        </>
    )
}
