const exam = [
    {
        "id": "1",
        "difficulty": 1,
        "text": "Which SQL query will select the name of all planets from the \"planets\" table?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT name FROM planets;",
                "correct": true
            },
            {
                "text": "SELECT planet_name FROM planets;",
                "correct": false
            },
            {
                "text": "SELECT * FROM planets;",
                "correct": false
            },
            {
                "text": "SELECT planets.name FROM planets;",
                "correct": false
            },
            {
                "text": "SELECT all names FROM planets;",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The correct query uses SELECT name FROM planets to get the names of all planets."
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "Which SQL statement will insert a new planet into the \"planets\" table?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "INSERT INTO planets (name, size, distance_from_sun) VALUES (\"Jupiter\", 139820, 778.5);",
                "correct": true
            },
            {
                "text": "ADD INTO planets (name, size, distance_from_sun) VALUES (\"Jupiter\", 139820, 778.5);",
                "correct": false
            },
            {
                "text": "INSERT planet INTO planets (name, size, distance_from_sun) VALUES (\"Jupiter\", 139820, 778.5);",
                "correct": false
            },
            {
                "text": "ADD planet TO planets (name, size, distance_from_sun) VALUES (\"Jupiter\", 139820, 778.5);",
                "correct": false
            },
            {
                "text": "INSERT name INTO planets VALUES (\"Jupiter\", 139820, 778.5);",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The correct query uses INSERT INTO to add a new row to the planets table."
    },
    {
        "id": "3",
        "difficulty": 3,
        "text": "How do you update the size of planet Mars in the \"planets\" table?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "UPDATE planets SET size = 6779 WHERE name = \"Mars\";",
                "correct": true
            },
            {
                "text": "MODIFY planets SET size = 6779 WHERE name = \"Mars\";",
                "correct": false
            },
            {
                "text": "SET size = 6779 WHERE name = \"Mars\" IN planets;",
                "correct": false
            },
            {
                "text": "UPDATE planets SET size = 6779;",
                "correct": false
            },
            {
                "text": "UPDATE size SET planets = 6779 WHERE name = \"Mars\";",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The correct query uses UPDATE to modify the size of Mars where the name is Mars."
    },
    {
        "id": "4",
        "difficulty": 2,
        "text": "How do you delete the planet \"Pluto\" from the \"planets\" table?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "DELETE FROM planets WHERE name = \"Pluto\";",
                "correct": true
            },
            {
                "text": "REMOVE FROM planets WHERE name = \"Pluto\";",
                "correct": false
            },
            {
                "text": "DELETE planet FROM planets WHERE name = \"Pluto\";",
                "correct": false
            },
            {
                "text": "DELETE name FROM planets WHERE name = \"Pluto\";",
                "correct": false
            },
            {
                "text": "REMOVE planet FROM planets WHERE name = \"Pluto\";",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The correct query uses DELETE FROM to remove the row where the name is Pluto."
    },
    {
        "id": "5",
        "difficulty": 3,
        "text": "Which SQL query will select the names of all planets with a size greater than 10000?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT name FROM planets WHERE size > 10000;",
                "correct": true
            },
            {
                "text": "SELECT name FROM planets WHERE size >= 10000;",
                "correct": false
            },
            {
                "text": "SELECT planet_name FROM planets WHERE size > 10000;",
                "correct": false
            },
            {
                "text": "SELECT name FROM planets WHERE size < 10000;",
                "correct": false
            },
            {
                "text": "SELECT * FROM planets WHERE size > 10000;",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The correct query uses SELECT with WHERE to filter planets by size greater than 10000."
    },
    {
        "id": "6",
        "difficulty": 2,
        "text": "Which SQL statement correctly uses the LIKE operator to find planets with names starting with \"M\"?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT name FROM planets WHERE name LIKE \"M%\";",
                "correct": true
            },
            {
                "text": "SELECT name FROM planets WHERE name LIKE \"%M\";",
                "correct": false
            },
            {
                "text": "SELECT name FROM planets WHERE name LIKE \"M\";",
                "correct": false
            },
            {
                "text": "SELECT name FROM planets WHERE name LIKE \"M_\";",
                "correct": false
            },
            {
                "text": "SELECT name FROM planets WHERE name LIKE \"_M\";",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The LIKE operator with \"M%\" finds all names starting with the letter \"M\"."
    },
    {
        "id": "7",
        "difficulty": 3,
        "text": "How do you count the number of planets in the \"planets\" table?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT COUNT(*) FROM planets;",
                "correct": true
            },
            {
                "text": "SELECT COUNT(name) FROM planets;",
                "correct": false
            },
            {
                "text": "SELECT COUNT(all) FROM planets;",
                "correct": false
            },
            {
                "text": "SELECT COUNT(planets) FROM planets;",
                "correct": false
            },
            {
                "text": "SELECT COUNT(*) FROM planets WHERE name;",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The COUNT(*) function counts the number of rows in the planets table."
    },
    {
        "id": "8",
        "difficulty": 4,
        "text": "Which SQL query will select the names of planets and their distances from the sun, ordered by distance?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT name, distance_from_sun FROM planets ORDER BY distance_from_sun;",
                "correct": true
            },
            {
                "text": "SELECT name, distance FROM planets ORDER BY distance;",
                "correct": false
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets SORT BY distance_from_sun;",
                "correct": false
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets ORDER BY name;",
                "correct": false
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets WHERE distance_from_sun;",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The ORDER BY clause orders the results by the specified column, in this case, distance_from_sun."
    },
    {
        "id": "9",
        "difficulty": 3,
        "text": "How do you select the top 3 closest planets to the sun from the \"planets\" table?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT * FROM planets ORDER BY distance_from_sun LIMIT 3;",
                "correct": true
            },
            {
                "text": "SELECT * FROM planets WHERE distance_from_sun LIMIT 3;",
                "correct": false
            },
            {
                "text": "SELECT * FROM planets LIMIT 3 ORDER BY distance_from_sun;",
                "correct": false
            },
            {
                "text": "SELECT TOP 3 * FROM planets ORDER BY distance_from_sun;",
                "correct": false
            },
            {
                "text": "SELECT * FROM planets ORDER BY distance_from_sun TOP 3;",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The LIMIT clause restricts the number of rows returned, combined with ORDER BY to sort the results."
    },
    {
        "id": "10",
        "difficulty": 4,
        "text": "Which SQL query will perform an INNER JOIN between the \"planets\" and \"moons\" tables to list planet names and their moons?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT planets.name, moons.name FROM planets INNER JOIN moons ON planets.id = moons.planet_id;",
                "correct": true
            },
            {
                "text": "SELECT planets.name, moons.name FROM planets JOIN moons ON planets.id = moons.planet_id;",
                "correct": true
            },
            {
                "text": "SELECT planets.name, moons.name FROM planets LEFT JOIN moons ON planets.id = moons.planet_id;",
                "correct": false
            },
            {
                "text": "SELECT planets.name, moons.name FROM planets RIGHT JOIN moons ON planets.id = moons.planet_id;",
                "correct": false
            },
            {
                "text": "SELECT planets.name, moons.name FROM planets CROSS JOIN moons ON planets.id = moons.planet_id;",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "INNER JOIN returns rows when there is a match in both tables based on the specified condition."
    },
    {
        "id": "11",
        "difficulty": 3,
        "text": "Which SQL query will select all planets with more than 1 moon from the \"planets\" and \"moons\" tables using LEFT JOIN?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT planets.name, COUNT(moons.id) as moon_count FROM planets LEFT JOIN moons ON planets.id = moons.planet_id GROUP BY planets.name HAVING moon_count > 1;",
                "correct": true
            },
            {
                "text": "SELECT planets.name FROM planets LEFT JOIN moons ON planets.id = moons.planet_id GROUP BY planets.name HAVING COUNT(moons.id) > 1;",
                "correct": true
            },
            {
                "text": "SELECT planets.name FROM planets LEFT JOIN moons ON planets.id = moons.planet_id WHERE COUNT(moons.id) > 1;",
                "correct": false
            },
            {
                "text": "SELECT planets.name FROM planets LEFT JOIN moons ON planets.id = moons.planet_id HAVING moon_count > 1;",
                "correct": false
            },
            {
                "text": "SELECT planets.name FROM planets LEFT JOIN moons ON planets.id = moons.planet_id WHERE moon_count > 1;",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "LEFT JOIN selects all rows from the left table and matched rows from the right table. GROUP BY and HAVING are used to filter groups."
    },
    {
        "id": "12",
        "difficulty": 2,
        "text": "Which SQL query will select all planets and sort them by name in ascending order?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT * FROM planets ORDER BY name ASC;",
                "correct": true
            },
            {
                "text": "SELECT * FROM planets ORDER BY name DESC;",
                "correct": false
            },
            {
                "text": "SELECT * FROM planets SORT BY name ASC;",
                "correct": false
            },
            {
                "text": "SELECT * FROM planets ORDER BY name;",
                "correct": true
            },
            {
                "text": "SELECT * FROM planets ORDER BY name Z->A;",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "The ORDER BY clause with ASC sorts the results by the specified column in ascending order. ASC is the default sort order."
    },
    {
        "id": "13",
        "difficulty": 4,
        "text": "Which SQL query will select the name and distance from the sun for planets that are either closer than 100 million km or farther than 500 million km?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT name, distance_from_sun FROM planets WHERE distance_from_sun < 100 OR distance_from_sun > 500;",
                "correct": true
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets WHERE distance_from_sun < 100 AND distance_from_sun > 500;",
                "correct": false
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets WHERE distance_from_sun BETWEEN 100 AND 500;",
                "correct": false
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets WHERE distance_from_sun <= 100 OR distance_from_sun >= 500;",
                "correct": true
            },
            {
                "text": "SELECT name, distance_from_sun FROM planets WHERE distance_from_sun <= 100 AND distance_from_sun >= 500;",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "The WHERE clause with OR is used to select rows that meet either of the specified conditions."
    },
    {
        "id": "14",
        "difficulty": 3,
        "text": "Which SQL query will select the total number of moons for each planet in the \"planets\" and \"moons\" tables using LEFT JOIN?",
        "type": "conceptual",
        "language": "sql",
        "answers": [
            {
                "text": "SELECT planets.name, COUNT(moons.id) as moon_count FROM planets LEFT JOIN moons ON planets.id = moons.planet_id GROUP BY planets.name;",
                "correct": true
            },
            {
                "text": "SELECT planets.name, COUNT(moons.id) FROM planets LEFT JOIN moons ON planets.id = moons.planet_id GROUP BY planets.name;",
                "correct": true
            },
            {
                "text": "SELECT planets.name, COUNT(moons.id) as moon_count FROM planets LEFT JOIN moons ON planets.id = moons.planet_id HAVING moon_count;",
                "correct": false
            },
            {
                "text": "SELECT planets.name, COUNT(moons.id) FROM planets LEFT JOIN moons ON planets.id = moons.planet_id;",
                "correct": false
            },
            {
                "text": "SELECT planets.name, COUNT(moons.id) as moon_count FROM planets JOIN moons ON planets.id = moons.planet_id GROUP BY planets.name;",
                "correct": false
            }
        ],
        "correctAnswers": 2,
        "explanation": "LEFT JOIN is used to include all planets, and COUNT along with GROUP BY is used to count the number of moons per planet."
    }
];

export default exam;