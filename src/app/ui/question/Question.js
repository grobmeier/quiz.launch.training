'use client'

import styles from './Question.module.scss';
import { Topbar } from '@/app/ui/question/Topbar';
import { SingleOption } from '@/app/ui/question/SingleOption';
import { MultiChoice } from '@/app/ui/question/MultiChoice';
import { CodeBlock, dracula } from 'react-code-blocks';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Storage, read, put, remove, readJSON } from '@/app/lib/Storage.js';

export function Question({ finishExam }) {
    
    let [question, setQuestion] = useState(null);

    function loadQuestion() {
        let questions = readJSON(Storage.EXAM_QUESTIONS);
        let currentIndex = readJSON(Storage.CURRENT_INDEX);
        setQuestion(questions[currentIndex]);
    }    

    function handlePrevious() {
        let currentIndex = readJSON(Storage.CURRENT_INDEX);
        if (currentIndex === 0) {
            return;
        }
        put(Storage.CURRENT_INDEX, currentIndex - 1);
        loadQuestion();
    }

    function handleNext() {
        let currentIndex = readJSON(Storage.CURRENT_INDEX);

        currentIndex = currentIndex + 1;

        if (currentIndex < totalQuestions) {
            put(Storage.CURRENT_INDEX, currentIndex);
        } else {
            put(Storage.EXAM_TAKEN, 1);
            put(Storage.CURRENT_INDEX, 0);
            remove(Storage.END_DATE);
            finishExam();
        }
        
        loadQuestion();
    }

    useEffect(() => {
        // TODO: reuse the function loadQuestion?
        let questions = readJSON(Storage.EXAM_QUESTIONS);
        let currentIndex = readJSON(Storage.CURRENT_INDEX);
        setQuestion(questions[currentIndex]);
    }, []);

    if (!question) {
        return <p>Loading...</p>;
    }

    const { id, content, language, text, answers, type, correctAnswers } = question;
    
    let totalQuestions = readJSON(Storage.USER_ANSWERS).length

    return (

        <main className={styles.main}>
            <Topbar />
            {type === 'code' && (
                <div className={styles.codeContainer}>
                    <CodeBlock
                        text={content}
                        language={language}
                        showLineNumbers="true"
                        theme={dracula}
                    />
                </div>
            )}
            {type === 'image' && content && (
                <Image
                    src={content}
                    width={680}
                    height={340}
                    alt=""
                    placeholder="blur"
                    blurDataURL={content}
                />
            )}
            {type === 'text' && <p className={styles.text}>{content}</p>}
            {type === '' && <p></p>}
            <h3 className={styles.text}>{text}</h3>
            {correctAnswers === 1 && <SingleOption answers={answers} id={id} />}
            {correctAnswers > 1 && (
                <MultiChoice
                    options={correctAnswers}
                    answers={answers}
                    id={id}
                />
            )}
            <div className={styles.btnsContainer}>
                <div>
                    <button
                        className={styles.prevBtn}
                        onClick={handlePrevious}
                        disabled={read(Storage.CURRENT_INDEX) === 0 ? true : false}>
                        Previous
                    </button>
                </div>
                <div>
                    <button className={styles.nextBtn} onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </main>
    )
}
