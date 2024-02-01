export const javaExam = [
    {
        id: '1',
        difficulty: 1,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            int[] numbers = {3, 6, 9, 12};
            System.out.println(numbers[1]);
        `,
        language: 'java',
        answers: [
            {
                text: '3',
                correct: false,
            },
            {
                text: '6',
                correct: true,
            },
            {
                text: '9',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'In Java, array indices start from 0. Therefore, `numbers[1]` accesses the second element of the array `numbers`, which is 6.',
    },
    {
        id: '2',
        difficulty: 5,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            public class ArrayChallenge {
                public static void main(String[] args) {
                    int[] array = new int[4];
                    for (int i = 0; i < array.length; i++) {
                        array[i] = i + 1;
                    }
                    int sum = 0;
                    for (int i = 0; i <= array.length; i++) {
                        sum += array[i];
                    }
                    System.out.println(sum);
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: '10',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
            {
                text: 'ArrayIndexOutOfBoundsException is thrown',
                correct: true,
            },
            {
                text: 'None of the above',
                correct: false,
            },
            {
                text: 'An unknown runtime error occurs',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "This code results in an ArrayIndexOutOfBoundsException. The second for-loop attempts to access array indices from 0 to 4 inclusive, but the array's last index is 3. Attempting to access array[4] causes the exception.",
    },
    {
        id: '3',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            public class DoWhileArray {
                public static void main(String[] args) {
                    int[] numbers = {2, 4, 6, 8, 10};
                    int i = 0;
                    do {
                        i++;
                    } while(numbers[i] % 2 == 0);
                    System.out.println(i);
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: '2',
                correct: false,
            },
            {
                text: '3',
                correct: false,
            },
            {
                text: '4',
                correct: true,
            },
            {
                text: 'ArrayIndexOutOfBoundsException is thrown',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The do...while loop increments `i` before checking the condition. Since all numbers in the array are even, the loop continues until `i` reaches 4, which is out of bounds for the array, causing the loop to break and print 4.',
    },
    {
        id: '4',
        difficulty: 2,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            public class ForEachArray {
                public static void main(String[] args) {
                    int[] numbers = {1, 2, 3, 4, 5};
                    int sum = 0;
                    for (int num : numbers) {
                        sum += num;
                    }
                    System.out.println(sum);
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: '10',
                correct: false,
            },
            {
                text: '15',
                correct: true,
            },
            {
                text: '20',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The for-each loop iterates over each element in the array `numbers`, adding them to `sum`. The sum of the numbers 1, 2, 3, 4, and 5 is 15.',
    },
    {
        id: '5',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            public class NullArrayTest {
                public static void main(String[] args) {
                    String[] words = new String[3];
                    words[1] = "Java";
                    int count = 0;
                    for (String word : words) {
                        if (word == null) {
                            count++;
                        }
                    }
                    System.out.println(count);
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: '0',
                correct: false,
            },
            {
                text: '1',
                correct: false,
            },
            {
                text: '2',
                correct: true,
            },
            {
                text: '3',
                correct: false,
            },
            {
                text: 'NullPointerException is thrown',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The array `words` is initialized with a length of 3, but only one element (at index 1) is assigned a value ("Java"). The other two elements are null by default. The loop counts how many elements are null, which is 2.',
    },
    {
        id: '6',
        difficulty: 1,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            int[] numbers = {1, 2, 3};
            System.out.println(numbers.length);
        `,
        language: 'java',
        answers: [
            {
                text: '2',
                correct: false,
            },
            {
                text: '3',
                correct: true,
            },
            {
                text: '4',
                correct: false,
            },
            {
                text: 'NullPointerException is thrown',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The `length` property of an array gives the total number of elements in the array, which is 3 in this case.',
    },
    {
        id: '7',
        difficulty: 2,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            int[] numbers = new int[5];
            for (int i = 0; i < numbers.length; i++) {
                numbers[i] = i * 2;
            }
            System.out.println(numbers[4]);
        `,
        language: 'java',
        answers: [
            {
                text: '4',
                correct: false,
            },
            {
                text: '6',
                correct: false,
            },
            {
                text: '8',
                correct: true,
            },
            {
                text: '10',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'Each element in the array `numbers` is assigned twice its index value. Therefore, numbers[4] is 4*2, which is 8.',
    },
    {
        id: '8',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            String[] words = {"Hello", null, "World"};
            System.out.println(words[1].length());
        `,
        language: 'java',
        answers: [
            {
                text: '5',
                correct: false,
            },
            {
                text: 'NullPointerException is thrown',
                correct: true,
            },
            {
                text: '0',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'Attempting to call a method (like `length()`) on a null object will result in a NullPointerException.',
    },
    {
        id: '9',
        difficulty: 4,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            int[] numbers = new int[3];
            for (int i = 0; i <= numbers.length; i++) {
                numbers[i] = i;
            }
        `,
        language: 'java',
        answers: [
            {
                text: 'This code runs without errors',
                correct: false,
            },
            {
                text: 'ArrayIndexOutOfBoundsException is thrown',
                correct: true,
            },
            {
                text: 'NullPointerException is thrown',
                correct: false,
            },
            {
                text: '3',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "The loop tries to access an index equal to the array's length (`numbers.length`), which is out of bounds, resulting in an ArrayIndexOutOfBoundsException.",
    },
    {
        id: '10',
        difficulty: 5,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            public class ArrayChallenge {
                public static void main(String[] args) {
                    int[] numbers = {1, 2, 3, 4, 5};
                    int count = 0;
                    for (int i = 0; i < numbers.length; i++) {
                        if (numbers[i] % 2 == 0) {
                            count++;
                        }
                    }
                    System.out.println(count);
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: '2',
                correct: true,
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
                text: 'ArrayIndexOutOfBoundsException is thrown',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The loop counts the number of even numbers in the `numbers` array. There are two even numbers (2 and 4), so the output is 2.',
    },
    {
        id: '11',
        difficulty: 2,
        text: 'Which of the following statements are true about Java arrays?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'Java arrays are dynamically resizable.',
                correct: false,
            },
            {
                text: 'Array length in Java is fixed once the array is created.',
                correct: true,
            },
            {
                text: 'Arrays in Java can store primitive data types.',
                correct: true,
            },
            {
                text: 'Arrays can be multi-dimensional in Java.',
                correct: true,
            },
            {
                text: 'Java arrays are implemented as a type of Collection.',
                correct: false,
            },
        ],
        correctAnswers: 3,
        explanation:
            "In Java, once an array is created, its size cannot be changed (it's not dynamically resizable). Arrays can store both primitive data types and objects and can be multi-dimensional. They are not a type of Collection.",
    },
    {
        id: '12',
        difficulty: 3,
        text: 'Which of these are valid ways to initialize an array in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'int[] arr = new int[5];',
                correct: true,
            },
            {
                text: 'int[] arr = {1, 2, 3, 4, 5};',
                correct: true,
            },
            {
                text: 'int[] arr = new int[] {1, 2, 3, 4, 5};',
                correct: true,
            },
            {
                text: 'int arr[] = new int[5];',
                correct: true,
            },
            {
                text: 'int[] arr = new int[5]{1, 2, 3, 4, 5};',
                correct: false,
            },
        ],
        correctAnswers: 4,
        explanation:
            'Java allows several ways to initialize arrays. The last option is incorrect because it attempts to both specify the size of the array and initialize it with specific values simultaneously, which is not allowed in Java.',
    },
    {
        id: '13',
        difficulty: 3,
        text: 'Select the true statements regarding multi-dimensional arrays in Java.',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'Multi-dimensional arrays are arrays of arrays.',
                correct: true,
            },
            {
                text: 'The dimensions of a multi-dimensional array must be specified at the time of declaration.',
                correct: false,
            },
            {
                text: 'Each sub-array in a multi-dimensional array can have a different length.',
                correct: true,
            },
            {
                text: 'Multi-dimensional arrays in Java can only be rectangular (i.e., all rows have the same length).',
                correct: false,
            },
            {
                text: 'Accessing an element in a multi-dimensional array requires multiple index values.',
                correct: true,
            },
        ],
        correctAnswers: 3,
        explanation:
            'Multi-dimensional arrays in Java are indeed arrays of arrays, and each sub-array can have different lengths (thus, they can be non-rectangular). Accessing elements requires multiple indices, one for each dimension of the array.',
    },
]
