'use client'

import styles from './exam.module.scss'
import React, { useState, useEffect, useContext } from 'react'
import { QuestionDeck } from '@/app/ui/question/QuestionDeck.js'
import { ResultBox } from '@/app/ui/result/ResultBox'
import { TryAgainButton } from '@/app/ui/TryAgainButton'
import { DoneButton } from '@/app/ui/DoneButton'
import { usePathname } from 'next/navigation'
import { shuffleExamAnswers, prepareResponse } from '@/app/lib/Functions.js'
import { Storage, readJSON, read, put } from '@/app/lib/Storage.js'

export function ExamWrapper() {
    const pathname = usePathname();
    let [run, setRun] = useState(false);
        
    let examName = 'java-arrays'
    const match = pathname.match(/\/([a-zA-Z0-9-]+)\/$/)
    if (match) {
        examName = match[1];
    } 
    
    let [finish, setFinish] = useState(read(Storage.EXAM_TAKEN, examName, false));
    
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
    }, [examName]);

    function finishExam() {
        setFinish(true);
    }

    // Finished deck
    if (finish) {
        return (
            <main className={styles.main}>
                <h3>Congratulations</h3>
                
                <ResultBox examName={examName} />
                <div className={styles.btnsArea}>
                    <TryAgainButton />
                    <DoneButton />
                </div>
            </main>
        )
    }

    // Restarting deck or starting
    let questions = readJSON(Storage.EXAM_QUESTIONS, examName);
    return (
        <main className={styles.main}>
            {questions == null || questions.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <QuestionDeck examName={examName} finishExam={finishExam}/>
            )}
        </main>
    )
}
