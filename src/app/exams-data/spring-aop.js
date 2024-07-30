const exam = [
    {
        "id": "1",
        "difficulty": 2,
        "text": "What is the purpose of Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To manage cross-cutting concerns in applications.",
                "correct": true
            },
            {
                "text": "To handle HTTP requests in Spring MVC.",
                "correct": false
            },
            {
                "text": "To manage database transactions.",
                "correct": false
            },
            {
                "text": "To provide data access abstraction.",
                "correct": false
            },
            {
                "text": "To manage dependency injection.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Spring AOP is used to manage cross-cutting concerns like logging, security, etc."
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "What is a cross-cutting concern in the context of Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "A concern that affects multiple layers in an application.",
                "correct": true
            },
            {
                "text": "A concern that only affects the UI layer.",
                "correct": false
            },
            {
                "text": "A concern that only affects database transactions.",
                "correct": false
            },
            {
                "text": "A concern related to user authentication.",
                "correct": false
            },
            {
                "text": "A concern that only affects performance optimization.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Cross-cutting concerns affect multiple layers, such as services, persistence, etc."
    },
    {
        "id": "3",
        "difficulty": 2,
        "text": "What is a pointcut in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "An expression that defines join points.",
                "correct": true
            },
            {
                "text": "A method that performs business logic.",
                "correct": false
            },
            {
                "text": "A class that defines AOP advice.",
                "correct": false
            },
            {
                "text": "A framework for testing applications.",
                "correct": false
            },
            {
                "text": "A library for data access abstraction.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "A pointcut is an expression that defines the join points in AOP."
    },
    {
        "id": "4",
        "difficulty": 3,
        "text": "What does the @Pointcut annotation do in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Defines a reusable pointcut expression.",
                "correct": true
            },
            {
                "text": "Executes before a method invocation.",
                "correct": false
            },
            {
                "text": "Executes after a method invocation.",
                "correct": false
            },
            {
                "text": "Handles exceptions thrown by a method.",
                "correct": false
            },
            {
                "text": "Configures the application context.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Pointcut defines a reusable pointcut expression in Spring AOP."
    },
    {
        "id": "5",
        "difficulty": 3,
        "text": "What is the difference between Before, After, and Around advice in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Before executes before, After after, and Around both before and after.",
                "correct": true
            },
            {
                "text": "Before and After are the same; Around is different.",
                "correct": false
            },
            {
                "text": "Around executes before, Before after, and After both before and after.",
                "correct": false
            },
            {
                "text": "Before executes after, After before, and Around both before and after.",
                "correct": false
            },
            {
                "text": "Before and Around are the same; After is different.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Before executes before a method, After after, and Around both before and after."
    },
    {
        "id": "6",
        "difficulty": 3,
        "text": "What is weaving in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "The process of linking aspects with other application types.",
                "correct": true
            },
            {
                "text": "The process of configuring the application context.",
                "correct": false
            },
            {
                "text": "The process of handling HTTP requests.",
                "correct": false
            },
            {
                "text": "The process of managing database transactions.",
                "correct": false
            },
            {
                "text": "The process of deploying applications.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Weaving is the process of linking aspects with other application types to create an advised object."
    },
    {
        "id": "7",
        "difficulty": 2,
        "text": "What is a join point in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "A point during the execution of a program.",
                "correct": true
            },
            {
                "text": "A method that performs business logic.",
                "correct": false
            },
            {
                "text": "A framework for unit testing.",
                "correct": false
            },
            {
                "text": "A class that defines AOP advice.",
                "correct": false
            },
            {
                "text": "A library for data access abstraction.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "A join point is a point during the execution of a program, such as a method call or exception being thrown."
    },
    {
        "id": "8",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Using @Before advice)",
        "type": "code",
        "content": "@Before\npublic void beforeAdvice() {\n    System.out.println(\"Before method execution\");\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Yes",
                "correct": false
            },
            {
                "text": "It compiles, but IntelliJ will show a warning",
                "correct": false
            },
            {
                "text": "It throws a compilation error",
                "correct": true
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
        "explanation": "The code does not compile since a pointcut expression is required."
    },
    {
        "id": "9",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Using @After advice)",
        "type": "code",
        "content": "@After(\"execution(* com.planet.JupiterService.*(..))\")\npublic void afterAdvice() {\n    System.out.println(\"After method execution\");\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Yes",
                "correct": true
            },
            {
                "text": "Maybe",
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
        "explanation": "The code compiles correctly and applies the @After advice to methods in JupiterService."
    },
    {
        "id": "10",
        "difficulty": 3,
        "text": "Does is the true for the following code?",
        "type": "code",
        "content": "@Around(\"execution(* com.planet.SaturnService.*(..))\")\npublic Object aroundAdvice(ProceedingJoinPoint joinPoint) throws Throwable {\n    System.out.println(\"Around method execution\");\n    Object result = joinPoint.proceed();\n    System.out.println(\"After method execution\");\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "It compiles without problems.",
                "correct": false
            },
            {
                "text": "It compiles, but IntelliJ will complain.",
                "correct": false
            },
            {
                "text": "It throws a compilation error",
                "correct": true
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
        "explanation": "The code does not compile, since the return type is object but nothing is returned."
    },
    {
        "id": "11",
        "difficulty": 3,
        "text": "What is the purpose of the ProceedingJoinPoint in @Around advice?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To proceed with the method execution on the target and get the result.",
                "correct": true
            },
            {
                "text": "To configure the application context.",
                "correct": false
            },
            {
                "text": "To manage database transactions.",
                "correct": false
            },
            {
                "text": "To handle HTTP requests.",
                "correct": false
            },
            {
                "text": "To deploy the application.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "ProceedingJoinPoint is used in @Around advice to proceed with the method execution and get the result."
    },
    {
        "id": "12",
        "difficulty": 3,
        "text": "What is the role of an aspect in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To modularize cross-cutting concerns.",
                "correct": true
            },
            {
                "text": "To handle HTTP requests.",
                "correct": false
            },
            {
                "text": "To manage database transactions.",
                "correct": false
            },
            {
                "text": "To provide data access abstraction.",
                "correct": false
            },
            {
                "text": "To configure the application context.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "An aspect in Spring AOP is used to modularize cross-cutting concerns like logging, security, etc."
    },
    {
        "id": "13",
        "difficulty": 3,
        "text": "How do you declare a pointcut expression for all methods in a package?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "execution(* com.planet..*(..))",
                "correct": true
            },
            {
                "text": "execution(* com.planet.*(..))",
                "correct": false
            },
            {
                "text": "within(com.planet.*)",
                "correct": false
            },
            {
                "text": "within(com.planet..*)",
                "correct": false
            },
            {
                "text": "execution(com.planet..*)",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The expression execution(* com.planet..*(..)) matches all methods in the com.planet package and its subpackages."
    },
    {
        "id": "14",
        "difficulty": 3,
        "text": "How do join points and pointcuts work together in Spring AOP?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Pointcuts define which join points are advised.",
                "correct": true
            },
            {
                "text": "Join points define which pointcuts are advised.",
                "correct": false
            },
            {
                "text": "Join points are the methods, pointcuts are the classes.",
                "correct": false
            },
            {
                "text": "Pointcuts are the methods, join points are the classes.",
                "correct": false
            },
            {
                "text": "Join points and pointcuts are the same.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Pointcuts define which join points (specific points in the execution of the program) are advised by an aspect."
    },
    {
        "id": "15",
        "difficulty": 3,
        "text": "What is true for the following code in the Spring environment?",
        "type": "code",
        "content": "@Aspect\npublic class LoggingAspect {\n    @Pointcut(\"execution(* com.planet..*.*(..))\")\n    public void allMethods() {}\n    \n    @Before(\"allMethods()\")\n    public void beforeAdvice() {\n        System.out.println(\"Before method execution\");\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "It compiles and looks correct.",
                "correct": false
            },
            {
                "text": "It compiles, but it will not run as expected.",
                "correct": true
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
                "text": "It throws a Throwable",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly, but the @Component annotation is missing. Spring will ignore this aspect."
    }
];

export default exam;