export const Storage = {
    EXAM_QUESTIONS: 'examQuestions',
    USER_ANSWERS: 'userAnswers',
    CURRENT_INDEX: 'currentIndex',
    EXAM_TAKEN: 'examTaken',
    END_DATE: 'end_date'
}

export function read(key) {
    return typeof window !== "undefined" && localStorage.getItem(key);
}

export function readJSON(key) {
    return JSON.parse(read(key));
}

export function put(key, value) {
    if (typeof value === 'object') value = JSON.stringify(value);
    return typeof window !== "undefined" && localStorage.setItem(key, value);
}

export function remove(key) {
    return typeof window !== "undefined" && localStorage.removeItem(key);
}
