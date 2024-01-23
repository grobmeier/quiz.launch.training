import { javaExam } from '../../exams-data/java.js'
import { Question } from '@/app/ui/question/Question.js'
import styles from './question-detail.module.css'

export const dynamicParams = false

export async function generateStaticParams() {
    console.log(javaExam.map((p) => ({ question: 'java-' + p.id })))
    return javaExam.map((p) => ({ question: 'java-' + p.id }))
}

export function getDataById(id) {
    let dataFiltered = javaExam.filter(function (el) {
        return el.id === id
    })

    if (!dataFiltered) {
        throw new Error('Failed to fetch data')
    }
    const data = dataFiltered[0]

    return data
}

export default function Page({ params }) {
    console.log(params)
    const questionInfo = getDataById(params.question.replace('java-', ''))
    return (
        <main className={styles.main}>
            <h1>Details about the Question</h1>
            <Question questionInfo={questionInfo} />
        </main>
    )
}
