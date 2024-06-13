const exam = [
    {
        "id": "1",
        "difficulty": 2,
        "text": "What is the main purpose of ResultSet in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To store the result of a SQL query.",
                "correct": true
            },
            {
                "text": "To execute a SQL query.",
                "correct": false
            },
            {
                "text": "To establish a connection to the database.",
                "correct": false
            },
            {
                "text": "To handle database transactions.",
                "correct": false
            },
            {
                "text": "To create a Statement object.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "ResultSet is used to store the result of a SQL query."
    },
    {
        "id": "2",
        "difficulty": 2,
        "text": "How do you create a Statement in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Statement stmt = connection.createStatement();",
                "correct": true
            },
            {
                "text": "Statement stmt = new Statement(connection);",
                "correct": false
            },
            {
                "text": "Statement stmt = connection.getStatement();",
                "correct": false
            },
            {
                "text": "Statement stmt = connection.prepareStatement();",
                "correct": false
            },
            {
                "text": "Statement stmt = Statement.create(connection);",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "You create a Statement using the createStatement() method of the Connection object."
    },
    {
        "id": "3",
        "difficulty": 2,
        "text": "Which method is used to execute a SQL query with Statement?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "executeQuery",
                "correct": true
            },
            {
                "text": "executeUpdate",
                "correct": false
            },
            {
                "text": "execute",
                "correct": false
            },
            {
                "text": "executeSQL",
                "correct": false
            },
            {
                "text": "runQuery",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The executeQuery method is used to execute SQL queries that return a ResultSet."
    },
    {
        "id": "4",
        "difficulty": 2,
        "text": "How do you create a PreparedStatement in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "PreparedStatement pstmt = connection.prepareStatement(sql);",
                "correct": true
            },
            {
                "text": "PreparedStatement pstmt = new PreparedStatement(connection, sql);",
                "correct": false
            },
            {
                "text": "PreparedStatement pstmt = connection.getPreparedStatement(sql);",
                "correct": false
            },
            {
                "text": "PreparedStatement pstmt = PreparedStatement.create(connection, sql);",
                "correct": false
            },
            {
                "text": "PreparedStatement pstmt = connection.createStatement(sql);",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "You create a PreparedStatement using the prepareStatement() method of the Connection object."
    },
    {
        "id": "5",
        "difficulty": 3,
        "text": "Which method is used to set parameters in a PreparedStatement?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "setString",
                "correct": true
            },
            {
                "text": "setParameter",
                "correct": false
            },
            {
                "text": "setValue",
                "correct": false
            },
            {
                "text": "set",
                "correct": false
            },
            {
                "text": "setInput",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The setString method is one of the methods used to set parameters in a PreparedStatement."
    },
    {
        "id": "6",
        "difficulty": 3,
        "text": "How do you retrieve auto-generated keys using Statement?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "ResultSet keys = stmt.getGeneratedKeys();",
                "correct": true
            },
            {
                "text": "ResultSet keys = stmt.executeQuery();",
                "correct": false
            },
            {
                "text": "ResultSet keys = stmt.getKeys();",
                "correct": false
            },
            {
                "text": "ResultSet keys = stmt.getAutoKeys();",
                "correct": false
            },
            {
                "text": "ResultSet keys = stmt.getGenerated();",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The getGeneratedKeys method is used to retrieve auto-generated keys."
    },
    {
        "id": "7",
        "difficulty": 2,
        "text": "How do you establish a database connection in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Connection conn = DriverManager.getConnection(url, user, password);",
                "correct": true
            },
            {
                "text": "Connection conn = new Connection(url, user, password);",
                "correct": false
            },
            {
                "text": "Connection conn = Connection.connect(url, user, password);",
                "correct": false
            },
            {
                "text": "Connection conn = DriverManager.createConnection(url, user, password);",
                "correct": false
            },
            {
                "text": "Connection conn = Driver.connect(url, user, password);",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "You establish a database connection using the getConnection() method of the DriverManager class."
    },
    {
        "id": "8",
        "difficulty": 3,
        "text": "How do you perform a SELECT operation using JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "ResultSet rs = stmt.executeQuery(\"SELECT * FROM planets\");",
                "correct": true
            },
            {
                "text": "ResultSet rs = stmt.runQuery(\"SELECT * FROM planets\");",
                "correct": false
            },
            {
                "text": "ResultSet rs = stmt.query(\"SELECT * FROM planets\");",
                "correct": false
            },
            {
                "text": "ResultSet rs = stmt.execute(\"SELECT * FROM planets\");",
                "correct": false
            },
            {
                "text": "ResultSet rs = stmt.select(\"SELECT * FROM planets\");",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The executeQuery method is used to perform a SELECT operation."
    },
    {
        "id": "9",
        "difficulty": 3,
        "text": "How do you perform an INSERT operation using JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "int rows = stmt.executeUpdate(\"INSERT INTO planets (name) VALUES (Mars)\");",
                "correct": true
            },
            {
                "text": "int rows = stmt.runUpdate(\"INSERT INTO planets (name) VALUES (Mars)\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.insert(\"INSERT INTO planets (name) VALUES (Mars)\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.execute(\"INSERT INTO planets (name) VALUES (Mars)\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.update(\"INSERT INTO planets (name) VALUES (Mars)\");",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The executeUpdate method is used to perform an INSERT operation."
    },
    {
        "id": "10",
        "difficulty": 3,
        "text": "How do you perform an UPDATE operation using JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "int rows = stmt.executeUpdate(\"UPDATE planets SET name = Mars WHERE id = 1\");",
                "correct": true
            },
            {
                "text": "int rows = stmt.runUpdate(\"UPDATE planets SET name = Mars WHERE id = 1\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.update(\"UPDATE planets SET name = Mars WHERE id = 1\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.execute(\"UPDATE planets SET name = Mars WHERE id = 1\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.modify(\"UPDATE planets SET name = Mars WHERE id = 1\");",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The executeUpdate method is used to perform an UPDATE operation."
    },
    {
        "id": "11",
        "difficulty": 3,
        "text": "How do you perform a DELETE operation using JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "int rows = stmt.executeUpdate(\"DELETE FROM planets WHERE id = 1\");",
                "correct": true
            },
            {
                "text": "int rows = stmt.runUpdate(\"DELETE FROM planets WHERE id = 1\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.delete(\"DELETE FROM planets WHERE id = 1\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.execute(\"DELETE FROM planets WHERE id = 1\");",
                "correct": false
            },
            {
                "text": "int rows = stmt.remove(\"DELETE FROM planets WHERE id = 1\");",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The executeUpdate method is used to perform a DELETE operation."
    },
    {
        "id": "12",
        "difficulty": 3,
        "text": "What is the purpose of the executeUpdate method in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "To execute SQL statements that update data in the database.",
                "correct": true
            },
            {
                "text": "To execute SQL queries that return a ResultSet.",
                "correct": false
            },
            {
                "text": "To execute stored procedures.",
                "correct": false
            },
            {
                "text": "To execute SQL statements that retrieve data from the database.",
                "correct": false
            },
            {
                "text": "To execute batch updates.",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The executeUpdate method is used to execute SQL statements that update, insert, or delete data."
    },
    {
        "id": "13",
        "difficulty": 2,
        "text": "How do you close a ResultSet in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "rs.close();",
                "correct": true
            },
            {
                "text": "rs.end();",
                "correct": false
            },
            {
                "text": "rs.terminate();",
                "correct": false
            },
            {
                "text": "rs.finish();",
                "correct": false
            },
            {
                "text": "rs.shutdown();",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The close method is used to close a ResultSet."
    },
    {
        "id": "14",
        "difficulty": 3,
        "text": "How do you check if a ResultSet has more rows?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "rs.next();",
                "correct": true
            },
            {
                "text": "rs.hasNext();",
                "correct": false
            },
            {
                "text": "rs.moreRows();",
                "correct": false
            },
            {
                "text": "rs.nextRow();",
                "correct": false
            },
            {
                "text": "rs.nextLine();",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The next method is used to check if a ResultSet has more rows."
    },
    {
        "id": "15",
        "difficulty": 2,
        "text": "How do you handle SQL exceptions in JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Using try-catch blocks",
                "correct": true
            },
            {
                "text": "Using if-else statements",
                "correct": false
            },
            {
                "text": "Using switch-case statements",
                "correct": false
            },
            {
                "text": "Using for loops",
                "correct": false
            },
            {
                "text": "Using while loops",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "SQL exceptions are handled using try-catch blocks."
    },
    {
        "id": "16",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Creating a Statement)",
        "type": "code",
        "content": "Connection conn = DriverManager.getConnection(url, user, password);\nStatement stmt = conn.createStatement();\n",
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
                "text": "It throws an SQLException",
                "correct": false
            },
            {
                "text": "It throws a NullPointerException",
                "correct": false
            },
            {
                "text": "It throws a ClassNotFoundException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and creates a Statement object."
    },
    {
        "id": "17",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Using PreparedStatement)",
        "type": "code",
        "content": "Connection conn = DriverManager.getConnection(url, user, password);\nPreparedStatement pstmt = conn.prepareStatement(\"SELECT * FROM planets WHERE name = ?\");\npstmt.setString(1, \"Mars\");\n",
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
                "text": "It throws an SQLException",
                "correct": false
            },
            {
                "text": "It throws a NullPointerException",
                "correct": false
            },
            {
                "text": "It throws a ClassNotFoundException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and sets a parameter in the PreparedStatement."
    },
    {
        "id": "18",
        "difficulty": 3,
        "text": "What is the best practice for closing JDBC resources?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Close ResultSet, Statement, and Connection in a finally block",
                "correct": true
            },
            {
                "text": "Close only the Connection object",
                "correct": false
            },
            {
                "text": "Close only the Statement object",
                "correct": false
            },
            {
                "text": "Close only the ResultSet object",
                "correct": false
            },
            {
                "text": "Closing resources is not necessary",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The best practice is to close ResultSet, Statement, and Connection objects in a finally block to ensure they are closed even if an exception occurs."
    },
    {
        "id": "19",
        "difficulty": 2,
        "text": "Which of the following is a best practice when using JDBC?",
        "type": "conceptual",
        "language": "java",
        "answers": [
            {
                "text": "Use PreparedStatement to prevent SQL injection",
                "correct": true
            },
            {
                "text": "Reuse Connection objects to improve performance",
                "correct": true
            },
            {
                "text": "Handle SQL exceptions with meaningful messages",
                "correct": true
            },
            {
                "text": "Always use Statement instead of PreparedStatement",
                "correct": false
            },
            {
                "text": "Avoid using try-catch blocks for exception handling",
                "correct": false
            }
        ],
        "correctAnswers": 3,
        "explanation": "Best practices include using PreparedStatement to prevent SQL injection, reusing Connection objects to improve performance, and handling SQL exceptions with meaningful messages."
    },
    {
        "id": "20",
        "difficulty": 3,
        "text": "Does the following code compile correctly? (Using ResultSet)",
        "type": "code",
        "content": "ResultSet rs = stmt.executeQuery(\"SELECT * FROM planets\");\nwhile (rs.next()) {\n    System.out.println(rs.getString(\"name\"));\n}\n",
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
                "text": "It throws an SQLException",
                "correct": false
            },
            {
                "text": "It throws a NullPointerException",
                "correct": false
            },
            {
                "text": "It throws a ClassNotFoundException",
                "correct": false
            }
        ],
        "correctAnswers": 1,
        "explanation": "The code compiles correctly and iterates through the ResultSet to print the name of each planet."
    }
];

export default exam;