import styles from './MultiChoice.module.css'
import { useContext, useState, useEffect } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useRouter } from 'next/navigation'

export function MultiChoice({ answers, options, id }) {
    let {
        rightAnswers,
        setRightAnswers,
        allQtns,
        currentIndex,
        setCurrentIndex,
        userAnswers,
        setUserAnswers,
    } = useContext(ProgressContext)
    const router = useRouter()
    const [selectedAnswers, setSelectedAnswers] = useState(0)
    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)

    let tempSelected = []

    const maxSelects = options

    // let nextQtn = allQtns[currentIndex + 1]

    const calculateAnswerWeight = (1 / options).toFixed(2)
    let correctChoices = 0

    useEffect(() => {
        if (userAnswers[currentIndex].answered) {
            setCurrentSelected(userAnswers[currentIndex].answered)
        }
    }, [])

    useEffect(() => {
        // tempSelected.push
        // if (userAnswers) setCurrentSelected(userAnswers)
        console.log('user answers', userAnswers)
        console.log('current', currentSelected)
    }, [clicked])

    function handleClick(event, item, index) {
        event.preventDefault()
        setClicked(!clicked)
        if (
            currentSelected.length >= maxSelects &&
            !currentSelected.includes(item.text)
        ) {
            alert('You reached maximum allowed answers')
            return
        }
        // console.log('index', index)
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
        // inserts the selected answers into the global state
        let temp = userAnswers.map((item) =>
            item.id === id
                ? {
                      ...item,
                      answered: currentSelected,
                  }
                : { ...item },
        )

        // let temp = userAnswers.map((item) => ({
        //     ...item,
        //     answered: currentSelected,
        // }))
        // newObj = obj.map((item, i)=>({...item, Data: data[i]}));
        setUserAnswers(temp)
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
            <span>You may pick {maxSelects} answers</span>
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
                    let isCorrect = answers.find(
                        (el) => el.text === item && el.correct === true,
                    )

                    return (
                        <li key={index}>
                            {item} {isCorrect ? 'right' : 'wrong'}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
