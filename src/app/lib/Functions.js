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
                el.answers = shuffle(el.answers);
                result.push(el)
            }
        })
    })
    return result
}

/**
 * Gets the randomized Qtns ids for the launched exam
 * @param exam Current Exam, with all the data
 * @param maxQuestions Maximum questions per exam, if set
 * @returns {array} allExamQtns ids to be set in state
 */
export function shuffleQuestions(exam, maxQuestions) {
    let randomizedQuestions = shuffle(exam)
    if (maxQuestions === undefined || maxQuestions === 0) {
        return randomizedQuestions;
    }

    const reducedQuestions = randomizedQuestions.slice(0, maxQuestions);
    return reducedQuestions.map((p) => p.id);
}

/**
 * Reduced a list of questions to given ids.
 * Prepares response object that a trainee must populate to complete the exam.
 * 
 * @param {object} exam 
 * @param {int[]} questionIds 
 * 
 * @returns object with examQuestions and responses
 */
export function readQuestionAndResponses(exam, questionIds) {
    let examQuestions = searchMatchingIds(exam, questionIds);
    const responses = questionIds.map((id) => ({
        id: id,
        calculatedPoints: 0,
        answered: [],
    }));

    return { examQuestions, responses };
}
