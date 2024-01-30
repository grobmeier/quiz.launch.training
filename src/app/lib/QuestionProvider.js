'use client'

import { createContext, useState, useEffect } from 'react'
import { javaExam } from '../exams-data/java.js'
import { htmlExam } from '../exams-data/html.js'

/**
 * Note the dynamic array should be passed by the page / initial loading
 * of the question. TBD - temporary solution mimic the existing qtns for
 * inserting the answers. May come from database
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
    const maxQtns = 3
    let allQtns = []
    let userTmpAnswers = ''

    const examName =
        typeof window !== 'undefined' &&
        JSON.parse(localStorage.getItem('currentExam'))
    // console.log('here' + examName)

    // Load all exams questions

    const firstJavaQtns = javaExam.slice(0, maxQtns)
    const allJavaQtns = firstJavaQtns.map((p) => p.id)
    const javaTmpAnswers = firstJavaQtns.map(({ id }) => ({
        id: 'java-' + id,
        calculatedPoints: 0,
        answered: [],
    }))

    const firstHtmlQtns = htmlExam.slice(0, maxQtns)
    const allHtmlQtns = firstHtmlQtns.map((p) => p.id)
    const htmlTmpAnswers = firstJavaQtns.map(({ id }) => ({
        id: 'html-' + id,
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

    if (Object.keys({ htmlExam })[0] === examName + 'Exam') {
        allQtns = allHtmlQtns
        userTmpAnswers = JSON.stringify(htmlTmpAnswers)
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
            typeof window !== 'undefined' &&
            localStorage['userAnswers'] &&
            JSON.parse(localStorage.getItem('userAnswers')) === null &&
            typeof window !== 'undefined' &&
            localStorage['currentIndex'] &&
            JSON.parse(localStorage.getItem('currentIndex')) === null
            // JSON.parse(localStorage.getItem('examTaken')) === 0
        ) {
            // console.log('is Triggered')
            setInitialValues()
        }
    }, [])

    // Persist the state by checking the localstorage userAnswers value
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
        let currentVersion = JSON.parse(
            localStorage.getItem('userAnswers'),
        )[0].id.includes(examName)

        // Note passing of the below value to update the current initial version of the Exam matrix
        setUserInitialAnswers(userTmpAnswers)
        if (!localStorage['userAnswers'] || !currentVersion) {
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
