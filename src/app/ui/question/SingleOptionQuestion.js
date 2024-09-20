import styles from './SingleOptionQuestion.module.scss'
import { useEffect, useState } from 'react'
import { INDEX_TO_CHARACTER } from '@/app/lib/Constants'
import { Storage, read, put, remove, readJSON } from '@/app/lib/Storage.js';

export function SingleOptionQuestion({ examName, completed, answers, id }) {
    let currentCalculatedPoints = '0';
    const [currentSelected, setCurrentSelected] = useState([]);
    const [clicked, setClicked] = useState(false);

    let currentIndex = readJSON(Storage.CURRENT_INDEX, examName);

    useEffect(() => {
        const userAnswers = readJSON(Storage.USER_ANSWERS, examName);
        if (userAnswers &&
            userAnswers[currentIndex] &&
            userAnswers[currentIndex].answered) {
            setCurrentSelected(userAnswers[currentIndex].answered)
        }    
    }, [examName, currentIndex, clicked]);

    function handleClick(event, item, examName) {
        event.preventDefault();
        const userAnswers = readJSON(Storage.USER_ANSWERS, examName);

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
        put(Storage.USER_ANSWERS, temp, examName);

        setClicked(!clicked);
    }

    return (
        <>
            {answers.map((item, index) => (
                <div className={styles.answerContainer} key={index}>
                    <button
                        onClick={(event) => handleClick(event, item, examName)}
                        disabled={completed}
                        type="button"
                        className={`${styles.container} ${currentSelected.includes(item.text) ? styles.selectedBtn : ''}`}>
                        <span>{INDEX_TO_CHARACTER[index]}</span>
                        <span>{item.text}</span>
                
                    </button>
                    {completed && item.correct && 
                        <span className={styles.correctIndicator}>&#x2B05;</span> }
                </div>
            ))}
        </>
    )
}
