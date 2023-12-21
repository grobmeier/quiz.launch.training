import styles from './SingleOption.module.css'
import { useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useRouter } from 'next/navigation'

export function MultiChoice({ answers, options }) {
    let {
        rightAnswers,
        setRightAnswers,
        allQtns,
        currentIndex,
        setCurrentIndex,
    } = useContext(ProgressContext)
    const router = useRouter()
    let nextQtn = allQtns[currentIndex + 1]

    const calculateAnswerWeight = (1 / options).toFixed(2)
    let correctChoices = 0

    function handleClick(event, item) {
        event.preventDefault()
        if (item.correct) {
            correctChoices += parseFloat(calculateAnswerWeight)
        }
        // console.log(event)
        console.log(correctChoices)
        // if (correct) {
        //     setRightAnswers(rightAnswers + 1)
        // }
        // setCurrentIndex(currentIndex + 1)
        // router.push(`/questions/${nextQtn}`)
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        <>
            <h3>{calculateAnswerWeight}</h3>
            <h3>{correctChoices}</h3>
            {answers.map((item, index) => (
                <button
                    key={index}
                    onClick={(event) => handleClick(event, item)}
                    type="button"
                    className={styles.container}
                >
                    <span>{indexToCharacter[index]}</span>
                    <span>{item.text}</span>
                </button>
            ))}
        </>
    )
}
