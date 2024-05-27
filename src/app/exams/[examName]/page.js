import { ExamWrapper } from '@/app/ui/exam/ExamWrapper'
import { catalogue } from '@/app/exams-data/catalogue.js'

export async function generateStaticParams() {
    return catalogue.map((item) => ({
        examName: item.exam,
    }));
}

export default function Page() {
    return <ExamWrapper />
}

