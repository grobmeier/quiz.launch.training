export const Storage = {
    EXAM_QUESTIONS: 'examQuestions',
    USER_ANSWERS: 'userAnswers',
    CURRENT_INDEX: 'currentIndex',
    EXAM_TAKEN: 'examTaken',
    END_DATE: 'end_date',
    START_TIME: 'start_time'
}

function prefixKey(key, examName) {
    if (examName !== undefined) {
        key = examName + "__" + key;
    }
    return key;
}

export function read(key, examName) {
    key = prefixKey(key, examName);
    return typeof window !== "undefined" && localStorage.getItem(key);
}

export function readJSON(key, examName) {
    key = prefixKey(key, examName);
    return JSON.parse(read(key));
}

export function put(key, value, examName) {
    key = prefixKey(key, examName);
    if (typeof value === 'object') value = JSON.stringify(value);
    return typeof window !== "undefined" && localStorage.setItem(key, value);
}

export function remove(key, examName) {
    key = prefixKey(key, examName);
    return typeof window !== "undefined" && localStorage.removeItem(key);
}
