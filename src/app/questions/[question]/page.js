import { javaExam } from '../../exams-data/java.js'
import { htmlExam } from '../../exams-data/html.js'
import { Question } from '@/app/ui/question/Question.js'
import styles from './question-detail.module.css'

export const dynamicParams = false

export async function generateStaticParams() {
    let allExamData = []
    javaExam.map((p) => allExamData.push({ question: 'java-' + p.id }))
    htmlExam.map((p) => allExamData.push({ question: 'html-' + p.id }))
    console.log(allExamData)
    return allExamData
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
    // console.log(params)

    const delimiter = '-'
    const substrings = params.question.split(delimiter)
    const idQtn = substrings[1]

    const questionInfo = getDataById(idQtn)
    return (
        <main className={styles.main}>
            <h1>Details about the Question</h1>
            <Question questionInfo={questionInfo} />
        </main>
    )
}
