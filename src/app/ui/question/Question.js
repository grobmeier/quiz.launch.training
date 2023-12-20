'use client'

import styles from './question.module.css'
import { Topbar } from '@/app/ui/question/Topbar'
import { SingleOption } from '@/app/ui/question/SingleOption'
import { Button } from '@/app/ui/Button'
import { CodeBlock, dracula } from 'react-code-blocks'
import { useContext } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'
import { useRouter } from 'next/navigation'

export function Question({ questionInfo }) {
    const { id, content, language, text, answers } = questionInfo
    let { rightAnswers, allQtns, currentIndex, setCurrentIndex } =
        useContext(ProgressContext)
    const router = useRouter()

    let previousQtn = allQtns[currentIndex - 1]
    let nextQtn = allQtns[currentIndex + 1]

    function handlePrevious() {
        // needs to lower the index
        if (currentIndex === 0) return
        setCurrentIndex(currentIndex - 1)
        router.push(`/questions/${previousQtn}`)
    }
    function handleNext() {
        setCurrentIndex(currentIndex + 1)
        router.push(`/questions/${nextQtn}`)
    }
    console.log(rightAnswers)

    return (
        <main className={styles.main}>
            <h5>{rightAnswers}</h5>
            <h5>Index: {currentIndex}</h5>
            <Topbar />
            <CodeBlock
                text={content}
                language={language}
                showLineNumbers="true"
                // wrapLines
                theme={dracula}
                // codeBlock={true}
            />
            <h3>{text}</h3>
            {answers.map((item, index) => (
                <SingleOption
                    key={item.text}
                    qtnIndex={index}
                    text={item.text}
                    correct={item.correct}
                />
            ))}
            <div>
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0 ? true : false}
                >
                    PREV
                </button>
                <button onClick={handleNext}>NEXT</button>
                {allQtns[2]}
            </div>

            {/* <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div> */}
        </main>
    )
}
