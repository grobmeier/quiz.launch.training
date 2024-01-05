'use client'

/**
 * Checking the answers by ID so that in the future this is dynamic
 */

import { useEffect, useContext, useState } from 'react'
import styles from './AllAnswers.module.css'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { languagesExam } from '../../exams-data/data.js'
import { CodeBlock, dracula } from 'react-code-blocks'
import Image from 'next/image'
import { SingleOption } from '@/app/ui/question/SingleOption'
import { MultiChoice } from '@/app/ui/question/MultiChoice'

export function AllAnswers({ answers, id }) {
    let {
        rightAnswers,
        setRightAnswers,
        allQtns,
        currentIndex,
        setCurrentIndex,
        userAnswers,
        setUserAnswers,
    } = useContext(ProgressContext)

    let takenQtns = languagesExam.filter((item) => allQtns.includes(item.id))
    // console.log(takenQtns)

    return (
        <main className={styles.main}>
            {takenQtns.map((item, index) => (
                <div key={item.id}>
                    <h3>Question {index + 1}</h3>
                    {item.type === 'code' && (
                        <CodeBlock
                            text={item.content}
                            language={item.language}
                            showLineNumbers="true"
                            // wrapLines
                            theme={dracula}
                            // codeBlock={true}
                        />
                    )}
                    {item.type === 'image' && (
                        <Image
                            src={item.content}
                            width={680}
                            height={340}
                            alt=""
                        />
                    )}
                    {item.type === 'text' && (
                        <p className={styles.text}>{item.content}</p>
                    )}
                    <h3>{item.text}</h3>
                    {/* {item.correctAnswers === 1 && (
                        <SingleOption answers={item.answers} id={item.id} />
                    )}
                    {item.correctAnswers > 1 && (
                        <MultiChoice
                            options={item.correctAnswers}
                            answers={item.answers}
                            id={item.id}
                        />
                    )} */}
                </div>
            ))}
        </main>
    )
}
