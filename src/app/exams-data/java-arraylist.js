const exam = [
    {
        id: '1',
        difficulty: 1,
        text: 'What is the primary difference between a List and an ArrayList in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'List is an interface, while ArrayList is a class that implements List.',
                correct: true,
            },
            {
                text: 'List allows duplicate elements, while ArrayList does not.',
                correct: false,
            },
            {
                text: 'ArrayList is synchronized, while List is not.',
                correct: false,
            },
            {
                text: 'ArrayList is an interface, while List is a concrete class.',
                correct: false,
            },
            {
                text: 'There is no difference.',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'List is an interface in Java, and ArrayList is a concrete implementation of the List interface.',
    },
    {
        id: '2',
        difficulty: 2,
        text: 'Which method is used to add an element to an ArrayList in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'addElement()',
                correct: false,
            },
            {
                text: 'add()',
                correct: true,
            },
            {
                text: 'insert()',
                correct: false,
            },
            {
                text: 'put()',
                correct: false,
            },
            {
                text: 'append()',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The add() method is used to insert an element into an ArrayList in Java.',
    },
    {
        id: '3',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<String> list = new ArrayList<>();
            list.add("A");
            list.add("B");
            list.add("C");
            System.out.println(list.get(1));
        `,
        language: 'java',
        answers: [
            {
                text: 'A',
                correct: false,
            },
            {
                text: 'B',
                correct: true,
            },
            {
                text: 'C',
                correct: false,
            },
            {
                text: 'ArrayIndexOutOfBoundsException',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The get() method retrieves the element at the specified position in the list. The element at index 1 is "B".',
    },
    {
        id: '4',
        difficulty: 4,
        text: 'Which of the following is a valid way to declare an ArrayList, given a class called Person exists?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'new ArrayList<Person>();',
                correct: true,
            },
            {
                text: 'new ArrayList()<Person>;',
                correct: false,
            },
            {
                text: 'new List<Person>();',
                correct: false,
            },
            {
                text: 'new ArrayList<Person>[];',
                correct: false,
            },
            {
                text: 'new ArrayList<Person>{ };',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The correct way to declare a generic method is by placing the type parameter before the return type.',
    },
    {
        id: '5',
        difficulty: 2,
        text: 'How do you convert an ArrayList with the reference name list to an array in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'list.toArray(new String[0])',
                correct: true,
            },
            {
                text: 'list.convertToArray()',
                correct: false,
            },
            {
                text: 'list.toArray()',
                correct: false,
            },
            {
                text: 'ArrayList.toArray(list)',
                correct: false,
            },
            {
                text: 'Comparator.toArray(list)',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The toArray() method converts an ArrayList to an array. The parameter new String[0] is used to specify the type of array.',
    },
    {
        id: '6',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<Integer> list = new ArrayList<>();
            list.add(10);
            list.add(20);
            list.add(30);
            for (Integer number : list) {
                System.out.print(number + " ");
            }
        `,
        language: 'java',
        answers: [
            {
                text: '10 20 30 ',
                correct: true,
            },
            {
                text: '30 20 10 ',
                correct: false,
            },
            {
                text: '10 30 20 ',
                correct: false,
            },
            {
                text: 'ArrayIndexOutOfBoundsException',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The for-each loop iterates over the list and prints each element in the order they were added: 10, 20, 30.',
    },
    {
        id: '7',
        difficulty: 4,
        text: 'Which of the following statements are true about generics in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'Generics allow for type-safe collections.',
                correct: true,
            },
            {
                text: 'Generics can be used with primitive types.',
                correct: false,
            },
            {
                text: 'Generics are checked at runtime.',
                correct: false,
            },
            {
                text: 'Generics provide a way to use the same code with different types.',
                correct: true,
            },
            {
                text: 'No answer is correct',
                correct: false,
            },
        ],
        correctAnswers: 2,
        explanation: 'Generics enable type-safe collections and allow the same code to be used with different types, but they cannot be used with primitive types and are checked at compile-time, not runtime.',
    },
    {
        id: '8',
        difficulty: 5,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            import java.util.ArrayList;
            import java.util.List;
    
            public class ContainsExample {
                public static void main(String[] args) {
                    List<String> list = new ArrayList<>();
                    list.add("apple");
                    list.add("banana");
                    list.add("cherry");
    
                    if (list.contains("banana")) {
                        System.out.println("List contains banana");
                    } else {
                        System.out.println("List does not contain banana");
                    }
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: 'List contains banana',
                correct: true,
            },
            {
                text: 'List does not contain banana',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
            {
                text: 'An exception is thrown',
                correct: false,
            },
            {
                text: 'Contains does not work with strings',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The contains() method checks if the specified element is present in the list. Since "banana" is added to the list, the output is "List contains banana".',
    },    
    {
        id: '9',
        difficulty: 2,
        text: 'Which method removes all elements from an ArrayList in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'clear()',
                correct: true,
            },
            {
                text: 'removeAll()',
                correct: false,
            },
            {
                text: 'deleteAll()',
                correct: false,
            },
            {
                text: 'purge()',
                correct: false,
            },
            {
                text: 'clean()',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The clear() method removes all elements from an ArrayList.',
    },
    {
        id: '10',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<Integer> list = new ArrayList<>();
            list.add(5);
            list.add(10);
            list.add(15);
            System.out.println(list.size());
        `,
        language: 'java',
        answers: [
            {
                text: '3',
                correct: true,
            },
            {
                text: '2',
                correct: false,
            },
            {
                text: '5',
                correct: false,
            },
            {
                text: 'null',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The size() method returns the number of elements in the list, which is 3.',
    },
    {
        id: '11',
        difficulty: 4,
        text: 'What is the output of the following code?',
        type: 'code',
        content: `  
            List<String> list = new ArrayList<>();
            list.add("A");
            list.add("B");
            list.add("C");
            list.remove("B");
            System.out.println(list);
        `,
        language: 'java',
        answers: [
            {
                text: '[A, B, C]',
                correct: false,
            },
            {
                text: '[A, C]',
                correct: true,
            },
            {
                text: '[B, C]',
                correct: false,
            },
            {
                text: '[A, C, B]',
                correct: false,
            },
            {
                text: 'No answer is correct',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The remove() method removes the specified element ("B") from the list. The resulting list is [A, C].',
    },
    {
        id: '12',
        difficulty: 2,
        text: 'Which of the following is a correct way to check if an ArrayList contains a specific element in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'list.contains("element")',
                correct: true,
            },
            {
                text: 'list.has("element")',
                correct: false,
            },
            {
                text: 'list.includes("element")',
                correct: false,
            },
            {
                text: 'list.exists("element")',
                correct: false,
            },
            {
                text: 'No answer is correct',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The correct method to check if an ArrayList contains a specific element is contains().',
    },
    {
        id: '13',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<String> list = new ArrayList<>();
            list.add("Java");
            list.add("is");
            list.add("fun");
            System.out.println(list.indexOf("fun"));
        `,
        language: 'java',
        answers: [
            {
                text: '2',
                correct: true,
            },
            {
                text: '1',
                correct: false,
            },
            {
                text: '3',
                correct: false,
            },
            {
                text: '0',
                correct: false,
            },
            {
                text: '-1',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The indexOf() method returns the index of the first occurrence of the specified element, which is 2 for "fun".',
    },
    {
        id: '14',
        difficulty: 4,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            import java.util.ArrayList;
            import java.util.List;
    
            public class ComplexLoopExample {
                public static void main(String[] args) {
                    List<Integer> numbers = new ArrayList<>();
                    for (int i = 1; i <= 5; i++) {
                        numbers.add(i);
                    }
                    int result = 0;
                    for (int i = 0; i < numbers.size(); i++) {
                        if (i % 2 == 0) {
                            result += numbers.get(i);
                        } else {
                            result -= numbers.get(i);
                        }
                    }
                    System.out.println(result);
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: '3',
                correct: true,
            },
            {
                text: '15',
                correct: false,
            },
            {
                text: '-3',
                correct: false,
            },
            {
                text: '0',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The loop iterates over the list and adds the value to result if the index is even and subtracts it if the index is odd. The calculation is: 1 - 2 + 3 - 4 + 5 = 3.',
    },    
    {
        id: '15',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<Double> list = new ArrayList<>();
            list.add(1.1);
            list.add(2.2);
            list.add(3.3);
            list.remove(1);
            System.out.println(list);
        `,
        language: 'java',
        answers: [
            {
                text: '[1.1, 3.3]',
                correct: true,
            },
            {
                text: '[1.1, 2.2, 3.3]',
                correct: false,
            },
            {
                text: '[2.2, 3.3]',
                correct: false,
            },
            {
                text: '[1.1, 3.3, 2.2]',
                correct: false,
            },
            {
                text: 'None of the others',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The remove() method removes the element at the specified index (1), which is 2.2. The resulting list is [1.1, 3.3].',
    },
    {
        id: '16',
        difficulty: 5,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<Integer> list = new ArrayList<>();
            list.add(100);
            list.add(200);
            list.add(300);
            for (int i = 0; i < list.size(); i++) {
                list.set(i, list.get(i) + 10);
            }
            System.out.println(list);
        `,
        language: 'java',
        answers: [
            {
                text: '[110, 210, 310]',
                correct: true,
            },
            {
                text: '[100, 200, 300]',
                correct: false,
            },
            {
                text: '[110, 200, 300]',
                correct: false,
            },
            {
                text: '[110, 210, 300]',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The for loop updates each element in the list by adding 10 to it. The resulting list is [110, 210, 310].',
    },
    {
        id: '17',
        difficulty: 2,
        text: 'How do you check if an ArrayList is empty in Java?',
        type: 'conceptual',
        language: 'java',
        answers: [
            {
                text: 'list.isEmpty()',
                correct: true,
            },
            {
                text: 'list.size() == 0',
                correct: true,
            },
            {
                text: 'list.length == 0',
                correct: false,
            },
            {
                text: 'list.isEmpty == true',
                correct: false,
            },
            {
                text: 'This is not possible',
                correct: false,
            },
        ],
        correctAnswers: 2,
        explanation: 'The isEmpty() method and checking if size() is 0 are both valid ways to check if an ArrayList is empty.',
    },
    {
        id: '18',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<String> list = new ArrayList<>();
            list.add("X");
            list.add("Y");
            list.add("Z");
            list.set(1, "W");
            System.out.println(list);
        `,
        language: 'java',
        answers: [
            {
                text: '[X, W, Z]',
                correct: true,
            },
            {
                text: '[X, Y, Z]',
                correct: false,
            },
            {
                text: '[X, W, Y]',
                correct: false,
            },
            {
                text: '[W, X, Z]',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The set() method replaces the element at the specified position (index 1) with the new value ("W"). The resulting list is [X, W, Z].',
    },
    {
        id: '19',
        difficulty: 2,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            import java.util.ArrayList;
            import java.util.List;
    
            public class SimpleLoopExample {
                public static void main(String[] args) {
                    List<String> fruits = new ArrayList<>();
                    fruits.add("apple");
                    fruits.add("banana");
                    fruits.add("cherry");
    
                    for (String fruit : fruits) {
                        System.out.print(fruit + " ");
                    }
                }
            }
        `,
        language: 'java',
        answers: [
            {
                text: 'apple banana cherry ',
                correct: true,
            },
            {
                text: 'banana cherry apple ',
                correct: false,
            },
            {
                text: 'cherry apple banana ',
                correct: false,
            },
            {
                text: 'apple cherry banana ',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The for-each loop iterates over the list and prints each element in the order they were added: apple, banana, cherry.',
    },
    {
        id: '20',
        difficulty: 3,
        text: 'What will be the output of the following Java code snippet?',
        type: 'code',
        content: `  
            List<String> list = new ArrayList<>();
            list.add("apple");
            list.add("banana");
            list.add("cherry");
            list.remove(1);
            System.out.println(list);
        `,
        language: 'java',
        answers: [
            {
                text: '[apple, cherry]',
                correct: true,
            },
            {
                text: '[apple, banana]',
                correct: false,
            },
            {
                text: '[banana, cherry]',
                correct: false,
            },
            {
                text: '[apple, banana, cherry]',
                correct: false,
            },
            {
                text: 'This code does not compile',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation: 'The remove() method removes the element at the specified position (index 1), which is "banana". The resulting list is [apple, cherry].',
    },
]

export default exam;
