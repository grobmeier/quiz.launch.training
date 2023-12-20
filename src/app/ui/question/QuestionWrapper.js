'use client'

import { useContext, useEffect } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'

//export const ProgressContext = createContext()
export function QuestionWrapper({ children, allQtnsInDB }) {
    const { allQtns, setAllQtns } = useContext(ProgressContext)

    useEffect(() => {
        setAllQtns(...allQtnsInDB)
    }, [])
    console.log(allQtns)

    return <div>{children}</div>
}
