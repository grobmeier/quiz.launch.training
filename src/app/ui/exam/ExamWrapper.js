'use client'

import styles from './exam.module.scss'
import { catalogue } from '../../exams-data/catalogue.js'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState, useEffect, useContext } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { Question } from '@/app/ui/question/Question.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { usePathname } from 'next/navigation'
import { shuffleQuestions as shuffleQuestions, readQuestionAndResponses } from '@/app/lib/Functions.js'
import { Storage, read, readJSON, put } from '@/app/lib/Storage.js'

export function ExamWrapper() {
    const {
        allQtns,
        setAllQuestions,
        examInProgress,
        isTaken,
        currentIndex,
        setCurrentIndex,
        isTimerExpired,
        setIsTimerExpired,
        setUserAnswers,
        setExamInProgress,
        setSeenQtns
    } = useContext(ProgressContext)

    const pathname = usePathname();
    const [examQuestions, setExamQuestions] = useState([]);
    const [examData, setExamData] = useState(null);
    const [isExamLoaded, setIsExamLoaded] = useState(false);
    const [isClient, setIsClient] = useState(false);
    let [finish, setFinish] = useState(false);
    
    let examName = 'java-arrays'
    const match = pathname.match(/\/([a-zA-Z0-9-]+)\/$/)
    if (match) {
        examName = match[1]
    } 
    
    useEffect(() => {
        
        const selectQuestionId = (examData) => {
            const catalogueExam = catalogue.find((item) => item.exam === examName);
            const maxQuestions = catalogueExam ? catalogueExam.maxQuestions : 0;
            return shuffleQuestions(examData, maxQuestions);
        }

        const createQuestionsAndResponses = (examData, questionIds) => {
            const { examQuestions, responses } = readQuestionAndResponses(examData, questionIds);
            put(Storage.EXAM_QUESTIONS, examQuestions);
            put(Storage.USER_ANSWERS, responses);
            // setExamQuestions(examQuestions);
            // setUserAnswers(responses);
        }
        
        const prepareExam = async () => {
            try {
                const examModule = await import(`../../exams-data/${examName}.js`);
                let questionIds = selectQuestionId(examModule.default);
                createQuestionsAndResponses(examModule.default, questionIds)
                setExamData(examModule.default);
                setIsExamLoaded(true);
                put(Storage.CURRENT_INDEX, 0);
            } catch (error) {
                console.error('Error fetching the exam file:', error);
            }
        }

        prepareExam();

    }, [examName, setAllQuestions, setUserAnswers, setCurrentIndex]);

    function finishExam() {
        setFinish(true);
    }   

    useEffect(() => {
        setIsClient(true)
    }, [])

    const filteredExam = catalogue.find((item) => item.exam === examName)

    if (isClient && examInProgress === '') {
        return (
            <>
                <h3>{filteredExam?.title}</h3>
                <ExamMainScreen
                    title={filteredExam?.title}
                    rating={filteredExam?.rating}
                    exam={filteredExam?.exam}
                    fullDescription={filteredExam?.fullDescription}
                />
            </>
        )
    } else {
        if (finish && readJSON(Storage.EXAM_TAKEN)) {
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

        let questions = readJSON(Storage.EXAM_QUESTIONS);
        return (
            <main className={styles.main}>
                {!isClient || questions.length === 0 ? (
                    <div>Loading ....</div>
                ) : (
                    <Question finishExam={finishExam}/>
                )}
            </main>
        )
    }
}
