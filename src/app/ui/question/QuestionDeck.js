'use client'

import styles from './QuestionDeck.module.scss';
import { Topbar } from '@/app/ui/question/Topbar';
import { SingleOptionQuestion } from '@/app/ui/question/SingleOptionQuestion';
import { MultiChoice } from '@/app/ui/question/MultiChoice';
import { CodeBlock, dracula } from 'react-code-blocks';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Storage, read, put, remove, readJSON } from '@/app/lib/Storage.js';

export function QuestionDeck({ examName, finishExam }) {
    
    let [question, setQuestion] = useState(null);
    let [answer, setAnswer] = useState(null);

    const loadQuestion = useCallback((examName) => {
        let questions = readJSON(Storage.EXAM_QUESTIONS, examName);
        let currentIndex = readJSON(Storage.CURRENT_INDEX, examName);
        const question = questions[currentIndex];
        setQuestion(question);
        readAnswer(question.id, examName);
    }, []);

    function handlePrevious(examName) {
        let currentIndex = readJSON(Storage.CURRENT_INDEX, examName);
        if (currentIndex === 0) {
            return;
        }
        put(Storage.CURRENT_INDEX, currentIndex - 1, examName);
        loadQuestion(examName);
    }

    function handleResponse(questionId, examName) {
        let userAnswers = readJSON(Storage.USER_ANSWERS, examName);
        
        userAnswers.forEach(element => {
            if (element.id === questionId) {
                element.completed = true;
            } 
        });
            
        put(Storage.USER_ANSWERS, userAnswers, examName);
        readAnswer(questionId, examName);
    }

    function readAnswer(questionId, examName) {
        let userAnswers = readJSON(Storage.USER_ANSWERS, examName);
        
        const userAnswer = userAnswers.find(element => {
            if (element.id === questionId) {
                return element;
            } 
        });

        setAnswer(userAnswer);
    }

    function handleNext(examName) {
        let currentIndex = readJSON(Storage.CURRENT_INDEX, examName);

        currentIndex = currentIndex + 1;

        if (currentIndex < totalQuestions) {
            put(Storage.CURRENT_INDEX, currentIndex, examName);
        } else {
            put(Storage.EXAM_TAKEN, 1, examName);
            put(Storage.CURRENT_INDEX, 0, examName);
            remove(Storage.END_DATE, examName);
            finishExam();
        }
        
        loadQuestion(examName);
    }

    useEffect(() => loadQuestion(examName), [loadQuestion, examName]);

    if (!question || !answer) {
        return <p>Loading...</p>;
    }

    let totalQuestions = readJSON(Storage.USER_ANSWERS, examName).length;
    const { id, content, language, text, answers, type, correctAnswers } = question;
    
    return (

        <main className={styles.main}>
            <Topbar examName={examName} />
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
            {correctAnswers === 1 && 
                <SingleOptionQuestion examName={examName} completed={answer.completed} answers={answers} id={id} />}
            {correctAnswers > 1 && (
                <MultiChoice
                    completed={completed}
                    examName={examName}
                    options={correctAnswers}
                    answers={answers}
                    id={id}
                />
            )}
            {answer.completed && 
                <div className={styles.explanation}>
                    <h3>Explanation</h3>
                    <div>
                        {question.explanation}
                    </div>
                </div>
            }
            <div className={styles.btnsContainer}>
                <div>
                    <button
                        className={styles.prevBtn}
                        onClick={() => handlePrevious(examName)}
                        disabled={read(Storage.CURRENT_INDEX, examName) === 0 ? true : false}>
                        Previous
                    </button>
                </div>
                {!answer.completed && 
                    <div>
                        <button className={styles.nextBtn} onClick={() => handleResponse(id, examName)}>
                            Respond
                        </button>
                    </div>
                }
                {answer.completed && 
                    <div>
                        <button className={styles.nextBtn} onClick={() => handleNext(examName)}>
                            Next Question
                        </button>
                    </div>
                }
            </div>
        </main>
    )
}
