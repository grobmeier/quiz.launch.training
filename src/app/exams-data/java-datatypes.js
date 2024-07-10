const exam = [
    {
        "id": "1",
        "difficulty": 1,
        "text": "What will be the output of the following code snippet involving Saturn?",
        "type": "code",
        "content": "Integer saturnMoons = 82;\nint moons = saturnMoons;\nSystem.out.println(\"Saturn has \" + moons + \" moons.\");\n",
        "language": "java",
        "answers": [
            {
                "text": "Saturn has 82 moons.",
                "correct": true
            },
            {
                "text": "Saturn has 82.0 moons.",
                "correct": false
            },
            {
                "text": "Saturn has null moons.",
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
        "explanation": "Autoboxing converts the Integer object to an int primitive automatically."
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "Which of the following planets are represented with boolean values correctly?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "boolean isSaturnGasGiant = true;",
                "correct": true
            },
            {
                "text": "boolean hasRingsOfUranus = 1;",
                "correct": false
            },
            {
                "text": "boolean isVenusHot = yes;",
                "correct": false
            },
            {
                "text": "boolean isEarthFlat = false;",
                "correct": true
            },
            {
                "text": "boolean isMarsRed = true;",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "In Java, boolean values are either true or false, not numeric or string literals."
    },
    {
        "id": "3",
        "difficulty": 3,
        "text": "What will be the output of the following code snippet about Jupiter?",
        "type": "code",
        "content": "String jupiterDiameter = 139820;\nInteger diameter = (Integer)jupiterDiameter;\nSystem.out.println(\"The diameter of Jupiter is \" + diameter + \" km.\");\n",
        "language": "java",
        "answers": [
            {
                "text": "The diameter of Jupiter is 139820 km.",
                "correct": false
            },
            {
                "text": "The diameter of Jupiter is 139820.0 km.",
                "correct": false
            },
            {
                "text": "The diameter of Jupiter is null km.",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": true
            },
            {
                "text": "Runtime error",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "Autoboxing is not supported from String to Integer."
    },
    {
        "id": "4",
        "difficulty": 4,
        "text": "Which of the following are correct about autoboxing and unboxing in Java?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Autoboxing converts primitives to their corresponding wrapper classes.",
                "correct": true
            },
            {
                "text": "Unboxing converts wrapper class objects to their corresponding primitives.",
                "correct": true
            },
            {
                "text": "Autoboxing and unboxing are only supported for integers.",
                "correct": false
            },
            {
                "text": "Autoboxing requires explicit casting.",
                "correct": false
            },
            {
                "text": "Unboxing can result in a NullPointerException.",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "Autoboxing and unboxing work with all primitive types and their corresponding wrappers. Unboxing can throw a NullPointerException if the wrapper object is null."
    },
    {
        "id": "5",
        "difficulty": 2,
        "text": "Which statement correctly declares and initializes a boolean variable to check if Neptune is windy?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "boolean isNeptuneWindy = true;",
                "correct": true
            },
            {
                "text": "boolean isNeptuneWindy = \"true\";",
                "correct": false
            },
            {
                "text": "boolean isNeptuneWindy = 1;",
                "correct": false
            },
            {
                "text": "boolean isNeptuneWindy = (true);",
                "correct": true
            },
            {
                "text": "boolean isNeptuneWindy = yes;",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "Boolean variables are initialized using the literals true or false, optionally enclosed in parentheses."
    },
    {
        "id": "6",
        "difficulty": 3,
        "text": "Which of the following code snippets correctly converts a primitive int to an Integer for Mercury?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "int mercuryDistance = 57900000; Integer distance = Integer.valueOf(mercuryDistance);",
                "correct": true
            },
            {
                "text": "int mercuryDistance = 57900000; Integer distance = new Integer(mercuryDistance);",
                "correct": true
            },
            {
                "text": "int mercuryDistance = 57900000; Integer distance = mercuryDistance;",
                "correct": true
            },
            {
                "text": "int mercuryDistance = 57900000; Integer distance = (Integer) mercuryDistance;",
                "correct": false
            },
            {
                "text": "int mercuryDistance = 57900000; Integer distance = mercuryDistance.toString();",
                "correct": false
            }
        ],
        "correctAnswers": 3,
        "explanation": "Autoboxing can be done using assignment, Integer.valueOf(), or the new Integer() constructor."
    },
    {
        "id": "7",
        "difficulty": 1,
        "text": "What will be the output of the following code snippet about Earth?",
        "type": "code",
        "content": "int earthPopulation = 7800000000;\nSystem.out.println(\"The population of Earth is \" + earthPopulation + \" people.\");\n",
        "language": "java",
        "answers": [
            {
                "text": "The population of Earth is 7800000000 people.",
                "correct": true
            },
            {
                "text": "The population of Earth is 7,800,000,000 people.",
                "correct": false
            },
            {
                "text": "The population of Earth is seven billion eight hundred million people.",
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
        "explanation": "The code concatenates the int value with the string and prints it directly."
    },
    {
        "id": "8",
        "difficulty": 3,
        "text": "What will be the output of the following code snippet about Venus?",
        "type": "code",
        "content": "Boolean isVenusBright = true;\nboolean bright = isVenusBright;\nSystem.out.println(\"Is Venus bright? \" + bright);\n",
        "language": "java",
        "answers": [
            {
                "text": "Is Venus bright? true",
                "correct": true
            },
            {
                "text": "Is Venus bright? false",
                "correct": false
            },
            {
                "text": "Is Venus bright? null",
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
        "explanation": "Unboxing converts the Boolean object to a boolean primitive automatically."
    },
    {
        "id": "9",
        "difficulty": 2,
        "text": "Which of the following correctly initializes a String variable with the name of Mars?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "String planet = \"Mars\";",
                "correct": true
            },
            {
                "text": "String planet = Mars;",
                "correct": false
            },
            {
                "text": "String planet = new String(\"Mars\");",
                "correct": true
            },
            {
                "text": "String planet == \"Mars\";",
                "correct": false
            },
            {
                "text": "String planet = \'Mars\';",
                "correct": false
            }
        ],
        "correctAnswers": 3,
        "explanation": "Strings in Java can be initialized using double quotes directly or by creating a new String object."
    },
    {
        "id": "10",
        "difficulty": 4,
        "text": "What will be the output of the following code snippet about Uranus?",
        "type": "code",
        "content": "int uranusMoons = 27;\nInteger moons = Integer.valueOf(uranusMoons);\nSystem.out.println(\"Uranus has \" + moons + \" moons.\");\n",
        "language": "java",
        "answers": [
            {
                "text": "Uranus has 27 moons.",
                "correct": true
            },
            {
                "text": "Uranus has 27.0 moons.",
                "correct": false
            },
            {
                "text": "Uranus has null moons.",
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
        "explanation": "The Integer.valueOf() method converts the int primitive to an Integer object, which is then concatenated with the string."
    },
    {
        "id": "11",
        "difficulty": 1,
        "text": "Which of the following declarations for Neptunes temperature is correct?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "int neptuneTemperature = -214;",
                "correct": true
            },
            {
                "text": "Integer neptuneTemperature = -214;",
                "correct": true
            },
            {
                "text": "Boolean neptuneTemperature = -214;",
                "correct": false
            },
            {
                "text": "boolean neptuneTemperature = -214;",
                "correct": false
            },
            {
                "text": "String neptuneTemperature = \"-214\";",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "Temperature can be represented as an int, Integer, or String, but not as a boolean or Boolean."
    },
    {
        "id": "12",
        "difficulty": 3,
        "text": "What will be the output of the following code snippet about Saturns rings?",
        "type": "code",
        "content": "String saturnRings = \"Beautiful\";\nSystem.out.println(\"Saturns rings are \" + saturnRings);\n",
        "language": "java",
        "answers": [
            {
                "text": "Saturns rings are Beautiful",
                "correct": true
            },
            {
                "text": "Saturns rings are null",
                "correct": false
            },
            {
                "text": "Saturns rings are",
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
        "explanation": "The string value is concatenated directly with the other string and printed."
    },
    {
        "id": "13",
        "difficulty": 4,
        "text": "Which of the following are true about primitive data types in Java?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "int is a signed integer.",
                "correct": true
            },
            {
                "text": "boolean can only hold true or false.",
                "correct": true
            },
            {
                "text": "int can store decimal values.",
                "correct": false
            },
            {
                "text": "boolean can be null.",
                "correct": false
            },
            {
                "text": "int has a default value of 0.",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "int is a signed integer with a default value of 0, and boolean can only hold true or false."
    },
    {
        "id": "14",
        "difficulty": 2,
        "text": "Which of the following are valid String operations in Java?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "String jupiter = \"Jupiter\"; String upper = jupiter.toUpperCase();",
                "correct": true
            },
            {
                "text": "String mars = \"Mars\"; char firstLetter = mars.charAt(0);",
                "correct": true
            },
            {
                "text": "String earth = \"Earth\"; boolean isEqual = earth.equals(\"Earth\");",
                "correct": true
            },
            {
                "text": "String venus = \"Venus\"; int length = venus.size();",
                "correct": false
            },
            {
                "text": "String mercury = \"Mercury\"; mercury.concat(\" is hot\");",
                "correct": true
            }
        ],
        "correctAnswers": 4,
        "explanation": "String operations like toUpperCase(), charAt(), equals(), and concat() are valid in Java, but size() is not a method for String."
    },
    {
        "id": "15",
        "difficulty": 5,
        "text": "What will be the output of the following code snippet about Pluto?",
        "type": "code",
        "content": "String plutoStatus = \"dwarf planet\";\nplutoStatus.toUpperCase();\nSystem.out.println(\"Pluto is a \" + plutoStatus);\n",
        "language": "java",
        "answers": [
            {
                "text": "Pluto is a DWARF PLANET",
                "correct": false
            },
            {
                "text": "Pluto is a dwarf planet",
                "correct": true
            },
            {
                "text": "Pluto is a null",
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
        "explanation": "The toUpperCase() method returns a new string, the old string in the plutoStatus variable stays unchanged: Strings are immutable"
    },
    {
        "id": "16",
        "difficulty": 2,
        "text": "What will be the output of the following code snippet about Mars distance?",
        "type": "code",
        "content": "int marsDistance = 2_250_000_00;\nInteger distance = marsDistance;\nSystem.out.println(\"Mars is \" + distance + \" km away from the Sun.\");\n",
        "language": "java",
        "answers": [
            {
                "text": "Mars is 225000000 km away from the Sun.",
                "correct": true
            },
            {
                "text": "Mars is 22500000.00 km away from the Sun.",
                "correct": false
            },
            {
                "text": "Mars is null km away from the Sun.",
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
        "explanation": "Autoboxing converts the int primitive to an Integer object automatically."
    },
    {
        "id": "17",
        "difficulty": 3,
        "text": "Which of the following statements are correct about wrapper classes in Java?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Wrapper classes provide a way to use primitive data types as objects.",
                "correct": true
            },
            {
                "text": "Wrapper classes can be null.",
                "correct": true
            },
            {
                "text": "Wrapper classes do not have methods.",
                "correct": false
            },
            {
                "text": "Wrapper classes are not part of the java.lang package.",
                "correct": false
            },
            {
                "text": "Wrapper classes include Integer, Boolean, and Double.",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "Wrapper classes provide object representations of primitives, can be null, have methods, are part of java.lang, and include classes like Integer, Boolean, and Double."
    },
    {
        "id": "18",
        "difficulty": 4,
        "text": "What will be the output of the following code snippet about Neptunes atmosphere?",
        "type": "code",
        "content": "Boolean isNeptuneBlue = null;\nboolean blue = isNeptuneBlue;\nSystem.out.println(\"Is Neptune blue? \" + blue);\n",
        "language": "java",
        "answers": [
            {
                "text": "Is Neptune blue? true",
                "correct": false
            },
            {
                "text": "Is Neptune blue? false",
                "correct": false
            },
            {
                "text": "Is Neptune blue? null",
                "correct": false
            },
            {
                "text": "Compilation error",
                "correct": false
            },
            {
                "text": "Runtime error",
                "correct": true
            }
        ],
        "correctAnswers": 1,
        "explanation": "Null values cannot be converted, a NullPointerException will be thrown"
    },
    {
        "id": "19",
        "difficulty": 3,
        "text": "Which of the following are correct about autoboxing and unboxing in Java?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Autoboxing converts primitives to their corresponding wrapper classes.",
                "correct": true
            },
            {
                "text": "Unboxing converts wrapper class objects to their corresponding primitives.",
                "correct": true
            },
            {
                "text": "Autoboxing and unboxing are only supported for integers.",
                "correct": false
            },
            {
                "text": "Autoboxing requires explicit casting.",
                "correct": false
            },
            {
                "text": "Unboxing can result in a NullPointerException.",
                "correct": true
            }
        ],
        "correctAnswers": 3,
        "explanation": "Autoboxing and unboxing work with all primitive types and their corresponding wrappers. Unboxing can throw a NullPointerException if the wrapper object is null."
    },
    {
        "id": "20",
        "difficulty": 2,
        "text": "What will be the output of the following code snippet about Saturns rings?",
        "type": "code",
        "content": "String saturnRings = \"Beautiful\".toUpperCase();\nSystem.out.println(\"Saturns rings are \" + saturnRings);\n",
        "language": "java",
        "answers": [
            {
                "text": "Saturns rings are Beautiful",
                "correct": true
            },
            {
                "text": "Saturns rings are BEAUTIFUL",
                "correct": false
            },
            {
                "text": "Saturns rings are",
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
        "explanation": "The string value is concatenated directly with the other string and printed."
    }
];

export default exam;