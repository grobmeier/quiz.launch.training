'use client'

import styles from './question.module.css'
import { Topbar } from '@/app/ui/question/Topbar'
import { SingleOption } from '@/app/ui/question/SingleOption'
import { CodeBlock, dracula } from 'react-code-blocks'

export default function Question({ questionInfo }) {
    const { id, content, language, text, answers } = questionInfo

    return (
        <main className={styles.main}>
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
            <SingleOption />
            <SingleOption />
            {/* <div className={styles.grid}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div> */}
        </main>
    )
}
