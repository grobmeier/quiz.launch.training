import styles from './SingleOption.module.scss'
import { useEffect, useState } from 'react'
import { INDEX_TO_CHARACTER } from '@/app/lib/Constants'
import { Storage, read, put, remove, readJSON } from '@/app/lib/Storage.js';

export function SingleOption({ answers, id }) {
    let currentCalculatedPoints = '0'
    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)

    let currentIndex = readJSON(Storage.CURRENT_INDEX);

    useEffect(() => {
        const userAnswers = readJSON(Storage.USER_ANSWERS);
        if (userAnswers &&
            userAnswers[currentIndex] &&
            userAnswers[currentIndex].answered) {
            setCurrentSelected(userAnswers[currentIndex].answered)
        }    
    }, [currentIndex, clicked]);

    function handleClick(event, item) {
        const userAnswers = readJSON(Storage.USER_ANSWERS);

        event.preventDefault();

        if (item.correct) {
            currentCalculatedPoints = '1';
        } else {
            currentCalculatedPoints = '0';
        }

        currentSelected[0] = item.text;        

        let temp = userAnswers.map((item) =>
            item.id === id ? {
                      ...item,
                      answered: currentSelected,
                      calculatedPoints: currentCalculatedPoints,
                  } : { ...item },
        )
        put(Storage.USER_ANSWERS, temp);

        setClicked(!clicked);
    }

    return (
        <>
            {answers.map((item, index) => (
                <button
                    onClick={(event) => handleClick(event, item)}
                    key={index}
                    type="button"
                    className={`${styles.container} ${currentSelected.includes(item.text) ? styles.selectedBtn : ''}`}>
                    <span>{INDEX_TO_CHARACTER[index]}</span>
                    <span>{item.text}</span>
                </button>
            ))}
        </>
    )
}
