import styles from './SingleOption.module.css'
import { useEffect, useContext, useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useRouter } from 'next/navigation'

export function SingleOption({ answers, id }) {
    let {
        allQtns,
        currentIndex,
        setCurrentIndex,
        userAnswers,
        setUserAnswers,
    } = useContext(ProgressContext)
    const router = useRouter()
    let nextQtn = allQtns[currentIndex + 1]

    const [currentSelected, setCurrentSelected] = useState([])
    const [clicked, setClicked] = useState(false)

    // console.log('state', allQtns)

    useEffect(() => {
        const progress = localStorage.getItem('userAnswers')
        const progressParsed = JSON.parse(progress)
        // console.log('parsed', progressParsed)
        if (
            progressParsed &&
            progressParsed[currentIndex] &&
            progressParsed[currentIndex].answered
        ) {
            setCurrentSelected(progressParsed[currentIndex].answered)
        }
    }, [userAnswers])

    useEffect(() => {
        // userAnswers[currentIndex].answered = currentSelected
        // setUserAnswers(userAnswers)

        console.log('user answers', userAnswers)
        console.log('current', currentSelected)
    }, [clicked])

    function handleClick(event, item) {
        event.preventDefault()
        // console.log('intial selected', currentSelected)

        setClicked(!clicked)
        let tempSelected = []

        if (currentSelected.includes(item.text)) {
            if (item.correct) {
                userAnswers[currentIndex].calculatedPoints = 0
            }
            currentSelected[0] = ''
            setCurrentSelected(currentSelected)
            console.log(`New single choice:  ${currentSelected}`)
        } else {
            currentSelected[0] = item.text
            if (item.correct) {
                userAnswers[currentIndex].calculatedPoints = 1
            } else {
                userAnswers[currentIndex].calculatedPoints = 0
            }
            console.log(`New single option: ${currentSelected}`)
            setCurrentSelected(currentSelected)
        }

        // inserts the selected answers into the global state (local storage)
        let temp = userAnswers.map((item) =>
            item.id === id
                ? {
                      ...item,
                      answered: currentSelected,
                  }
                : { ...item },
        )
        localStorage.setItem('userAnswers', JSON.stringify(temp))
        // setUserAnswers(temp)
    }

    const indexToCharacter = ['A', 'B', 'C', 'D', 'E', 'F']

    return (
        <>
            {answers.map((item, index) => (
                <button
                    onClick={(event) => handleClick(event, item)}
                    key={index}
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
