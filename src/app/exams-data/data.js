export const languagesExam = [
    {
        id: '5',
        text: 'What is the output of the following Java code snippet?',
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
]
