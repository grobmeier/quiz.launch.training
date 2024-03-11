import styles from './Topbar.module.scss'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'
import { useState, useEffect } from 'react'
import { CountdownWrapper } from '@/app/ui/question/CountdownWrapper'

export function Topbar() {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    let {
        allQtns,
        currentIndex,
        setCurrentIndex,
        setExamInProgress,
        setSeenQtns,
    } = useContext(ProgressContext)
    let totalQtns = allQtns.length

    function handleCancel() {
        localStorage.setItem('currentIndex', JSON.stringify(0))
        localStorage.setItem('examTaken', JSON.stringify(0))
        setCurrentIndex(0)
        setSeenQtns(0)
        setExamInProgress('')
        localStorage.setItem('currentExam', '')
        localStorage.removeItem('end_date')
        router.push('/')
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={styles.container}>
            <span type="button" onClick={handleCancel}>
                Cancel
            </span>
            <span>
                <strong>
                    <p>
                        {isClient ? currentIndex + 1 : 0} of{' '}
                        {isClient ? totalQtns : 0}
                    </p>
                </strong>
            </span>
            <CountdownWrapper />
        </div>
    )
}
