--1
SELECT first_name "First Name", last_name "Last Name"
FROM employees;

--2
SELECT DISTINCT department_id
FROM employees;

--3
SELECT * 
FROM employees
ORDER BY first_name DESC;

--4
SELECT first_name, last_name, salary, ROUND(salary*0.15, 2) pf
FROM employees;

--5
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary;

--6
SELECT SUM(salary)
FROM employees;

--7
SELECT MAX(salary) maximum, MIN(salary) minimum
FROM employees;

--8
SELECT ROUND(AVG(salary),2)
FROM employees;

--9
SELECT COUNT(first_name)
FROM employees;

--10
SELECT UPPER(first_name)
FROM employees;

--11
SELECT SUBSTRING(first_name, 1, 3)
FROM employees;

--12
SELECT CONCAT(first_name, ' ', last_name)
FROM employees;

--13
SELECT first_name, last_name, LENGTH(CONCAT(first_name, ' ', last_name))
FROM employees;

--14
SELECT first_name
FROM employees
WHERE  POSITION('1' in first_name) > 0
	OR POSITION('2' in first_name) > 0
	OR POSITION('3' in first_name) > 0
	OR POSITION('4' in first_name) > 0
	OR POSITION('5' in first_name) > 0
	OR POSITION('6' in first_name) > 0
	OR POSITION('7' in first_name) > 0
	OR POSITION('8' in first_name) > 0
	OR POSITION('9' in first_name) > 0
	OR POSITION('0' in first_name) > 0;

--15
SELECT *
FROM employees
LIMIT 10;

------------------------------------------------------------
--1
SELECT CONCAT(first_name, ' ', last_name) "Full name", salary
FROM employees
WHERE salary >= 10000 AND salary <= 15000;

--1
SELECT CONCAT(first_name, ' ', last_name) "Full name", hire_date
FROM employees
WHERE DATE_PART('year', hire_date) = 1987;

--2
SELECT first_name
FROM employees
WHERE POSITION('c' in first_name) > 0
    AND POSITION('e' in first_name) > 0;

--3
SELECT CONCAT(first_name, ' ', last_name) "Full name", job_title, salary
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
WHERE job_title != 'Programmer' 
	AND job_title != 'Shipping Clerk'
	AND salary != 4500 
	AND salary != 10000 
	AND salary != 15000;

--4
SELECT last_name
FROM employees
WHERE LENGTH(last_name) = 6;

--5
SELECT last_name
FROM employees
WHERE last_name LIKE '__e%';

--6
SELECT DISTINCT job_title
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id;

--7
SELECT *
FROM employees
WHERE UPPER(last_name) = 'JONES' 
	OR UPPER(last_name) = 'BLAKE'
	OR UPPER(last_name) = 'SCOTT'
	OR UPPER(last_name) = 'KING'
	OR UPPER(last_name) = 'FORD';

------------------------------------------------------------
--1
UPDATE employees
SET email = 'not available',
	commission_pct = 0.10
WHERE department_id = 110
RETURNING *;

--2
UPDATE employees
SET email = 'available'
WHERE department_id = 11
RETURNING *;

--3
UPDATE employees
SET salary = 8000
WHERE employee_id = 105 AND salary < 5000
RETURNING *;

--4
UPDATE employees
SET salary = salary * 1.25
WHERE department_id = 40
RETURNING *;

UPDATE employees
SET salary = salary * 1.15
WHERE department_id = 90
RETURNING *;

UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 110
RETURNING *;