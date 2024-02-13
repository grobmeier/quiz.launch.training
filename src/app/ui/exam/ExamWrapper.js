'use client'

import styles from './exam.module.css'
import { StartButton } from '@/app/ui/StartButton'
import { Rating } from '@smastrom/react-rating'
import { ExamMainScreen } from '@/app/ui/exam/ExamMainScreen'
import React, { useState } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider'
import { useContext, useEffect } from 'react'

/**
 * This Component is responsible for all the logic for the exam.
 * Moving between the questions and viewing the final result.
 *
 */

export function ExamWrapper() {
    let { userInitialAnswers, examInProgress, setIsTaken, isTaken } =
        useContext(ProgressContext)

    if (examInProgress === '') {
        return <ExamMainScreen />
    } else {
        return <div>Initial Load</div>
    }
}
