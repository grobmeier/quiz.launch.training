'use client'

import styles from './exam.module.scss'
import { catalogue } from '../../exams-data/catalogue.js'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { Question } from '@/app/ui/question/Question.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { shuffleQtns, setLocalStoragePerExam } from '@/app/lib/Functions.js'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result.
 */

export function ExamWrapper() {
    let {
        allQtns,
        setAllQtns,
        examInProgress,
        isTaken,
        currentIndex,
        setCurrentIndex,
        isTimerExpired,
        setIsTimerExpired,
        setUserAnswers,
    } = useContext(ProgressContext)

    /**
     * Initalization happens here and allQtns is passed to the Provider.
     * That guarantees that the Parent Component has the data on initial load.
     */
    const pathname = usePathname()

    let examName = '';
    const match = pathname.match(/\/([a-zA-Z0-9-]+)\/$/);
    if (match) {
        examName = match[1];
    } else {
        examName = 'java-arrays';
    }
   
    const [allExamQtns, setAllExamQtns] = useState([])
    const [exam, setExam] = useState(null);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                let examModule = await import(`../../exams-data/${examName}.js`);
                setExam(examModule.default);            
            } catch (error) {
                console.error('Error fetching the exam file:', error);
            }
        };
        fetchExams();
    }, [examName]);

    const filteredExam = catalogue.filter((item) => item.exam === examName)

    /**
     * This initialisation, together with Provider make sure the initial values are properly set
     */

    useEffect(() => {
        function provideInitialQtnsMatrix() {
            // Load all exam info
            let examToCheck = catalogue.filter((i) => i.exam.includes(examName));
            let maxQtnsPerExam = examToCheck[0].maxQuestions;
    
            /**
             * Load all Qtsn and matrix of the calculated answers based on the currentExam
             * value (Java / HTML) into pathname.
             * */
            if (exam) {
                const qtnsIds = shuffleQtns(exam, maxQtnsPerExam);
                setAllQtns(qtnsIds);
            }
        }
    
        // Check if AllQtns are present, that is the trigger to provide inital values for localstorage
        let persistedQtns =
            typeof window !== 'undefined' &&
            localStorage['allQtns'] &&
            JSON.parse(localStorage.getItem('allQtns')).length > 0
        if (!persistedQtns) {
            provideInitialQtnsMatrix()
        }
    }, [exam, examName, setAllQtns, isTaken])

    useEffect(() => {
        // Check if there is exam in progress, if one is found in the localstorage no effect
        let persistedExam =
            localStorage['currentExam'] &&
            JSON.parse(localStorage.getItem('currentExam'));

        if (persistedExam !== '') {
            return
        }
        typeof window !== 'undefined' && localStorage.setItem('currentIndex', JSON.stringify(0));
        typeof window !== 'undefined' && localStorage.setItem('examTaken', JSON.stringify(0));
        setIsTimerExpired(false);
        setCurrentIndex(0);
    }, [setCurrentIndex, setIsTimerExpired, examInProgress]);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        /**
         * Here we update the inital Matrix according to the most recent allQtns
         */
        let persistedQtns =
            typeof window !== 'undefined' &&
            localStorage['currentExam'] &&
            JSON.parse(localStorage.getItem('currentExam')) !== ''
        // During the exam allExamQtns is kept in localstorage. Values are taken from there
        if (persistedQtns) {
            let persistedAllExamQtns = typeof window !== 'undefined' && localStorage['allExamQtns']
            console.log(persistedAllExamQtns);
            setAllExamQtns(JSON.parse(persistedAllExamQtns))
        }

        if (!persistedQtns) {
            const { tmpAllExamQtns, userTmpAnswers } = setLocalStoragePerExam(exam, allQtns);
            setAllExamQtns(tmpAllExamQtns);
            setUserAnswers(userTmpAnswers);
        }
    }, [exam, setUserAnswers, allQtns])

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (isClient && examInProgress === '') {
        return (
            <>
                <h3>{filteredExam.title}</h3>
                <ExamMainScreen
                    title={filteredExam[0].title}
                    rating={filteredExam[0].rating}
                    exam={filteredExam[0].exam}
                    fullDescription={filteredExam[0].fullDescription}
                />
            </>
        )
    } else {
        if (isTaken) {
            return (
                <main className={styles.main}>
                    {!isTimerExpired ? (
                        <h3>Congratulations</h3>
                    ) : (
                        <h3>Your time was up - here are your results</h3>
                    )}
                    <ResultBox />
                    <div className={styles.btnsArea}>
                        <TryAgainButton />
                        <DoneButton />
                    </div>
                </main>
            )
        }

        return (
            <main className={styles.main}>
                {!isClient | !allExamQtns ? (
                    <div>Loading ....</div>
                ) : (
                    <Question
                        questionInfo={
                            allExamQtns &&
                            allExamQtns.length &&
                            allExamQtns[currentIndex]
                        }
                    />
                )}
            </main>
        )
    }
}
