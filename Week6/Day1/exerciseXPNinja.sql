SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY last_name ASC
LIMIT 4

SELECT first_name, last_name, birth_date 
FROM students 
ORDER BY birth_date ASC
LIMIT 1

SELECT first_name, last_name, birth_date 
FROM students 
LIMIT 3 
OFFSET 2