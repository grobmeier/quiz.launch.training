import styles from './SingleOption.module.css'
import { createContext, useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useRouter } from 'next/navigation'

export function SingleOption({ text, correct, qtnIndex }) {
    let { rightAnswers, setRightAnswers } = useContext(ProgressContext)
    const router = useRouter()

    function handleClick(event) {
        event.preventDefault()
        if (correct) {
            setRightAnswers(rightAnswers + 1)
            router.push('/questions/1')
        }
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        <div onClick={handleClick} type="button" className={styles.container}>
            <span>{indexToCharacter[qtnIndex]}</span>
            <span>{text}</span>
        </div>
    )
}
