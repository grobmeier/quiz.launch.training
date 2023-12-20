import styles from './SingleOption.module.css'
import { createContext, useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useRouter } from 'next/navigation'

export function SingleOption({ text, correct, qtnIndex }) {
    let {
        rightAnswers,
        setRightAnswers,
        allQtns,
        currentIndex,
        setCurrentIndex,
    } = useContext(ProgressContext)
    const router = useRouter()
    let nextQtn = allQtns[currentIndex + 1]

    console.log('state', allQtns)

    function handleClick(event) {
        event.preventDefault()
        if (correct) {
            setRightAnswers(rightAnswers + 1)
        }
        setCurrentIndex(currentIndex + 1)
        router.push(`/questions/${nextQtn}`)
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        <button
            onClick={handleClick}
            type="button"
            className={styles.container}
        >
            <span>{indexToCharacter[qtnIndex]}</span>
            <span>{text}</span>
        </button>
    )
}
