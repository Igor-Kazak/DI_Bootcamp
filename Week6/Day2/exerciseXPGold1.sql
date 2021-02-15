--1
SELECT rating, COUNT (title)
FROM film
GROUP BY rating

--2
SELECT title, rating, length, rental_rate
FROM film
WHERE (rating = 'G' OR rating = 'PG-13')
AND length < 120 AND rental_rate < 3
ORDER BY title;

--3
UPDATE customer
SET first_name = 'MarySecond',
	last_name = 'SmithSecond', 
	email = 'mary.smith.second@sakilacustomer.org'
WHERE customer_id = 1
RETURNING *;

--4
UPDATE address
SET address = '1913 Hanoi Way Second',
	postal_code = 35201
WHERE address_id = 5
RETURNING *;