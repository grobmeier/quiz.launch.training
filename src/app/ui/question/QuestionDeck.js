'use client'

import styles from './QuestionDeck.module.scss';
import { Topbar } from '@/app/ui/question/Topbar';
import { SingleOptionQuestion } from '@/app/ui/question/SingleOptionQuestion';
import { MultiChoice } from '@/app/ui/question/MultiChoice';
import { CodeBlock, dracula } from 'react-code-blocks';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Storage, read, put, remove, readJSON, removeQuestionDeck } from '@/app/lib/Storage.js';
import { ResultBox } from '@/app/ui/result/ResultBox'
import { DoneButton } from '@/app/ui/DoneButton'

export function QuestionDeck({ examName }) {
    let [question, setQuestion] = useState(null);
    let [answer, setAnswer] = useState(null);
    let [stateIndex, setStateIndex] = useState(readJSON(Storage.CURRENT_INDEX, examName, 0));
    let totalQuestions = readJSON(Storage.USER_ANSWERS, examName).length;
    
    useEffect(() => {
        if (isAfterLastQuestion()) {
            return;
        }
        let questions = readJSON(Storage.EXAM_QUESTIONS, examName);
        let newQuestion = questions[stateIndex];
        setQuestion(newQuestion);
        readAnswer(newQuestion.id, examName);
    }, [examName, stateIndex, isAfterLastQuestion]);

    function handlePrevious(examName) {
        if (stateIndex === 0) {
            return;
        }
        let newIndex = stateIndex - 1;
        put(Storage.CURRENT_INDEX, newIndex, examName);
        setStateIndex(newIndex);
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

    function isAfterLastQuestion() {
        return ((stateIndex + 1) > totalQuestions);
    }

    function handleNext(examName) {
        let newIndex = stateIndex + 1;
        if (newIndex < totalQuestions) {
            put(Storage.CURRENT_INDEX, newIndex, examName);
            setStateIndex(newIndex);
        } else if (newIndex === totalQuestions) {
            put(Storage.EXAM_TAKEN, true, examName);
            put(Storage.CURRENT_INDEX, newIndex, examName);
            setStateIndex(newIndex);
        } else if (newIndex > totalQuestions) {
            put(Storage.CURRENT_INDEX, totalQuestions, examName);
        }
    }

    // Finished deck
    if (isAfterLastQuestion()) {
        return (<main className={styles.main}>
                <h3>Congratulations</h3>
                <ResultBox examName={examName} />
                <div className={styles.btnsArea}>
                    <button
                        className={styles.prevBtn}
                        onClick={() => handlePrevious(examName)}
                        disabled={stateIndex === 0 ? true : false}>
                        Previous
                    </button>
                    <DoneButton />
                </div>
            </main>);
    }

    if (question === null ) {
        return <div>Loading...</div>;
    }

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
                    completed={answer.completed}
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
