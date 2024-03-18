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
        userAnswers,
        currentIndex,
        setCurrentIndex,
        setExamInProgress,
        setSeenQtns,
        setAllQtns,
        setUserAnswers,
    } = useContext(ProgressContext)
    let totalQtns = userAnswers.length

    function handleCancel() {
        setCurrentIndex(0)
        setSeenQtns(0)
        setExamInProgress('')
        localStorage.clear()
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
