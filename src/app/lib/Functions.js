// Randomize the qtns
export function shuffle(array) {
    let currentIndex = array.length,
        randomIndex

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
}

/**
 * Match the initial IDs (already randomized) and obtain
 * the corresponding data (answers, explanations, etc.) from database: exam file.
 */

export function searchMatchingIds(examQuestions, randomizedQtns) {
    let result = new Array()
    randomizedQtns.forEach((id) => {
        examQuestions.forEach((el) => {
            if (el.id === id) {
                result.push(el)
            }
        })
    })
    return result
}

/**
 * Gets the randomized Qtns ids for the launched exam
 * @param exam Current Exam, with all the data
 * @param maxQtns Maximum questions per exam
 * @returns {array} allExamQtns ids to be set in state
 */

export function shuffleQtns(exam, maxQtns) {
    let randomizedExamQtns = shuffle(exam)
    const maxExamQtns = randomizedExamQtns.slice(0, maxQtns)
    const allExamQtnsIds = maxExamQtns.map((p) => p.id)

    return allExamQtnsIds
}

/**
 * Sets the localstorage - allExamQtns,userAnswers and allQtns, based
 * on the randomized IDs of the questions and allQtns, coming from state
 * @param exam Current Exam, with all the data
 * @param allQtns Randomized IDs of the current exam, from state
 * @returns tmpAllExamQtns and userTmpAnswers to be set in state
 */

export function setLocalStoragePerExam(exam, allQtns) {
    let tmpAllExamQtns = searchMatchingIds(exam, allQtns)
    typeof window !== 'undefined' &&
        localStorage.setItem('allExamQtns', JSON.stringify(tmpAllExamQtns))
    const examTmpAnswers = allQtns.map((id) => ({
        id: id,
        calculatedPoints: 0,
        answered: [],
    }))
    let userTmpAnswers = JSON.stringify(examTmpAnswers)
    typeof window !== 'undefined' &&
        localStorage.setItem('userAnswers', userTmpAnswers)
    typeof window !== 'undefined' &&
        localStorage.setItem('allQtns', JSON.stringify(allQtns))

    return { tmpAllExamQtns, userTmpAnswers }
}
