CREATE DATABASE bootcamp;
CREATE TABLE students 
(
    id SERIAL,
    last_name text, 
    first_name text, 
    birth_date date
);
INSERT INTO students 
(
    first_name,
    last_name,
    birth_date
)
VALUES 	
	('Marc', 'Benichou', '02/11/1998'),
	('Yoan', 'Cohen', '03/12/2010'),
    ('Lea', 'Benichou', '27/07/1987'),
    ('Amelia', 'Dux', '07/04/1996'),
    ('David', 'Grez', '14/06/2003'),
    ('Omer', 'Simpson', '03/10/1980');
INSERT INTO students 
(
    first_name,
    last_name,
    birth_date
)
VALUES 	
	('Igor', 'Kazak', '11/02/1984')

SELECT * FROM students;

SELECT first_name, last_name
FROM students

SELECT first_name, last_name
FROM students
WHERE id = 2

SELECT first_name, last_name
FROM students
WHERE first_name = 'Marc' AND last_name = 'Benichou'

SELECT first_name, last_name
FROM students
WHERE first_name = 'Marc' OR last_name = 'Benichou'

SELECT first_name, last_name
FROM students
WHERE first_name LIKE '%a%'

SELECT first_name, last_name
FROM students
WHERE first_name LIKE 'a%'

SELECT first_name, last_name
FROM students
WHERE first_name LIKE '%a'

SELECT first_name, last_name
FROM students
WHERE first_name LIKE '%a_'

SELECT first_name, last_name
FROM students
WHERE id = 1 OR id = 3

SELECT first_name, last_name, birth_date
FROM students
WHERE birth_date >= '01/01/2000'