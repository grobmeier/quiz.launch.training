'use client'

/**
 * Checking the answers by ID so that in the future this is dynamic
 */

import { useContext } from 'react'
import styles from './AllAnswers.module.scss'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { CodeBlock, dracula } from 'react-code-blocks'
import Image from 'next/image'
import { ResultOption } from '@/app/ui/result/ResultOption'

export function AllAnswers() {
    let { isTimerExpired, seenQtns } = useContext(ProgressContext)

    let takenQtns =
        typeof window !== 'undefined' && JSON.parse(localStorage['allExamQtns'])
    let maxReachedQtns = []

    let userAnswers =
        localStorage['userAnswers'] &&
        JSON.parse(localStorage.getItem('userAnswers'))

    // Coming from timer expired
    if (isTimerExpired) {
        maxReachedQtns = takenQtns.slice(0, seenQtns)
        takenQtns = maxReachedQtns
    }

    // Check which Qtn number corresponds to the answered qtn
    const indexOfQtn = (el) => userAnswers.findIndex((x) => x.id === el.id) + 1

    return (
        <main className={styles.main}>
            {takenQtns.map((item) => (
                <div key={item.id} className={styles.answerContainer}>
                    <h3 className={styles.qtnHeading}>
                        Question {indexOfQtn(item)}
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
                    <h3 className={styles.text}>{item.text}</h3>
                    <ResultOption
                        answers={item.answers}
                        id={indexOfQtn(item) - 1}
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
