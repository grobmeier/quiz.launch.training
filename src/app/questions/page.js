import { promises as fs } from 'fs'
import styles from './questions.module.css'

export default async function Page() {
    const file = await fs.readFile(
        process.cwd() + '/src/app/exams-data/data.json',
        'utf8',
    )
    const data = JSON.parse(file)

    return (
        <main className={styles.main}>
            <h3>I am here</h3>
            <div>
                <h5>{data.title}</h5>
                <p>{data.content}</p>
            </div>
        </main>
    )
}
