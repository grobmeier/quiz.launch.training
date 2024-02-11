'use client'

import styles from './Question.module.scss'
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
    let { allQtns, currentIndex, setCurrentIndex, examInProgress } =
        useContext(ProgressContext)
    const router = useRouter()

    let totalQtns = allQtns.length
    let previousQtn = allQtns[currentIndex - 1]
    let nextQtn = allQtns[currentIndex + 1]

    function handlePrevious() {
        if (currentIndex === 0) return
        setCurrentIndex(currentIndex - 1)
        localStorage.setItem('currentIndex', JSON.stringify(currentIndex - 1))
        router.push(`/questions/${examInProgress}-${previousQtn}`)
    }
    function handleNext() {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex < totalQtns - 1) {
            localStorage.setItem(
                'currentIndex',
                JSON.stringify(currentIndex + 1),
            )
            router.push(`/questions/${examInProgress}-${nextQtn}`)
        } else {
            localStorage.setItem('examTaken', JSON.stringify(1))
            setCurrentIndex(0)
            router.push('/results')
        }
    }

    return (
        <main className={styles.main}>
            {/* <h5>Index: {currentIndex}</h5>
            <h5>Multichoice: {correctAnswers.toString()}</h5> */}
            <Topbar />
            {type === 'code' && (
                <div className={styles.codeContainer}>
                    <CodeBlock
                        text={content}
                        language={language}
                        showLineNumbers="true"
                        // wrapLines
                        theme={dracula}
                        // codeBlock={true}
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
        </main>
    )
}
