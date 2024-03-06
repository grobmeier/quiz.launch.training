import React, { useContext } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { useState, useEffect } from 'react'
import { ProgressContext } from '@/app/lib/QuestionProvider.js'

const getLocalStorageValue = (s) => localStorage.getItem(s)

export const CountdownWrapper = () => {
    let { setCurrentIndex, setIsTaken, setIsTimerExpired } =
        useContext(ProgressContext)

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            localStorage.setItem('examTaken', JSON.stringify(1))
            setIsTaken(true)
            setIsTimerExpired(true)
            setCurrentIndex(0)
        } else {
            // Render a countdown
            return (
                <span>
                    {zeroPad(minutes)}:{zeroPad(seconds)}
                </span>
            )
        }
    }

    const [data, setData] = useState(
        { date: Date.now(), delay: 600000 }, //10 mins
    )
    const wantedDelay = 600000 //10 mins

    //Code runs only one time after each reloading
    useEffect(() => {
        const savedDate = getLocalStorageValue('end_date')
        if (savedDate != null && !isNaN(savedDate)) {
            const currentTime = Date.now()
            const delta = parseInt(savedDate, 10) - currentTime

            //Do you reach the end?
            if (delta > wantedDelay) {
                //Yes we clear our saved end date
                if (localStorage.getItem('end_date').length > 0)
                    localStorage.removeItem('end_date')
            } else {
                //No update the end date with the current date
                setData({ date: currentTime, delay: delta })
            }
        }
    }, [])

    return (
        <div>
            <Countdown
                date={data.date + data.delay}
                renderer={renderer}
                onStart={(delta) => {
                    //Save the end date
                    if (localStorage.getItem('end_date') == null)
                        localStorage.setItem(
                            'end_date',
                            JSON.stringify(data.date + data.delay),
                        )
                }}
                onComplete={() => {
                    if (localStorage.getItem('end_date') != null)
                        localStorage.removeItem('end_date')
                }}
            />
        </div>
    )
}
