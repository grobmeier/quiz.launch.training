import styles from './MultiChoice.module.css'
import { useContext, useState, useEffect } from 'react'
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
    const [selectedAnswers, setSelectedAnswers] = useState(0)
    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)
    // console.log(clicked)

    // let tempSelected = [33]

    const maxSelects = options

    // let nextQtn = allQtns[currentIndex + 1]

    const calculateAnswerWeight = (1 / options).toFixed(2)
    let correctChoices = 0

    useEffect(() => {
        console.log('current', currentSelected)
    }, [clicked])

    function handleClick(event, item, index) {
        event.preventDefault()
        setClicked(!clicked)
        console.log('index', index)
        let optionToCheck = currentSelected.indexOf(item.text)
        if (optionToCheck === -1) {
            currentSelected.push(item.text)
            // setSelectedAnswers(currentSelected.length)
            setCurrentSelected(currentSelected)
            console.log(`New index collection is: ${currentSelected}`)
        } else {
            currentSelected.splice(optionToCheck, 1)
            // setSelectedAnswers(currentSelected.length)
            setCurrentSelected(currentSelected)
            console.log(`New index collection is: ${currentSelected}`)
        }
        // if (item.correct) {
        //     correctChoices += parseFloat(calculateAnswerWeight)
        // }
        // console.log(correctChoices)
        // if (correct) {
        //     setRightAnswers(rightAnswers + 1)
        // }
        // setCurrentSelected(currentSelected)
        // setSelectedAnswers(currentSelected.length)
        // router.push(`/questions/${nextQtn}`)
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        <>
            <h3>Single Correct Weight: {calculateAnswerWeight}</h3>
            <h3>Correct: {correctChoices}</h3>
            {/* <h3>Selected: {selectedAnswers}</h3> */}
            <h3>Currently selected: {currentSelected}</h3>
            {answers.map((item, index) => (
                <button
                    key={index}
                    onClick={(event) => handleClick(event, item, index)}
                    // onClick={() => setClicked(!clicked)}
                    type="button"
                    // className={styles.container}
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
            <ul>
                {currentSelected.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </>
    )
}
