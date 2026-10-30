'use client'

import styles from './exam.module.scss'
import React, { useState, useEffect, useContext } from 'react'
import { QuestionDeck } from '@/app/ui/question/QuestionDeck.js'
import { shuffleExamAnswers, prepareResponse } from '@/app/lib/Functions.js'
import { Storage, readJSON, read, put } from '@/app/lib/Storage.js'

export function ExamWrapper({ examName }) {
    let [run, setRun] = useState(false);
        
    useEffect(() => {
        const prepareExam = async () => {
            // New run of the deck
            if (readJSON(Storage.START_TIME, examName) === null) {
                let startTime = new Date().toISOString();
                put(Storage.START_TIME, {startTime}, examName);

                const examModule = await import(`../../exams-data/${examName}.js`);
                const examData = examModule.default;
                const examQuestions = shuffleExamAnswers(examData);
                const responses = prepareResponse(examData);

                put(Storage.EXAM_QUESTIONS, examQuestions, examName);
                put(Storage.USER_ANSWERS, responses, examName);
                put(Storage.CURRENT_INDEX, 0, examName);
                setRun(!run);
            }
        }
 
        prepareExam();
    }, []);

    // Restarting deck or starting
    let questions = readJSON(Storage.EXAM_QUESTIONS, examName);
    return (
        <main id="main-content" className={styles.main}>
            {questions == null || questions.length === 0 ? (<div>Loading...</div>) : (
                <QuestionDeck examName={examName} />
            )}
        </main>
    )
}
