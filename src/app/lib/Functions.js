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
export function shuffleExamAnswers(examQuestions) {
    let result = new Array();
    examQuestions.forEach((el) => {
            el.answers = shuffle(el.answers);
            result.push(el);
    });
    return result;
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
 * Prepares response object that a trainee must populate to complete the exam.
 * 
 * @param {object} exam 
 * @returns response object
 */
export function prepareResponse(exam) {
    return exam.map((question) => ({
        id: question.id,
        calculatedPoints: 0,
        answered: [],
        completed: false
    }));
}

export function formatDate(jsonDate) {
    const date = new Date(jsonDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}