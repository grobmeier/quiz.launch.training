'use client'

import { createContext, useState, useEffect } from 'react'
import { javaExam } from '../exams-data/java.js'

/**
 * Note the dynamic array should be passed by the page / initial loading
 * of the question. TBD - temporary solution mimic the existing qtns for
 * inserting the answers
 */

export const ProgressContext = createContext()

export function QuestionProvider({ children }) {
    // const getInitialState = () => {
    //     let progress = localStorage.getItem('currentIndex')
    //     return progress ? JSON.parse(progress) : 0
    // }

    const [currentIndex, setCurrentIndex] = useState(0)
    const [examInProgress, setExamInProgress] = useState('')
    const [isTaken, setIsTaken] = useState(false)
    const maxQtns = 5
    let allQtns = []
    let userTmpAnswers = ''

    const examName = JSON.parse(localStorage.getItem('currentExam'))
    // console.log('here' + examName)

    // Load all exams questions

    const firstJavaQtns = javaExam.slice(0, maxQtns)
    const allJavaQtns = firstJavaQtns.map((p) => p.id)
    const javaTmpAnswers = firstJavaQtns.map(({ id }) => ({
        id: 'java-' + id,
        calculatedPoints: 0,
        answered: [],
    }))

    /**
     * Load all Qtsn and matrix of the calculated answers based on the currentExam
     * value (Java / HTML) form localstorage.
     * */

    if (Object.keys({ javaExam })[0] === examName + 'Exam') {
        allQtns = allJavaQtns
        userTmpAnswers = JSON.stringify(javaTmpAnswers)
    }

    // The variable below is needed for Try Again button, to keep a snapshot of the initial moment
    const [userInitialAnswers, setUserInitialAnswers] = useState(userTmpAnswers)
    const [userAnswers, setUserAnswers] = useState(userTmpAnswers)

    //Provide the structure and the questions with initial empty answers
    function setInitialValues() {
        localStorage.setItem('userAnswers', userTmpAnswers)
        localStorage.setItem('currentIndex', JSON.stringify(0))
        localStorage.setItem('examTaken', JSON.stringify(0))
    }
    useEffect(() => {
        if (
            localStorage['userAnswers'] &&
            JSON.parse(localStorage.getItem('userAnswers')) === null &&
            JSON.parse(localStorage.getItem('currentIndex')) === null
            // JSON.parse(localStorage.getItem('examTaken')) === 0
        ) {
            console.log('is Triggered')
            setInitialValues()
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('userAnswers') === null) {
            setInitialValues()
        }
        let progress = localStorage.getItem('currentIndex')
        let qtnsAnswers = localStorage.getItem('userAnswers')
        setCurrentIndex(JSON.parse(progress))
        localStorage['userAnswers'] && setUserAnswers(JSON.parse(qtnsAnswers))
        // console.log(userAnswers)
    }, [currentIndex])

    useEffect(() => {
        setExamInProgress(examName)
        if (!localStorage['userAnswers']) {
            localStorage.setItem('userAnswers', userTmpAnswers)
        }
    }, [examName])

    return (
        <ProgressContext.Provider
            value={{
                allQtns,
                currentIndex,
                setCurrentIndex,
                userAnswers,
                setUserAnswers,
                isTaken,
                setIsTaken,
                userInitialAnswers,
                examInProgress,
            }}
        >
            {children}
        </ProgressContext.Provider>
    )
}
