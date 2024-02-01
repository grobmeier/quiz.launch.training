'use client'

/**
 * Checking the answers by ID so that in the future this is dynamic
 */

import { useEffect, useContext, useState } from 'react'
import styles from './AllAnswers.module.scss'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { javaExam } from '../../exams-data/java.js'
import { htmlExam } from '../../exams-data/html.js'
import { CodeBlock, dracula } from 'react-code-blocks'
import Image from 'next/image'
import { ResultOption } from '@/app/ui/result/ResultOption'

export function AllAnswers() {
    let { allQtns, examInProgress } = useContext(ProgressContext)

    let takenQtns = []

    // Have to duplicate the logic from Provider to see which is the current exam evaluated

    if (examInProgress === 'java') {
        takenQtns = javaExam.filter((item) => allQtns.includes(item.id))
    }
    if (examInProgress === 'html') {
        takenQtns = htmlExam.filter((item) => allQtns.includes(item.id))
    }

    // console.log(userAnswers)

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
                    <ResultOption answers={item.answers} id={index} />
                    <div className={styles.explanationBox}>
                        <h3>Explanation</h3>
                        <p>{item.explanation}</p>
                    </div>
                </div>
            ))}
        </main>
    )
}
