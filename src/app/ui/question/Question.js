'use client'

import styles from './question.module.css'
import { Topbar } from '@/app/ui/question/Topbar'
import { SingleOption } from '@/app/ui/question/SingleOption'
import { CodeBlock, dracula } from 'react-code-blocks'
import { createContext, useContext, useState } from 'react'

// export const ProgressContext = createContext()

import { ProgressContext } from '@/app/lib/QuestionProvider.js'

// export function QuestionProvider({ children }) {
//     const [rightAnswers, setRightAnswers] = useState(0)

//     return (
//         <ProgressContext.Provider value={{ rightAnswers, setRightAnswers }}>
//             <div> {children}</div>{' '}
//         </ProgressContext.Provider>
//     )
// }

export function Question({ questionInfo }) {
    const { id, content, language, text, answers } = questionInfo
    let { rightAnswers } = useContext(ProgressContext)
    console.log(rightAnswers)

    return (
        <main className={styles.main}>
            <h5>{rightAnswers}</h5>
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

            {/* <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div> */}
        </main>
    )
}
