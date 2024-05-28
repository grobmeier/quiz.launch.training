import styles from './ResultOption.module.scss'
import { Fragment } from 'react'
import { INDEX_TO_CHARACTER } from '@/app/lib/Constants'
import { Storage, readJSON } from '@/app/lib/Storage.js'

export function ResultOption({ answers, id }) {
 
    let userAnswers = readJSON(Storage.USER_ANSWERS);
    const isAnswered =
        userAnswers[id] &&
        userAnswers[id].answered !== undefined &&
        userAnswers[id].answered;

    return (
        <>
            {answers.map((item, index) => (
                <Fragment key={index}>
                    <button
                        type="button"
                        className={`${styles.container} ${
                            isAnswered && isAnswered.includes(item.text)
                                ? styles.selectedBtn
                                : ''
                        }`}>
                        {
                            item.correct && (
                            <span><small>Correct: </small></span>
                        )}
                         {isAnswered &&
                        isAnswered.includes(item.text) &&
                        !item.correct && (
                            <span>
                                <small>Wrong :-(</small>
                            </span>
                        )}
                        <span>{INDEX_TO_CHARACTER[index]}</span>
                        <span>{item.text}</span>
                    </button>
                </Fragment>
            ))}
        </>
    )
}
