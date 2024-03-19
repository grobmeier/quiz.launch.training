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
 * The consideration is to keep the info in state vs localstorage. Thus it
 * will be hidden from user.
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
