--1
UPDATE students
SET birth_date = '1998-11-02'
WHERE last_name = 'Benichou'
RETURNING *;

--2
UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David'
RETURNING *;

--1
DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou'
RETURNING *;

--1
SELECT COUNT(first_name)
FROM students;

--2
SELECT COUNT(first_name)
FROM students
WHERE birth_date > '2000-01-01';

--1
ALTER TABLE students
ADD COLUMN math_grade integer;

--2
UPDATE students
SET math_grade = 80
WHERE id = 1
RETURNING *;

--3
UPDATE students
SET math_grade = 90
WHERE id = 2 OR id = 4
RETURNING *;

--4
UPDATE students
SET math_grade = 50
WHERE id = 6
RETURNING *;

--5
SELECT COUNT(first_name)
FROM students
WHERE math_grade > 83;

--6
INSERT INTO students 
(
    first_name,
    last_name,
    birth_date,
    math_grade
)
VALUES 	
	('Omer', 'Simpson', '03/10/1980', 70)
RETURNING *;

--7
SELECT first_name, last_name, COUNT (math_grade) total_grade
FROM students
GROUP BY first_name, last_name

--1
SELECT SUM (math_grade)
FROM students