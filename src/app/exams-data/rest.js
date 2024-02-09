export const restExam = [
    {
        id: '1',
        difficulty: 2,
        text: "Which of the following URL patterns is considered a best practice for a RESTful service to update a specific user's information?",
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: '/updateUser?id=123',
                correct: false,
            },
            {
                text: '/users/update/123',
                correct: false,
            },
            {
                text: '/users/123',
                correct: true,
            },
            {
                text: '/userUpdate/123',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'RESTful best practices suggest using HTTP verbs (GET, POST, PUT, DELETE) for actions and keeping URLs as nouns that represent resources. The URL `/users/123` with a PUT request is the standard way to update the information for user with ID 123.',
    },
    {
        id: '2',
        difficulty: 3,
        text: 'What is the recommended practice for structuring URLs in a RESTful API that involves a relationship between two resources, such as books and authors?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: '/books/authors/456',
                correct: false,
            },
            {
                text: '/authors/456/books',
                correct: true,
            },
            {
                text: '/books/123/authors/456',
                correct: true,
            },
            {
                text: '/getBooksByAuthor/456',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 2,
        explanation:
            'For relationships between resources, RESTful API URLs should reflect this hierarchy. `/authors/456/books` lists books for a specific author, and `/books/123/authors/456` could represent a specific relationship, like the primary author for a book.',
    },
    {
        id: '3',
        difficulty: 4,
        text: 'In RESTful API design, how should a service that filters resources based on multiple criteria, such as books by genre and publication year, structure its URL?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: '/books/genre/sci-fi/year/2020',
                correct: false,
            },
            {
                text: '/books?genre=sci-fi&year=2020',
                correct: true,
            },
            {
                text: '/getBooks/genre/sci-fi/year/2020',
                correct: false,
            },
            {
                text: '/books/genre-sci-fi/year-2020',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'RESTful API design encourages the use of query parameters for filtering resources based on criteria. The URL `/books?genre=sci-fi&year=2020` uses query parameters correctly to filter books by genre and publication year.',
    },
    {
        id: '4',
        difficulty: 2,
        text: 'What is the correct way to represent a collection of books with titles and authors in JSON format?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: '`{"books": [{"title": "Book One", "author": "Author One"}, {"title": "Book Two", "author": "Author Two"}]}`',
                correct: true,
            },
            {
                text: '`[books: [title: "Book One", author: "Author One", title: "Book Two", author: "Author Two"]]`',
                correct: false,
            },
            {
                text: '`{"books": "title": "Book One", "author": "Author One", "title": "Book Two", "author": "Author Two"}`',
                correct: false,
            },
            {
                text: '`["Book One": "Author One", "Book Two": "Author Two"]`',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'JSON represents objects with curly braces `{}` and key-value pairs, and arrays with square brackets `[]`. A collection of books with titles and authors should be an array of objects, each object containing the title and author as key-value.',
    },
    {
        id: '6',
        difficulty: 2,
        text: 'Which HTTP method is idempotent and commonly used for updating resources fully?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'GET',
                correct: false,
            },
            {
                text: 'POST',
                correct: false,
            },
            {
                text: 'PUT',
                correct: true,
            },
            {
                text: 'PATCH',
                correct: false,
            },
            {
                text: 'DELETE',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "PUT is an idempotent method used in HTTP for updating resources. Unlike POST, which can create multiple resources, a PUT request to a resource URL will update the resource if it exists or create it if it doesn't.",
    },
    {
        id: '7',
        difficulty: 3,
        text: 'What is the primary difference between the HTTP methods POST and PATCH?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'POST is used for creating resources, while PATCH is used for partial updates of resources.',
                correct: true,
            },
            {
                text: 'PATCH can create new resources, but POST cannot.',
                correct: false,
            },
            {
                text: 'POST is idempotent, whereas PATCH is not.',
                correct: false,
            },
            {
                text: 'There is no difference; they are interchangeable.',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'POST is generally used to create new resources on the server, whereas PATCH is used for making partial updates to an existing resource.',
    },
    {
        id: '8',
        difficulty: 2,
        text: "How can you use request parameters to filter results in a RESTful API's URL?",
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: "By appending them to the URL's path",
                correct: false,
            },
            {
                text: 'By including them in the request body',
                correct: false,
            },
            {
                text: 'By adding them as query parameters in the URL (e.g., /api/users?age=30)',
                correct: true,
            },
            {
                text: 'By specifying them in the HTTP headers',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "Request parameters, often known as query parameters, are appended to the URL after a '?' and used to filter or customize the response. For example, '/api/users?age=30' filters users by age.",
    },
    {
        id: '9',
        difficulty: 3,
        text: 'In a RESTful service, why would you use request parameters instead of path variables?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'To uniquely identify a resource',
                correct: false,
            },
            {
                text: 'To implement secure data transmission',
                correct: false,
            },
            {
                text: 'To filter or sort the data returned by the server',
                correct: true,
            },
            {
                text: 'To specify the HTTP method of the request',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'Request parameters (query parameters) are used for filtering, sorting, or specifying the format of the response, not for uniquely identifying resources, which is the purpose of path variables.',
    },
    {
        id: '10',
        difficulty: 2,
        text: 'When designing a REST API, what is the purpose of using path variables in a URL?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'To specify the version of the API',
                correct: false,
            },
            {
                text: "To directly access a specific resource or a resource's property (e.g., /users/{userId})",
                correct: true,
            },
            {
                text: 'To add optional filtering parameters to the request',
                correct: false,
            },
            {
                text: 'To define the content type of the response',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "Path variables are used within the URL path to uniquely identify a specific resource or a resource's property, allowing for a clean and intuitive API design.",
    },
    {
        id: '11',
        difficulty: 3,
        text: 'How do path variables differ from query parameters in RESTful URLs?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: "Path variables are part of the URL's path, while query parameters are appended after a '?'",
                correct: true,
            },
            {
                text: 'Path variables are only used in POST requests, while query parameters are used in GET requests',
                correct: false,
            },
            {
                text: 'Path variables can be omitted, but query parameters cannot',
                correct: false,
            },
            {
                text: 'Path variables specify HTTP headers, whereas query parameters specify the request body',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "Path variables are used within the URL's path to specify a specific resource or attribute, offering a hierarchical structure. Query parameters, appended after a '?', are used for filtering, sorting, or pagination.",
    },
    {
        id: '12',
        difficulty: 3,
        text: 'What is the primary reason for using HTTP status codes in RESTful API responses?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'To indicate the success or failure of an API request',
                correct: true,
            },
            {
                text: 'To encrypt the response data',
                correct: false,
            },
            {
                text: 'To increase the size of the response',
                correct: false,
            },
            {
                text: 'To specify the API version',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'HTTP status codes provide a standardized way to indicate the outcome of a request, helping clients understand if it was successful, and if not, why.',
    },
    {
        id: '13',
        difficulty: 3,
        text: 'In RESTful API design, why is it important to use resource naming conventions consistently?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'To make the API easier to understand and use for developers',
                correct: true,
            },
            {
                text: 'To reduce the amount of data transmitted',
                correct: false,
            },
            {
                text: 'To ensure the API calls are encrypted',
                correct: false,
            },
            {
                text: 'To automatically generate API documentation',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'Consistent resource naming conventions improve the usability and discoverability of the API, making it more intuitive for developers to interact with.',
    },
    {
        id: '15',
        difficulty: 3,
        text: 'When designing a RESTful API, how should subresources be represented in the URL to maintain a hierarchical relationship between resources?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'By using query parameters',
                correct: false,
            },
            {
                text: 'By separating the parent and child resources with a colon (:)',
                correct: false,
            },
            {
                text: "By nesting the subresource's identifier within the parent resource's path (e.g., /parents/{parentId}/children/{childId})",
                correct: true,
            },
            {
                text: 'By using HTTP headers to specify the relationship',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "In RESTful API design, subresources should be represented by nesting their identifiers within the parent resource's path. This approach maintains a clear hierarchical relationship between the resources.",
    },
    {
        id: '17',
        difficulty: 3,
        text: 'Given the JSON structure of an employee object with nested projects, how do you access the name of the first project?',
        type: 'code',
        content: `
            {
                "employee": {
                    "name": "John Doe",
                    "id": "12345",
                    "projects": [
                        {"name": "Project A", "status": "In progress"},
                        {"name": "Project B", "status": "Completed"}
                    ]
                }
            }
        `,
        language: 'json',
        answers: [
            {
                text: 'employee.projects[0].name',
                correct: true,
            },
            {
                text: "employee['projects']['name']",
                correct: false,
            },
            {
                text: 'employee.projects.name[0]',
                correct: false,
            },
            {
                text: 'projects[0].name',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            "To access the name of the first project, you navigate through the structure: starting from the `employee` object, then to the `projects` array, and finally accessing the first element's `name` property.",
    },
    {
        id: '18',
        difficulty: 2,
        text: 'Why is the `Content-Type` header important in HTTP requests and responses?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'It specifies the DNS settings for the request.',
                correct: false,
            },
            {
                text: 'It indicates the size of the request or response body.',
                correct: false,
            },
            {
                text: 'It determines the media type (format) of the request or response body, such as `application/json`.',
                correct: true,
            },
            {
                text: 'It sets the character encoding of the URL.',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The `Content-Type` header is crucial because it tells the server and client the format of the data in the request or response body, enabling correct parsing and handling of the content.',
    },
    {
        id: '19',
        difficulty: 2,
        text: 'What are the roles of HTTP headers in a request or response? (Choose three)',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'Specifying the preferred language of the response',
                correct: true,
            },
            {
                text: 'Determining the method used in the HTTP request',
                correct: false,
            },
            {
                text: 'Indicating the media type of the body sent to the receiver',
                correct: true,
            },
            {
                text: 'Controlling the cache policy of the response',
                correct: true,
            },
            {
                text: 'Specifying the screen resolution of the client device',
                correct: false,
            },
        ],
        correctAnswers: 3,
        explanation:
            'HTTP headers play a crucial role in defining how a request or response should be handled. They can specify preferences like language, control how content is cached, and indicate the format of data being transmitted.',
    },
    {
        id: '20',
        difficulty: 2,
        text: 'What is the primary function of HTTP in web communications?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'Encrypting data sent over the internet',
                correct: false,
            },
            {
                text: 'Assigning IP addresses to devices on the internet',
                correct: false,
            },
            {
                text: 'Facilitating the transfer of data between web servers and clients',
                correct: true,
            },
            {
                text: 'Compressing data to reduce bandwidth usage',
                correct: false,
            },
            {
                text: 'Routing emails between mail servers',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The Hypertext Transfer Protocol (HTTP) is a foundational technology of the web, designed primarily to enable the communication between web servers and clients, facilitating the transfer of hypertext and other media.',
    },
    {
        id: '21',
        difficulty: 3,
        text: 'What are the key differences between HTTP and HTTPS? (Choose two)',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'HTTPS uses TCP port 80 by default, while HTTP uses TCP port 443',
                correct: false,
            },
            {
                text: 'HTTP is encrypted by default, whereas HTTPS is not',
                correct: false,
            },
            {
                text: 'HTTPS encrypts data to provide security, using SSL or TLS',
                correct: true,
            },
            {
                text: 'HTTP operates at the application layer, while HTTPS operates at the transport layer',
                correct: false,
            },
            {
                text: 'HTTPS includes a layer of encryption for security purposes, which HTTP does not',
                correct: true,
            },
        ],
        correctAnswers: 2,
        explanation:
            'HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, using SSL/TLS to encrypt data for secure communications, whereas HTTP data is not encrypted. This encryption protects against eavesdropping and man-in-the-middle attacks.',
    },
    {
        id: '22',
        difficulty: 2,
        text: 'What does the RESTful route `GET /planets/1234/moons/5` imply about the resource being requested?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'It requests a list of all moons for planet 1234.',
                correct: false,
            },
            {
                text: 'It requests the fifth moon of the planet with ID 1234.',
                correct: true,
            },
            {
                text: 'It creates a new moon under the planet with ID 1234.',
                correct: false,
            },
            {
                text: 'It updates information for the planet with ID 1234.',
                correct: false,
            },
            {
                text: 'None of the above',
                correct: false,
            },
        ],
        correctAnswers: 1,
        explanation:
            'The route `GET /planets/1234/moons/5` is designed to retrieve data about a specific resource. In this context, it implies fetching information for the moon with ID 5 that belongs to the planet with ID 1234, using the GET method to request data.',
    },
    {
        id: '23',
        difficulty: 2,
        text: 'What are the benefits of using readable and understandable URLs in a RESTful API? (Choose three)',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'They facilitate SEO optimization for API documentation pages.',
                correct: false,
            },
            {
                text: "They improve the developer's experience by making the API more intuitive.",
                correct: true,
            },
            {
                text: 'They ensure data encryption and security.',
                correct: false,
            },
            {
                text: 'They aid in self-documentation of the API, making it easier to understand resource hierarchy.',
                correct: true,
            },
            {
                text: 'They help in maintaining and debugging the API by providing clear context in logs and error messages.',
                correct: true,
            },
        ],
        correctAnswers: 3,
        explanation:
            'Readable and understandable URLs make a RESTful API intuitive and self-documenting, enhance the developer experience by providing clear insight into the function of an endpoint, and aid in debugging by offering context.',
    },
    {
        id: '24',
        difficulty: 2,
        text: 'Why is it important for APIs to remain stable over a long period?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'To reduce the cost of maintaining client applications',
                correct: true,
            },
            {
                text: 'To increase the frequency of server updates',
                correct: false,
            },
            {
                text: 'To ensure backward compatibility and minimize disruption for API consumers',
                correct: true,
            },
            {
                text: "To complicate the API's architecture",
                correct: false,
            },
            {
                text: 'To improve the security of client applications',
                correct: true,
            },
        ],
        correctAnswers: 3,
        explanation:
            'API stability is crucial for maintaining backward compatibility, reducing maintenance costs, and ensuring security. It minimizes disruptions and adjustments needed on the client side, fostering trust and reliability in the service provided.',
    },
    {
        id: '25',
        difficulty: 3,
        text: 'What is the purpose of versioning in API design?',
        type: '',
        content: '',
        language: '',
        answers: [
            {
                text: 'To allow developers to make breaking changes without disrupting existing clients',
                correct: true,
            },
            {
                text: "To reduce the API's performance and speed",
                correct: false,
            },
            {
                text: 'To make the API documentation more complex',
                correct: false,
            },
            {
                text: 'To track the number of API requests',
                correct: false,
            },
            {
                text: 'To facilitate parallel development on different versions of the API',
                correct: true,
            },
        ],
        correctAnswers: 2,
        explanation:
            'API versioning is critical for introducing new features or making changes that could break backward compatibility, allowing developers to evolve the API without affecting existing clients. It also supports parallel development.',
    },
]
