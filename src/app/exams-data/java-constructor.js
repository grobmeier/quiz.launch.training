const exam = [
    {
        "id": "1",
        "difficulty": 1,
        "text": "What is the purpose of a constructor in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "To initialize objects",
                "correct": true
            },
            {
                "text": "To create new methods",
                "correct": false
            },
            {
                "text": "To define new classes",
                "correct": false
            },
            {
                "text": "To set the visibility of the class",
                "correct": false
            },
            {
                "text": "No answer is correct",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "A constructor in Java is used to initialize objects when they are created."
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Test {\n    public Test() {\n        System.out.println(\"Constructor called\");\n    }\n\n    public static void main(String[] args) {\n        Test obj = new Test();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Constructor called",
                "correct": true
            },
            {
                "text": "No output",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            },
            {
                "text": "Runtime error",
                "correct": false
            },
            {
                "text": "No answer is correct",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The constructor is called when a new instance of the class is created, so \"Constructor called\" is printed."
    },
    {
        "id": "3",
        "difficulty": 2,
        "text": "Which of the following is a correct way to define a constructor with arguments in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "public Person(int a) { }",
                "correct": true
            },
            {
                "text": "public void Person(int a) { }",
                "correct": false
            },
            {
                "text": "public constructor Person(int a) { }",
                "correct": false
            },
            {
                "text": "public static Person(int a) { }",
                "correct": false
            },
            {
                "text": "public final Person(int a) { }",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "A constructor is defined without a return type and has the same name as the class."
    },
    {
        "id": "4",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Person {\n    String name;\n    int age;\n\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public void display() {\n        System.out.println(name + \" is \" + age + \" years old.\");\n    }\n\n    public static void main(String[] args) {\n        Person person = new Person(\"Alice\", 30);\n        person.display();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Alice is 30 years old.",
                "correct": true
            },
            {
                "text": "Alice is 0 years old.",
                "correct": false
            },
            {
                "text": "null is 30 years old.",
                "correct": false
            },
            {
                "text": "Alice is 30",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The constructor initializes the name and age fields, and the display method prints the initialized values."
    },
    {
        "id": "5",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Animal {\n    String type;\n\n    public Animal() {\n        this(\"Unknown\");\n    }\n\n    public Animal(String type) {\n        this.type = type;\n    }\n\n    public void printType() {\n        System.out.println(\"Animal type: \" + type);\n    }\n\n    public static void main(String[] args) {\n        Animal animal = new Animal();\n        animal.printType();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Animal type: Unknown",
                "correct": true
            },
            {
                "text": "Animal type: null",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            },
            {
                "text": "Animal type: Animal",
                "correct": false
            },
            {
                "text": "No output",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the parameterized constructor with \"Unknown\" as the argument."
    },
    {
        "id": "6",
        "difficulty": 4,
        "text": "Which of the following is true about default constructors in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "A default constructor is provided by the compiler if no constructors are defined.",
                "correct": true
            },
            {
                "text": "A default constructor can have parameters.",
                "correct": false
            },
            {
                "text": "A default constructor is always private.",
                "correct": false
            },
            {
                "text": "A default constructor must be defined explicitly.",
                "correct": false
            },
            {
                "text": "A default constructor initializes all fields to null.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The compiler provides a no-argument default constructor if no constructors are defined by the programmer."
    },
    {
        "id": "7",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Base {\n    public Base() {\n        System.out.println(\"Base constructor\");\n    }\n}\n\npublic class Derived extends Base {\n    public Derived() {\n        System.out.println(\"Derived constructor\");\n    }\n\n    public static void main(String[] args) {\n        Derived obj = new Derived();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Base constructor\\nDerived constructor",
                "correct": true
            },
            {
                "text": "Derived constructor",
                "correct": false
            },
            {
                "text": "Base constructor",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            },
            {
                "text": "Runtime error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The Base constructor is called first, followed by the Derived constructor."
    },
    {
        "id": "8",
        "difficulty": 4,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Parent {\n    public Parent() {\n        System.out.println(\"Parent constructor\");\n    }\n}\n\npublic class Child extends Parent {\n    public Child() {\n        super();\n        System.out.println(\"Child constructor\");\n    }\n\n    public static void main(String[] args) {\n        Child child = new Child();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Parent constructor\\nChild constructor",
                "correct": true
            },
            {
                "text": "Child constructor\\nParent constructor",
                "correct": false
            },
            {
                "text": "Parent constructor",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            },
            {
                "text": "No output",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The super() call in the Child constructor calls the Parent constructor first."
    },
    {
        "id": "9",
        "difficulty": 2,
        "text": "What is the keyword used to call a superclass constructor in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "super",
                "correct": true
            },
            {
                "text": "this",
                "correct": false
            },
            {
                "text": "parent",
                "correct": false
            },
            {
                "text": "base",
                "correct": false
            },
            {
                "text": "superclass",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The super keyword is used to call a superclass constructor."
    },
    {
        "id": "10",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Vehicle {\n    String type;\n\n    public Vehicle() {\n        this(\"Car\");\n    }\n\n    public Vehicle(String type) {\n        this.type = type;\n    }\n\n    public void displayType() {\n        System.out.println(\"Vehicle type: \" + type);\n    }\n\n    public static void main(String[] args) {\n        Vehicle vehicle = new Vehicle();\n        vehicle.displayType();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Vehicle type: Car",
                "correct": true
            },
            {
                "text": "Vehicle type: null",
                "correct": false
            },
            {
                "text": "Vehicle type: Vehicle",
                "correct": false
            },
            {
                "text": "Vehicle type: Unknown",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the parameterized constructor with \"Car\" as the argument."
    },
    {
        "id": "11",
        "difficulty": 4,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Shape {\n    public Shape() {\n        System.out.println(\"Shape constructor\");\n    }\n}\n\npublic class Circle extends Shape {\n    public Circle() {\n        super();\n        System.out.println(\"Circle constructor\");\n    }\n\n    public static void main(String[] args) {\n        Circle circle = new Circle();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Shape constructor\\nCircle constructor",
                "correct": true
            },
            {
                "text": "Circle constructor\\nShape constructor",
                "correct": false
            },
            {
                "text": "Shape constructor",
                "correct": false
            },
            {
                "text": "Circle constructor",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The super() call in the Circle constructor calls the Shape constructor first."
    },
    {
        "id": "12",
        "difficulty": 3,
        "text": "Which of the following statements is true about the this() constructor call in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "It must be the first statement in the constructor.",
                "correct": true
            },
            {
                "text": "It can be called multiple times in the constructor.",
                "correct": false
            },
            {
                "text": "It can be placed anywhere in the constructor.",
                "correct": false
            },
            {
                "text": "It is optional and can be omitted.",
                "correct": false
            },
            {
                "text": "It must be the last statement in the constructor.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The this() constructor call must be the first statement in the constructor."
    },
    {
        "id": "13",
        "difficulty": 4,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Rectangle {\n    int width;\n    int height;\n\n    public Rectangle() {\n        this(10, 20);\n    }\n\n    public Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    public void displayDimensions() {\n        System.out.println(\"Width: \" + width + \", Height: \" + height);\n    }\n\n    public static void main(String[] args) {\n        Rectangle rectangle = new Rectangle();\n        rectangle.displayDimensions();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Width: 10, Height: 20",
                "correct": true
            },
            {
                "text": "Width: 0, Height: 0",
                "correct": false
            },
            {
                "text": "Width: 10, Height: 0",
                "correct": false
            },
            {
                "text": "Width: 0, Height: 20",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the parameterized constructor with the arguments 10 and 20."
    },
    {
        "id": "14",
        "difficulty": 2,
        "text": "Which of the following is true about constructor overloading in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "Constructors can be overloaded by changing the number of parameters.",
                "correct": true
            },
            {
                "text": "Constructors cannot be overloaded.",
                "correct": false
            },
            {
                "text": "Constructors can be overloaded by changing the return type.",
                "correct": false
            },
            {
                "text": "Constructors can be overloaded by changing the visibility modifier.",
                "correct": false
            },
            {
                "text": "Constructors can be overloaded by adding static keyword.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Constructors can be overloaded by changing the number or type of parameters, but not by changing the return type."
    },
    {
        "id": "15",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Point {\n    int x, y;\n\n    public Point() {\n        this(0, 0);\n    }\n\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    public void display() {\n        System.out.println(\"Point (\" + x + \", \" + y + \")\");\n    }\n\n    public static void main(String[] args) {\n        Point point = new Point(5, 10);\n        point.display();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Point (5, 10)",
                "correct": true
            },
            {
                "text": "Point (0, 0)",
                "correct": false
            },
            {
                "text": "Point (10, 5)",
                "correct": false
            },
            {
                "text": "Point (0, 5)",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The parameterized constructor initializes the x and y fields with the provided values 5 and 10."
    },
    {
        "id": "16",
        "difficulty": 4,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Employee {\n    String name;\n    int id;\n\n    public Employee() {\n        this(\"Unknown\", -1);\n    }\n\n    public Employee(String name, int id) {\n        this.name = name;\n        this.id = id;\n    }\n\n    public void display() {\n        System.out.println(\"Employee: \" + name + \", ID: \" + id);\n    }\n\n    public static void main(String[] args) {\n        Employee emp = new Employee();\n        emp.display();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Employee: Unknown, ID: -1",
                "correct": true
            },
            {
                "text": "Employee: null, ID: 0",
                "correct": false
            },
            {
                "text": "Employee: , ID: 0",
                "correct": false
            },
            {
                "text": "Employee: Unknown, ID: 0",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the parameterized constructor with \"Unknown\" and -1 as the arguments."
    },
    {
        "id": "17",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Box {\n    int width;\n    int height;\n\n    public Box() {\n        this(5);\n    }\n\n    public Box(int side) {\n        this(side, side);\n    }\n\n    public Box(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    public void displayDimensions() {\n        System.out.println(\"Width: \" + width + \", Height: \" + height);\n    }\n\n    public static void main(String[] args) {\n        Box box = new Box();\n        box.displayDimensions();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Width: 5, Height: 5",
                "correct": true
            },
            {
                "text": "Width: 0, Height: 0",
                "correct": false
            },
            {
                "text": "Width: 5, Height: 0",
                "correct": false
            },
            {
                "text": "Width: 0, Height: 5",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the single-argument constructor with the value 5, which in turn calls the two-argument constructor with the same value for both width and height."
    },
    {
        "id": "18",
        "difficulty": 4,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Main {\n    public Main() {\n        this(10);\n        System.out.println(\"Default constructor\");\n    }\n\n    public Main(int x) {\n        System.out.println(\"Parameterized constructor with value: \" + x);\n    }\n\n    public static void main(String[] args) {\n        Main obj = new Main();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "Parameterized constructor with value: 10\\nDefault constructor",
                "correct": true
            },
            {
                "text": "Default constructor\\nParameterized constructor with value: 10",
                "correct": false
            },
            {
                "text": "Parameterized constructor with value: 10",
                "correct": false
            },
            {
                "text": "Default constructor",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the parameterized constructor with the value 10, followed by the print statement in the no-argument constructor."
    },
    {
        "id": "19",
        "difficulty": 2,
        "text": "Which of the following statements is true about constructors in Java?",
        "type": "conceptual",
        "content": "",
        "language": "java",
        "answers": [
            {
                "text": "Constructors do not have a return type.",
                "correct": true
            },
            {
                "text": "Constructors can be abstract.",
                "correct": false
            },
            {
                "text": "Constructors can be static.",
                "correct": false
            },
            {
                "text": "Constructors can be final.",
                "correct": false
            },
            {
                "text": "Constructors can return a value.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Constructors in Java do not have a return type, and they cannot be abstract, static, or final."
    },
    {
        "id": "20",
        "difficulty": 3,
        "text": "What will be the output of the following Java code snippet?",
        "type": "code",
        "content": "public class Student {\n    String name;\n    int grade;\n\n    public Student() {\n        this(\"John Doe\", 10);\n    }\n\n    public Student(String name, int grade) {\n        this.name = name;\n        this.grade = grade;\n    }\n\n    public void display() {\n        System.out.println(name + \" is in grade \" + grade);\n    }\n\n    public static void main(String[] args) {\n        Student student = new Student();\n        student.display();\n    }\n}\n",
        "language": "java",
        "answers": [
            {
                "text": "John Doe is in grade 10",
                "correct": true
            },
            {
                "text": "John Doe is in grade 0",
                "correct": false
            },
            {
                "text": " is in grade 10",
                "correct": false
            },
            {
                "text": "null is in grade 0",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The no-argument constructor calls the parameterized constructor with \"John Doe\" and 10 as the arguments."
    }
];

export default exam;