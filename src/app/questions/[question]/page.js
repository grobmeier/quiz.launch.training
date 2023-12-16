import { languagesExam } from '../../exams-data/data.js'
import Question from '@/app/ui/question/Question.js'
import styles from './question-detail.module.css'

export const dynamicParams = false

export async function generateStaticParams() {
    return languagesExam.map((p) => ({ question: p.id }))
}

export function getDataById(id) {
    let dataFiltered = languagesExam.filter(function (el) {
        return el.id === id
    })

    if (!dataFiltered) {
        throw new Error('Failed to fetch data')
    }
    const data = dataFiltered[0]

    return data
}

export default function Page({ params }) {
    const questionInfo = getDataById(params.question)
    return (
        <main className={styles.main}>
            <h1>Details about the Question</h1>
            <Question questionInfo={questionInfo} />
        </main>
    )
}
