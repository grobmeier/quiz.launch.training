'use client'

import styles from './AllAnswers.module.scss'
import { CodeBlock, dracula } from 'react-code-blocks'
import Image from 'next/image'
import { ResultOption } from '@/app/ui/result/ResultOption'
import { Storage, read, readJSON, put } from '@/app/lib/Storage.js'

export function AllAnswers() {

    let examQuestions = readJSON(Storage.EXAM_QUESTIONS);
    let userAnswers = readJSON(Storage.USER_ANSWERS);

    // Check which question number corresponds to the answered question
    const questionIndex = (el) => userAnswers.findIndex((x) => x.id === el.id) + 1

    return (
        <main className={styles.main}>
            {examQuestions.map((item) => (
                <div key={item.id} className={styles.answerContainer}>
                    <h3 className={styles.qtnHeading}>
                        Question {questionIndex(item)}
                    </h3>
                    {item.type === 'code' && (
                        <div className={styles.codeContainer}>
                            <CodeBlock
                                text={item.content}
                                language={item.language}
                                showLineNumbers="true"
                                theme={dracula}
                            />
                        </div>
                    )}
                    {item.type === 'image' && (
                        <Image src={item.content} width={680} height={340} alt="" />
                    )}
                    {item.type === 'text' && (
                        <p className={styles.text}>{item.content}</p>
                    )}
                    <h3 className={styles.text}>{item.text}</h3>
                    <ResultOption
                        answers={item.answers}
                        id={questionIndex(item) - 1}
                    />
                    <div className={styles.explanationBox}>
                        <h3>Explanation</h3>
                        <p>{item.explanation}</p>
                    </div>
                </div>
            ))}
        </main>
    )
}
