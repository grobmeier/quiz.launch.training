'use client'

import styles from './exam.module.scss'
import { catalogue } from '../../exams-data/catalogue.js'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState, useEffect, useContext } from 'react'
import { QuestionDeck } from '@/app/ui/question/QuestionDeck.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { usePathname } from 'next/navigation'
import { shuffleExamAnswers, prepareResponse } from '@/app/lib/Functions.js'
import { Storage, readJSON, put } from '@/app/lib/Storage.js'

export function ExamWrapper() {
    const pathname = usePathname();
    let [run, setRun] = useState(false);
    let [finish, setFinish] = useState(false);
    
    let examName = 'java-arrays'
    const match = pathname.match(/\/([a-zA-Z0-9-]+)\/$/)
    if (match) {
        examName = match[1];
    } 
    
    useEffect(() => {
        const prepareExam = async () => {
            const examModule = await import(`../../exams-data/${examName}.js`);
            const examData = examModule.default;
            const examQuestions = shuffleExamAnswers(examData);
            const responses = prepareResponse(examData);

            put(Storage.EXAM_QUESTIONS, examQuestions, examName);
            put(Storage.USER_ANSWERS, responses, examName);
            put(Storage.CURRENT_INDEX, 0, examName);
        }

        prepareExam();
    }, [examName]);

    function finishExam() {
        setFinish(true);
    }

    const catalogueExam = catalogue.find((item) => item.exam === examName)

    if (readJSON(Storage.START_TIME, examName) === null) {
        return (
            <>
                <ExamMainScreen
                    title={catalogueExam?.title}
                    exam={catalogueExam?.exam}
                    fullDescription={catalogueExam?.fullDescription}
                    startFn={() => {
                        let startTime = new Date().toISOString();
                        put(Storage.START_TIME, {startTime}, examName);
                        setRun(true); // for regenerating view
                    }}
                />
            </>
        )
    } else {
        if (finish && readJSON(Storage.EXAM_TAKEN)) {
            return (
                <main className={styles.main}>
                    <h3>Congratulations</h3>
                    
                    <ResultBox />
                    <div className={styles.btnsArea}>
                        <TryAgainButton />
                        <DoneButton />
                    </div>
                </main>
            )
        }

        let questions = readJSON(Storage.EXAM_QUESTIONS, examName);
        return (
            <main className={styles.main}>
                {questions == null || questions.length === 0 ? (
                    <div>Loading ....</div>
                ) : (
                    <QuestionDeck examName={examName} finishExam={finishExam}/>
                )}
            </main>
        )
    }
}
