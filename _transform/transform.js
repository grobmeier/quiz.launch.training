const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Function to read and parse YAML file
function readYamlFile(filePath) {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return yaml.load(fileContents);
    } catch (e) {
        console.log(e);
        return null;
    }
}

// Function to transform questions to the desired format
function transformQuestions(questions) {
    return questions.map((question, index) => ({
        id: (index + 1).toString(),
        difficulty: question.difficulty,
        text: question.text,
        type: question.type,
        content: question.content,
        language: question.language,
        answers: question.answers.map(answer => ({
            text: answer.text,
            correct: answer.correct,
        })),
        correctAnswers: question.answers.filter(answer => answer.correct).length,
        explanation: question.explanation,
    }));
}

// Function to write transformed questions to a JS file
function writeJsFile(filePath, data) {
    const jsContent = `const exam = ${JSON.stringify(data, null, 4)};\n\nexport default exam;`;
    fs.writeFileSync(filePath, jsContent, 'utf8');
}

function main() {
    const args = process.argv.slice(2);
    if (args.length !== 1) {
        console.log('Usage: node transformQuestions.js <input_yaml_file>');
        return;
    }

    const yamlFilePath = args[0];
    const outputDirectory = '../src/app/exams-data';
    const jsFileName = path.basename(yamlFilePath, path.extname(yamlFilePath)) + '.js';
    const jsFilePath = path.join(outputDirectory, jsFileName);

    const questions = readYamlFile(yamlFilePath);
    if (questions) {
        const transformedQuestions = transformQuestions(questions);
        writeJsFile(jsFilePath, transformedQuestions);
        console.log(`Transformed questions have been written to ${jsFilePath}`);
    } else {
        console.log('Failed to read or parse the YAML file.');
    }
}


main();
