'use client'

import styles from './Question.module.css'
import { Topbar } from '@/app/ui/question/Topbar'
import { SingleOption } from '@/app/ui/question/SingleOption'
import { MultiChoice } from '@/app/ui/question/MultiChoice'
import { CodeBlock, dracula } from 'react-code-blocks'
import { useContext } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function Question({ questionInfo }) {
    const { id, content, language, text, answers, type, correctAnswers } =
        questionInfo
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
            <h5>Right answers: {rightAnswers}</h5>
            <h5>Index: {currentIndex}</h5>
            <h5>Multichoice: {correctAnswers.toString()}</h5>
            <Topbar />
            {type === 'code' && (
                <CodeBlock
                    text={content}
                    language={language}
                    showLineNumbers="true"
                    // wrapLines
                    theme={dracula}
                    // codeBlock={true}
                />
            )}
            {type === 'image' && (
                <Image src={content} width={680} height={340} alt="" />
            )}
            {type === 'text' && <p className={styles.text}>{content}</p>}
            <h3>{text}</h3>
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
                        disabled={currentIndex === 0 ? true : false}
                    >
                        PREV
                    </button>
                </div>
                <div>
                    <button className={styles.nextBtn} onClick={handleNext}>
                        NEXT
                    </button>
                </div>
            </div>

            {/* <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div> */}
        </main>
    )
}
