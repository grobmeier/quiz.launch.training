const exam = [
    {
        "id": "1",
        "difficulty": 2,
        "text": "What is the purpose of the @Component annotation in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To define a Spring-managed component.",
                "correct": true
            },
            {
                "text": "To inject dependencies into a bean.",
                "correct": false
            },
            {
                "text": "To define a configuration class.",
                "correct": false
            },
            {
                "text": "To handle HTTP requests.",
                "correct": false
            },
            {
                "text": "To define a service class.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Component is a generic stereotype for any Spring-managed component. Other stereotypes as @Service as also @Component"
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "Which Spring stereotype is best to define a class that contains pure business logic?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@Service",
                "correct": true
            },
            {
                "text": "@Component",
                "correct": false
            },
            {
                "text": "@Controller",
                "correct": false
            },
            {
                "text": "@Repository",
                "correct": false
            },
            {
                "text": "@RestController",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Service is used to define a service class in Spring."
    },
    {
        "id": "3",
        "difficulty": 2,
        "text": "What are the options to autowire a dependency in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@Autowired",
                "correct": true
            },
            {
                "text": "@Inject",
                "correct": true
            },
            {
                "text": "@Resource",
                "correct": false
            },
            {
                "text": "@Component",
                "correct": false
            },
            {
                "text": "@Service",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "@Autowired is the native way to autowire dependencies in Spring, but Spring also supports @Inject from Jakarta EE."
    },
    {
        "id": "4",
        "difficulty": 3,
        "text": "What is the primary role of the DispatcherServlet in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To dispatch requests to appropriate handlers.",
                "correct": true
            },
            {
                "text": "To manage database connections.",
                "correct": false
            },
            {
                "text": "To handle HTTP responses.",
                "correct": false
            },
            {
                "text": "To initialize the Spring context.",
                "correct": false
            },
            {
                "text": "To define REST endpoints.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "DispatcherServlet is responsible for dispatching requests to appropriate handlers in Spring MVC."
    },
    {
        "id": "5",
        "difficulty": 2,
        "text": "Which annotation is used to map HTTP GET requests to a handler method?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@GetMapping",
                "correct": true
            },
            {
                "text": "@PostMapping",
                "correct": false
            },
            {
                "text": "@PutMapping",
                "correct": false
            },
            {
                "text": "@DeleteMapping",
                "correct": false
            },
            {
                "text": "@RequestMapping",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@GetMapping is used to map HTTP GET requests to a handler method."
    },
    {
        "id": "6",
        "difficulty": 3,
        "text": "How do you define a Spring bean with singleton scope?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@Component @Scope(\"prototype\")",
                "correct": false
            },
            {
                "text": "@Bean @Scope(\"prototype\")",
                "correct": false
            },
            {
                "text": "@Component @Scope(\"singleton\")",
                "correct": true
            },
            {
                "text": "@Service @Scope(\"singleton\")",
                "correct": true
            },
            {
                "text": "@Repository @Scope(\"request\")",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "By default, Spring beans are singleton. You can explicitly define it using @Scope(\"singleton\")."
    },
    {
        "id": "7",
        "difficulty": 3,
        "text": "What kind of injections are supported in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Constructor injection",
                "correct": true
            },
            {
                "text": "Field injection",
                "correct": true
            },
            {
                "text": "Static Method injection",
                "correct": false
            },
            {
                "text": "Extension injection",
                "correct": false
            },
            {
                "text": "Abstract injection",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "The preferred way to inject is by using constructor injection, but also field or setter injection exist."
    },
    {
        "id": "8",
        "difficulty": 3,
        "text": "How do you define a factory method for a Spring bean?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@Bean\\npublic MyBean myBeanFactory() { return new MyBean(); }",
                "correct": true
            },
            {
                "text": "@Component\\npublic MyBean myBeanFactory() { return new MyBean(); }",
                "correct": false
            },
            {
                "text": "@Service\\npublic MyBean myBeanFactory() { return new MyBean(); }",
                "correct": false
            },
            {
                "text": "@Repository\\npublic MyBean myBeanFactory() { return new MyBean(); }",
                "correct": false
            },
            {
                "text": "@Factory\\npublic MyBean myBeanFactory() { return new MyBean(); }",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Bean is used to define a factory method for a Spring bean."
    },
    {
        "id": "9",
        "difficulty": 3,
        "text": "What is the role of ApplicationContext in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To provide configuration information to the application.",
                "correct": true
            },
            {
                "text": "To manage HTTP requests and responses.",
                "correct": false
            },
            {
                "text": "To handle database transactions.",
                "correct": false
            },
            {
                "text": "To create and manage beans.",
                "correct": true
            },
            {
                "text": "To provide a mechanism for dependency injection.",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "ApplicationContext provides configuration information, creates and manages beans, and supports dependency injection."
    },
    {
        "id": "10",
        "difficulty": 3,
        "text": "How do you handle HTTP requests in Spring that should create new resources?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@PostMapping",
                "correct": true
            },
            {
                "text": "@GetMapping",
                "correct": false
            },
            {
                "text": "@PutMapping",
                "correct": false
            },
            {
                "text": "@DeleteMapping",
                "correct": false
            },
            {
                "text": "@RequestMapping",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@PostMapping is used to handle HTTP POST requests in Spring, typically used for creating new data."
    },
    {
        "id": "11",
        "difficulty": 3,
        "text": "What is the difference between @Controller and @RestController?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@RestController combines @Controller and @ResponseBody.",
                "correct": true
            },
            {
                "text": "@RestController is used for RESTful web services.",
                "correct": true
            },
            {
                "text": "@Controller is used for traditional web applications.",
                "correct": true
            },
            {
                "text": "@Controller does not support JSON responses.",
                "correct": false
            },
            {
                "text": "@RestController does not support HTML view resolution.",
                "correct": true
            }
        ],
        "correctAnswers": 4,
        "explanation": "@RestController combines @Controller and @ResponseBody for RESTful web services typically serving JSON."
    },
    {
        "id": "12",
        "difficulty": 3,
        "text": "Which annotation is used to map HTTP requests to a handler method that should remove data from the server?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@DeleteMapping",
                "correct": true
            },
            {
                "text": "@GetMapping",
                "correct": false
            },
            {
                "text": "@PostMapping",
                "correct": false
            },
            {
                "text": "@PutMapping",
                "correct": false
            },
            {
                "text": "@RequestMapping",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@DeleteMapping is used to map HTTP DELETE requests to a handler method."
    },
    {
        "id": "13",
        "difficulty": 3,
        "text": "How do you inject a bean by name in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@Autowired\\n@Qualifier(\"beanName\")",
                "correct": true
            },
            {
                "text": "@Autowired\\n@BeanName(\"beanName\")",
                "correct": false
            },
            {
                "text": "@Inject\\n@Named(\"beanName\")",
                "correct": false
            },
            {
                "text": "@Resource(name=\"beanName\")",
                "correct": true
            },
            {
                "text": "@Autowired\\n@Name(\"beanName\")",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "@Autowired with @Qualifier or @Resource with name attribute is used to inject a bean by name."
    },
    {
        "id": "14",
        "difficulty": 3,
        "text": "How do you use @RequestMapping for a GET request the best way possible?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "@RequestMapping(value = \"/planets\", method = RequestMethod.GET)",
                "correct": true
            },
            {
                "text": "@GetMapping(\"/urlPattern\", RequestMapping.GET)",
                "correct": false
            },
            {
                "text": "@RequestMapping(method = \"GET\")",
                "correct": false
            },
            {
                "text": "@RequestMapping(\"/planets\")",
                "correct": false
            },
            {
                "text": "@RequestMapping(\"/planets\", value = Request.GET)",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@RequestMapping optimally takes value with the URL and a method that defines the RequestMethod."
    },
    {
        "id": "15",
        "difficulty": 3,
        "text": "What is the purpose of the @Repository annotation in Spring?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To indicate that a class is a DAO (Data Access Object) and can work with data storages.",
                "correct": true
            },
            {
                "text": "To define a service class that is connected to the database.",
                "correct": false
            },
            {
                "text": "To handle HTTP requests which are redirected to the database.",
                "correct": false
            },
            {
                "text": "To manage database transactions.",
                "correct": false
            },
            {
                "text": "To define a configuration class which is a repository for all configuration items.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "@Repository is used to indicate that a class is a DAO, which handles data access logic."
    },
    {
        "id": "16",
        "difficulty": 3,
        "text": "Does the following code compile correctly?",
        "type": "code",
        "content": "@Service\npublic class MarsService {\n    @Autowired\n    private JupiterRepository repository;\n}\n",
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
                "text": "It throws a NoSuchBeanDefinitionException",
                "correct": false
            },
            {
                "text": "It throws a BeanCreationException",
                "correct": false
            },
            {
                "text": "It throws a NullPointerException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and autowires the JupiterRepository dependency."
    },
    {
        "id": "17",
        "difficulty": 3,
        "text": "Does the following code compile correctly?",
        "type": "code",
        "content": "@RestController\npublic class PlanetController {\n    @GetMapping(\"/planets\")\n    public List<String> getPlanets() {\n        return Arrays.asList(\"Earth\", \"Mars\", \"Jupiter\");\n    }\n}\n",
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
                "text": "It throws a MethodArgumentNotValidException",
                "correct": false
            },
            {
                "text": "It throws a NoHandlerFoundException",
                "correct": false
            },
            {
                "text": "It throws a BeanCreationException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and maps the /planets URL to the getPlanets() method."
    },
    {
        "id": "18",
        "difficulty": 3,
        "text": "What is the best practice for defining Spring beans?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Use @Component, @Service, @Repository, or @Controller annotations",
                "correct": true
            },
            {
                "text": "Define beans in XML configuration files",
                "correct": false
            },
            {
                "text": "Use @Autowired for all beans",
                "correct": false
            },
            {
                "text": "Avoid using @Configuration",
                "correct": false
            },
            {
                "text": "Use @Bean methods in configuration classes",
                "correct": true
            }
        ],
        "correctAnswers": 2,
        "explanation": "Best practices include using Spring stereotypes for component scanning and @Bean methods in configuration classes."
    },
    {
        "id": "19",
        "difficulty": 3,
        "text": "Which of the following is a best practice when using Spring stereotypes?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Use @Service for service classes",
                "correct": true
            },
            {
                "text": "Use @Repository for DAO classes",
                "correct": true
            },
            {
                "text": "Use @Controller for web controllers",
                "correct": true
            },
            {
                "text": "Use @RestController for RESTful web services",
                "correct": true
            },
            {
                "text": "Use @Component for all classes",
                "correct": false
            }
        ],
        "correctAnswers": 4,
        "explanation": "Best practices include using appropriate stereotypes for service classes, DAOs, web controllers, and RESTful web services."
    },
    {
        "id": "20",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Using @RequestMapping)",
        "type": "code",
        "content": "@Controller\n@RequestMapping(\"/planets\")\npublic class PlanetController {\n    @RequestMapping(\"/list\")\n    public List<String> listPlanets() {\n        return Arrays.asList(\"Earth\", \"Mars\", \"Jupiter\");\n    }\n}\n",
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
                "text": "It throws a MethodArgumentNotValidException",
                "correct": false
            },
            {
                "text": "It throws a NoHandlerFoundException",
                "correct": false
            },
            {
                "text": "It throws a BeanCreationException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and maps the /planets/list URL to the listPlanets() method. However, it is recommended to add a RequestMethod to the annotation."
    }
];

export default exam;