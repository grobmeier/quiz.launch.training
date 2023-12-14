'use client'

import styles from './question.module.css'
import { Topbar } from '@/app/ui/question/Topbar'
import { SingleOption } from '@/app/ui/question/SingleOption'
import { CodeBlock, dracula } from 'react-code-blocks'

export default function Page() {
    const CodeSnippetJava = `
    class HelloWorld { 
        static public void main( String args[] ) {
            System.out.println( "Hello World!");
        }
    }
    `
    const CodeSnippetHTML = `<ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
</ul>`

    return (
        <main className={styles.main}>
            <Topbar />
            <CodeBlock
                text={CodeSnippetJava}
                language="java"
                showLineNumbers="true"
                // wrapLines
                theme={dracula}
                // codeBlock={true}
            />
            <CodeBlock
                text={CodeSnippetHTML}
                language="html"
                showLineNumbers="true"
                // wrapLines
                theme={dracula}
                // codeBlock={true}
            />
            <h3>What language do you see in the picture?</h3>
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
