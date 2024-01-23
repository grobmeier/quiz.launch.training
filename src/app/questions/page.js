'use client'
import { question1 } from '../exams-data/java.js'
import styles from './questions.module.css'
import { CodeBlock, dracula } from 'react-code-blocks'

export default function Page() {
    return (
        <main className={styles.main}>
            <h3>I am here</h3>
            <div>
                <h5>{question1.title}</h5>
                <CodeBlock
                    text={question1.content}
                    language="java"
                    showLineNumbers="true"
                    // wrapLines
                    theme={dracula}
                    // codeBlock={true}
                />
            </div>
        </main>
    )
}
