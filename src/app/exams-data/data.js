export const languagesExam = [
    {
        id: '5',
        text: 'What is the output of the following Java code snippet?',
        type: 'code',
        content: `  
    class HelloWorld {
            static public void main( String args[] ) {
                System.out.println( "Hello World!");
            }
   }
    `,
        language: 'java',
        answers: [
            {
                text: '1',
                correct: false,
            },
            {
                text: '3',
                correct: false,
            },
            {
                text: '5',
                correct: false,
            },
            {
                text: '6',
                correct: true,
            },
        ],
    },
    {
        id: '1',
        text: 'What language do you see in the picture?',
        type: 'code',
        content: `
    <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>`,
        language: 'html',
        answers: [
            {
                text: 'HTML',
                correct: true,
            },
            {
                text: 'CSS',
                correct: false,
            },
            {
                text: 'JS',
                correct: false,
            },
            {
                text: '6',
                correct: false,
            },
        ],
    },
    {
        id: '3',
        text: 'What language do you see in ......?',
        type: 'code',
        content: `
    <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>`,
        language: 'html',
        answers: [
            {
                text: 'HTML',
                correct: true,
            },
            {
                text: 'CSS',
                correct: false,
            },
            {
                text: 'JS',
                correct: false,
            },
            {
                text: '6',
                correct: false,
            },
        ],
    },
    {
        id: '10',
        text: 'What image do you see in ......?',
        type: 'image',
        content: '/images/languages/languages-10.png',
        answers: [
            {
                text: 'HTML',
                correct: true,
            },
            {
                text: 'CSS',
                correct: false,
            },
            {
                text: 'JS',
                correct: true,
            },
            {
                text: '6',
                correct: false,
            },
        ],
    },
    {
        id: '23',
        text: 'What text do you see in ......?',
        type: 'text',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        answers: [
            {
                text: 'HTML',
                correct: true,
            },
            {
                text: 'CSS',
                correct: false,
            },
            {
                text: 'JS',
                correct: true,
            },
            {
                text: '6',
                correct: false,
            },
        ],
    },
]
