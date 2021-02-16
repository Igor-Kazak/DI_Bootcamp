--1
UPDATE film
SET language_id = 3
WHERE film_id > 50 AND film_id < 100
RETURNING *;

--3
DROP TABLE customer_review;

--4
SELECT * 
FROM rental
WHERE return_date IS NULL

--5
SELECT title, replacement_cost
FROM rental
INNER JOIN inventory
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON film.film_id = inventory.film_id
WHERE return_date IS NULL
ORDER BY replacement_cost DESC
LIMIT 30;