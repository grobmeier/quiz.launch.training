const exam = [
  {
    id: "1",
    difficulty: 2,
    text: "Which of the following is a checked exception in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "SQLException",
        correct: true,
      },
      {
        text: "NullPointerException",
        correct: false,
      },
      {
        text: "ArithmeticException",
        correct: false,
      },
      {
        text: "ArrayIndexOutOfBoundsException",
        correct: false,
      },
      {
        text: "RuntimeException",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "SQLException is a checked exception, while the others are unchecked (runtime) exceptions.",
  },
  {
    id: "2",
    difficulty: 2,
    text: "Which of the following exceptions are unchecked in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "NullPointerException",
        correct: true,
      },
      {
        text: "ArrayIndexOutOfBoundsException",
        correct: true,
      },
      {
        text: "IOException",
        correct: false,
      },
      {
        text: "RuntimeException",
        correct: true,
      },
      {
        text: "SQLException",
        correct: false,
      },
    ],
    correctAnswers: 3,
    explanation:
      "NullPointerException, ArrayIndexOutOfBoundsException, and RuntimeException are unchecked exceptions.",
  },
  {
    id: "3",
    difficulty: 3,
    text: "What is the difference between checked and unchecked exceptions in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "Checked exceptions must be declared in a method or constructors throws clause if they can be thrown by the execution of the method or constructor and propagate outside the method or constructor boundary.",
        correct: true,
      },
      {
        text: "Unchecked exceptions do not need to be declared in a method or constructors throws clause.",
        correct: true,
      },
      {
        text: "Checked exceptions are instances of RuntimeException or its subclasses.",
        correct: false,
      },
      {
        text: "Unchecked exceptions are instances of Exception or its subclasses (excluding RuntimeException).",
        correct: false,
      },
      {
        text: "Checked exceptions can be ignored by the programmer.",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "Checked exceptions must be declared or handled, while unchecked exceptions do not need to be declared.",
  },
  {
    id: "4",
    difficulty: 2,
    text: "What will be the output of the following code snippet involving Mars?",
    type: "code",
    content:
      'try {\n    int[] marsMoons = new int[2];\n    System.out.println(marsMoons[2]);\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("Caught an exception!");\n}\n',
    language: "java",
    answers: [
      {
        text: "Caught an exception!",
        correct: true,
      },
      {
        text: "Compilation error",
        correct: false,
      },
      {
        text: "Runtime error",
        correct: false,
      },
      {
        text: "NullPointerException",
        correct: false,
      },
      {
        text: "Index 2 out of bounds for length 2",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The catch block handles the ArrayIndexOutOfBoundsException thrown by accessing an invalid index.",
  },
  {
    id: "5",
    difficulty: 3,
    text: 'Which of the following statements about the "finally" block in Java are true?',
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "The finally block always executes when the try block exits.",
        correct: true,
      },
      {
        text: "The finally block executes only if an exception is thrown.",
        correct: false,
      },
      {
        text: "The finally block will not execute if System.exit() is called in the try or catch block.",
        correct: true,
      },
      {
        text: "The finally block is optional.",
        correct: true,
      },
      {
        text: "The finally block executes before the catch block.",
        correct: false,
      },
    ],
    correctAnswers: 3,
    explanation:
      "The finally block always executes when the try block exits, except when System.exit() is called, and it is optional.",
  },
  {
    id: "6",
    difficulty: 4,
    text: "What will be the output of the following code snippet involving Jupiter?",
    type: "code",
    content:
      'try {\n    System.out.println("Exploring Jupiter");\n    return;\n} finally {\n    System.out.println("End of mission");\n}\n',
    language: "java",
    answers: [
      {
        text: "Exploring Jupiter\\nEnd of mission",
        correct: true,
      },
      {
        text: "Exploring Jupiter",
        correct: false,
      },
      {
        text: "End of mission",
        correct: false,
      },
      {
        text: "Compilation error",
        correct: false,
      },
      {
        text: "Runtime error",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The finally block executes even if the try block has a return statement.",
  },
  {
    id: "7",
    difficulty: 2,
    text: "Which keyword is used to declare that a method can throw an exception in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "throws",
        correct: true,
      },
      {
        text: "throw",
        correct: false,
      },
      {
        text: "catch",
        correct: false,
      },
      {
        text: "finally",
        correct: false,
      },
      {
        text: "exception",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The throws keyword is used in a method declaration to specify that the method can throw an exception.",
  },
  {
    id: "8",
    difficulty: 3,
    text: 'What is the difference between "throws" and "throw" in Java?',
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "The throws keyword is used in a method signature to declare that a method can throw exceptions.",
        correct: true,
      },
      {
        text: "The throw keyword is used to actually throw an exception.",
        correct: true,
      },
      {
        text: "The throws keyword is used to catch exceptions.",
        correct: false,
      },
      {
        text: "The throw keyword is used to declare exceptions in a method signature.",
        correct: false,
      },
      {
        text: "There is no difference between throws and throw.",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "throws is used to declare exceptions, while throw is used to actually throw an exception.",
  },
  {
    id: "9",
    difficulty: 3,
    text: "Which of the following is an example of a try-with-resources statement in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: 'try (BufferedReader br = new BufferedReader(new FileReader("planets.txt"))) {\n    System.out.println(br.readLine());\n}\n',
        correct: true,
      },
      {
        text: 'try (BufferedReader br = new BufferedReader(new FileReader("planets.txt"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    e.printStackTrace();\n}\n',
        correct: true,
      },
      {
        text: 'try (BufferedReader br = new BufferedReader(new FileReader("planets.txt"))) {\n    System.out.println(br.readLine());\n} finally {\n    br.close();\n}\n',
        correct: false,
      },
      {
        text: 'try (BufferedReader br = new BufferedReader(new FileReader("planets.txt"))) {\n    System.out.println(br.readLine());\n} catch (IOException e) {\n    e.printStackTrace();\n} finally {\n    br.close();\n}\n',
        correct: false,
      },
      {
        text: "try-with-resources is not a valid statement in Java.",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "A try-with-resources statement automatically closes the resource at the end of the statement.",
  },
  {
    id: "10",
    difficulty: 2,
    text: "Which of the following is an example of handling or declaring an exception in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "public void explore() throws IOException {\n    // code that might throw IOException\n}\n",
        correct: true,
      },
      {
        text: "public void explore() {\n    try {\n        // code that might throw IOException\n    } catch (IOException e) {\n        e.printStackTrace();\n    }\n}\n",
        correct: true,
      },
      {
        text: "public void explore() {\n    // code that might throw IOException\n}\n",
        correct: false,
      },
      {
        text: "public void explore() handles IOException;",
        correct: false,
      },
      {
        text: "public void explore() {\n    throw new IOException();\n}\n",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "Exceptions can be handled using try-catch or declared using throws in the method signature.",
  },
  {
    id: "11",
    difficulty: 4,
    text: "Which of the following statements about errors in Java are true?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "Errors are serious problems that a reasonable application should not try to catch.",
        correct: true,
      },
      {
        text: "Errors are a type of unchecked exception.",
        correct: false,
      },
      {
        text: "Errors are instances of Throwable that indicate serious problems that applications should not try to handle.",
        correct: true,
      },
      {
        text: "Errors are instances of Exception.",
        correct: false,
      },
      {
        text: "Errors are instances of RuntimeException.",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "Errors are serious problems that applications should not try to catch or handle, and they are instances of Throwable.",
  },
  {
    id: "12",
    difficulty: 3,
    text: "What will be the output of the following code snippet involving Saturn?",
    type: "code",
    content:
      'try {\n    int result = 100 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Cannot divide by zero");\n} finally {\n    System.out.println("Exploring Saturn");\n}\n',
    language: "java",
    answers: [
      {
        text: "Cannot divide by zero\\nExploring Saturn",
        correct: true,
      },
      {
        text: "Cannot divide by zero",
        correct: false,
      },
      {
        text: "Exploring Saturn",
        correct: false,
      },
      {
        text: "Compilation error",
        correct: false,
      },
      {
        text: "Runtime error",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The catch block handles the ArithmeticException, and the finally block executes afterwards.",
  },
  {
    id: "13",
    difficulty: 3,
    text: "What will be the output of the following code snippet involving Neptune?",
    type: "code",
    content:
      'try {\n    throw new Exception("Neptune Exception");\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n} finally {\n    System.out.println("End of Neptune exploration");\n}\n',
    language: "java",
    answers: [
      {
        text: "Neptune Exception\\nEnd of Neptune exploration",
        correct: true,
      },
      {
        text: "End of Neptune exploration",
        correct: false,
      },
      {
        text: "Neptune Exception",
        correct: false,
      },
      {
        text: "Compilation error",
        correct: false,
      },
      {
        text: "Runtime error",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The catch block handles the thrown exception, and the finally block executes afterwards.",
  },
  {
    id: "14",
    difficulty: 2,
    text: "Which of the following correctly declares that a method might throw an IOException in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "public void readData() throws IOException",
        correct: true,
      },
      {
        text: "public void readData() throw IOException",
        correct: false,
      },
      {
        text: "public void readData() throws Exception",
        correct: false,
      },
      {
        text: "public void readData() throw Exception",
        correct: false,
      },
      {
        text: "public void readData() handles IOException",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The throws keyword is used in the method signature to declare that a method can throw an exception.",
  },
  {
    id: "15",
    difficulty: 4,
    text: "Which of the following code snippets correctly handles multiple exceptions in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "try {\n    // code that might throw IOException or SQLException\n} catch (IOException e) {\n    e.printStackTrace();\n} catch (SQLException e) {\n    e.printStackTrace();\n}\n",
        correct: true,
      },
      {
        text: "try {\n    // code that might throw IOException or SQLException\n} catch (IOException | SQLException e) {\n    e.printStackTrace();\n}\n",
        correct: true,
      },
      {
        text: "try {\n    // code that might throw IOException or SQLException\n} catch (Exception e) {\n    e.printStackTrace();\n}\n",
        correct: false,
      },
      {
        text: "try {\n    // code that might throw IOException or SQLException\n} catch (IOException) {\n    e.printStackTrace();\n} catch (SQLException) {\n    e.printStackTrace();\n}\n",
        correct: false,
      },
      {
        text: "try-catch can only handle one type of exception at a time.",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "Multiple exceptions can be handled using separate catch blocks or a multi-catch block with the | operator.",
  },
  {
    id: "16",
    difficulty: 3,
    text: "Which of the following statements about exception handling are true?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "Exception handling allows a program to continue executing after an exception is handled.",
        correct: true,
      },
      {
        text: "Exception handling separates error-handling code from regular code.",
        correct: true,
      },
      {
        text: "Exception handling can improve a programs robustness.",
        correct: true,
      },
      {
        text: "Exception handling can prevent runtime errors.",
        correct: false,
      },
      {
        text: "Exception handling is optional in Java.",
        correct: false,
      },
    ],
    correctAnswers: 3,
    explanation:
      "Exception handling allows for more robust programs by separating error-handling code and allowing continued execution.",
  },
  {
    id: "17",
    difficulty: 4,
    text: "What will be the output of the following code snippet involving Uranus?",
    type: "code",
    content:
      'try {\n    int[] uranusMoons = new int[5];\n    System.out.println(uranusMoons[10]);\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("Index out of bounds");\n} finally {\n    System.out.println("Exploring Uranus");\n}\n',
    language: "java",
    answers: [
      {
        text: "Index out of bounds\\nExploring Uranus",
        correct: true,
      },
      {
        text: "Exploring Uranus",
        correct: false,
      },
      {
        text: "Index out of bounds",
        correct: false,
      },
      {
        text: "Compilation error",
        correct: false,
      },
      {
        text: "Runtime error",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The catch block handles the ArrayIndexOutOfBoundsException. The finally block executes afterwards.",
  },
  {
    id: "18",
    difficulty: 2,
    text: "Which of the following is true about try-with-resources in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "It automatically closes resources when the try block exits.",
        correct: true,
      },
      {
        text: "It requires resources to implement the AutoCloseable interface.",
        correct: true,
      },
      {
        text: "It can have multiple resources declared in a single statement.",
        correct: true,
      },
      {
        text: "It does not allow a finally block.",
        correct: false,
      },
      {
        text: "It can only be used with file streams.",
        correct: false,
      },
    ],
    correctAnswers: 3,
    explanation:
      "try-with-resources automatically closes resources that implement AutoCloseable and can have multiple resources declared.",
  },
  {
    id: "19",
    difficulty: 4,
    text: "Which of the following is an example of a custom exception in Java?",
    type: "conceptual",
    language: "java",
    answers: [
      {
        text: "public class PlanetException extends Exception {\n    public PlanetException(String message) {\n        super(message);\n    }\n}\n",
        correct: true,
      },
      {
        text: "public class PlanetException extends Throwable {\n    public PlanetException(String message) {\n        super(message);\n    }\n}\n",
        correct: false,
      },
      {
        text: "public class PlanetException extends RuntimeException {\n    public PlanetException(String message) {\n        super(message);\n    }\n}\n",
        correct: true,
      },
      {
        text: "public class PlanetException extends Error {\n    public PlanetException(String message) {\n        super(message);\n    }\n}\n",
        correct: false,
      },
      {
        text: "public class PlanetException extends CustomException {}",
        correct: false,
      },
    ],
    correctAnswers: 2,
    explanation:
      "Custom exceptions are typically created by extending Exception or RuntimeException.",
  },
  {
    id: "20",
    difficulty: 3,
    text: "What will be the output of the following code snippet involving Venus?",
    type: "code",
    content:
      'try {\n    String venusInfo = null;\n    System.out.println(venusInfo.length());\n} catch (NullPointerException e) {\n    System.out.println("Venus info is missing");\n} finally {\n    System.out.println("Exploring Venus");\n}\n',
    language: "java",
    answers: [
      {
        text: "Venus info is missing\\nExploring Venus",
        correct: true,
      },
      {
        text: "Exploring Venus",
        correct: false,
      },
      {
        text: "Venus info is missing",
        correct: false,
      },
      {
        text: "Compilation error",
        correct: false,
      },
      {
        text: "Runtime error",
        correct: false,
      },
    ],
    correctAnswers: 1,
    explanation:
      "The catch block handles the NullPointerException, and the finally block executes afterwards.",
  },
];

export default exam;
