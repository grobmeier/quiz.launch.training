import { javaExam } from '../../exams-data/java.js'
import { restExam } from '../../exams-data/rest.js'
// import { restExam } from '../../exams-data/rest.js'
import { Question } from '@/app/ui/question/Question.js'
import styles from './question-detail.module.css'

export const dynamicParams = false

export async function generateStaticParams() {
    let allExamData = []
    javaExam.map((p) => allExamData.push({ question: 'java-' + p.id }))
    restExam.map((p) => allExamData.push({ question: 'rest-' + p.id }))
    return allExamData
}

export function getDataByIdAndExam(id, exam) {
    let dataFiltered = []
    if (exam === 'java') {
        dataFiltered = javaExam.filter(function (el) {
            return el.id === id
        })
    }
    if (exam === 'rest') {
        dataFiltered = restExam.filter(function (el) {
            return el.id === id
        })
    }
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
    const examQtn = substrings[0]
    const idQtn = substrings[1]

    const questionInfo = getDataByIdAndExam(idQtn, examQtn)
    return (
        <main className={styles.main}>
            <Question questionInfo={questionInfo} />
        </main>
    )
}
