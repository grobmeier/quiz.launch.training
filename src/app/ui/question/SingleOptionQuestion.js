import { AnswerOptions } from './AnswerOptions'
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

    return <AnswerOptions answers={answers} selected={currentSelected} completed={completed}
        onSelect={(event, index) => handleClick(event, answers[index], examName)} />;
}
