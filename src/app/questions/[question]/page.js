import { question1 } from '../../exams-data/data.js'
import Question from '@/app/ui/question/Question.js'
import styles from './question-detail.module.css'

export async function generateStaticParams() {
    return [{ id: '5' }, { id: '2' }]
}

export function getDataById() {
    const data = question1

    if (!data) {
        throw new Error('Failed to fetch data')
    }

    return data
}

export default function Page({ params }) {
    const { content, id } = getDataById()

    return (
        <main className={styles.main}>
            <h1>Details about the Question</h1>
            <h4>{id}</h4>
            <Question />
        </main>
    )
}
