const exam = [
    {
        "id": "1",
        "difficulty": 2,
        "text": "What is the purpose of the @Test annotation in JUnit?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To mark a method as a test method.",
                "correct": true
            },
            {
                "text": "To initialize test data.",
                "correct": false
            },
            {
                "text": "To clean up after tests.",
                "correct": false
            },
            {
                "text": "To disable a test.",
                "correct": false
            },
            {
                "text": "To provide test metadata.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Test is used to indicate that a method is a test method."
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "What does the @BeforeEach annotation do in a JUnit test?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "It runs before each test method.",
                "correct": true
            },
            {
                "text": "It runs after each test method.",
                "correct": false
            },
            {
                "text": "It runs once before all tests.",
                "correct": false
            },
            {
                "text": "It disables the test method.",
                "correct": false
            },
            {
                "text": "It provides test configuration.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@BeforeEach is used to run code before each test method is executed."
    },
    {
        "id": "3",
        "difficulty": 3,
        "text": "Which method is used to check if two values are equal in a JUnit test?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "assertEquals",
                "correct": true
            },
            {
                "text": "assertTrue",
                "correct": false
            },
            {
                "text": "assertNotNull",
                "correct": false
            },
            {
                "text": "assertSame",
                "correct": false
            },
            {
                "text": "assertThat",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "assertEquals is used to check if two values are equal."
    },
    {
        "id": "4",
        "difficulty": 2,
        "text": "What does the @AfterAll annotation do in JUnit?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "It runs after all test methods in the class.",
                "correct": true
            },
            {
                "text": "It runs after each test method.",
                "correct": false
            },
            {
                "text": "It runs before each test method.",
                "correct": false
            },
            {
                "text": "It disables the test method.",
                "correct": false
            },
            {
                "text": "It provides test metadata.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@AfterAll is used to run code after all test methods in the class have been executed."
    },
    {
        "id": "5",
        "difficulty": 3,
        "text": "What is the purpose of the @Disabled annotation in JUnit?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To disable a test method.",
                "correct": true
            },
            {
                "text": "To mark a method as a test method.",
                "correct": false
            },
            {
                "text": "To run code before each test method.",
                "correct": false
            },
            {
                "text": "To run code after each test method.",
                "correct": false
            },
            {
                "text": "To clean up resources after tests.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Disabled is used to disable a test method, preventing it from being executed."
    },
    {
        "id": "6",
        "difficulty": 3,
        "text": "Does the following code compile correctly?",
        "type": "code",
        "content": "@BeforeEach\nvoid setUp() {\n    System.out.println(\"Setting up before each test\");\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Yes",
                "correct": true
            },
            {
                "text": "No",
                "correct": false
            },
            {
                "text": "It throws a compilation error",
                "correct": false
            },
            {
                "text": "It throws a runtime error",
                "correct": false
            },
            {
                "text": "It throws a NoSuchMethodException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and runs the setUp method before each test."
    },
    {
        "id": "7",
        "difficulty": 3,
        "text": "Does the following code compile correctly?",
        "type": "code",
        "content": "@Test\nvoid testException() {\n    assertThrows(ArithmeticException.class, () -> {\n        int result = 1 / 0;\n    });\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Yes",
                "correct": true
            },
            {
                "text": "No",
                "correct": false
            },
            {
                "text": "It throws a compilation error",
                "correct": false
            },
            {
                "text": "It throws a runtime error",
                "correct": false
            },
            {
                "text": "It throws a NoSuchMethodException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and tests that an ArithmeticException is thrown. It uses a Lambda for checking."
    },
    {
        "id": "8",
        "difficulty": 3,
        "text": "What is the difference between assertEquals and assertSame in JUnit?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "assertEquals checks for value equality, assertSame checks for reference equality.",
                "correct": true
            },
            {
                "text": "assertEquals checks for reference equality, assertSame checks for value equality.",
                "correct": false
            },
            {
                "text": "assertEquals and assertSame are the same.",
                "correct": false
            },
            {
                "text": "assertEquals checks for non-null, assertSame checks for null.",
                "correct": false
            },
            {
                "text": "assertEquals checks for true, assertSame checks for false.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "assertEquals checks if two objects are equal in value, assertSame checks if two references point to the same object."
    },
    {
        "id": "9",
        "difficulty": 3,
        "text": "What is the correct use of @BeforeAll in a JUnit test?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@BeforeAll\\nstatic void setup() { /* code */ }",
                "correct": true
            },
            {
                "text": "@BeforeAll\\nvoid setup() { /* code */ }",
                "correct": false
            },
            {
                "text": "@BeforeAll\\npublic void setup() { /* code */ }",
                "correct": false
            },
            {
                "text": "@BeforeAll\\nprivate void setup() { /* code */ }",
                "correct": false
            },
            {
                "text": "@BeforeAll\\nfinal void setup() { /* code */ }",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@BeforeAll must be used with a static method."
    },
    {
        "id": "10",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Using @Test and @Disabled)",
        "type": "code",
        "content": "@Test\n@Disabled\nvoid testDisabled() {\n    System.out.println(\"This test is disabled\");\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Yes",
                "correct": true
            },
            {
                "text": "No",
                "correct": false
            },
            {
                "text": "It throws a compilation error",
                "correct": false
            },
            {
                "text": "It throws a runtime error",
                "correct": false
            },
            {
                "text": "It throws a NoSuchMethodException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and the test is disabled due to the @Disabled annotation."
    }
];

export default exam;