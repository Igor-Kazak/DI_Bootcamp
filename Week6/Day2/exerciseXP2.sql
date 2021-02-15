-- 1
SELECT * FROM customer;

-- 2
SELECT
   first_name || ' ' || last_name AS full_name
FROM customer;

-- 3
SELECT DISTINCT create_date
FROM customer;

-- 4
SELECT * 
FROM customer
ORDER BY first_name DESC;

-- 5
SELECT film_ID, title, description, release_year, rental_rate 
FROM film
ORDER BY rental_rate ASC 

--6
SELECT address, district, phone 
FROM address
WHERE district = 'Texas';

--7
SELECT *
FROM film
WHERE film_id = 15 or film_id = 150;

--8
SELECT film_ID, title, description, length, rental_rate 
FROM film
WHERE title = 'Con air'

--9
SELECT film_ID, title, description, length, rental_rate 
FROM film
WHERE title = 'Co%'

--10
SELECT film_ID, title, description, length, rental_rate, replacement_cost
FROM film
ORDER BY replacement_cost
LIMIT 10

--11
SELECT film_ID, title, description, length, rental_rate, replacement_cost
FROM film
ORDER BY replacement_cost
OFFSET 10
LIMIT 10

--12
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.Customer_id = payment.Customer_id
ORDER BY customer.Customer_id

--13
SELECT title
FROM film
LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE store_id is NULL

--14
SELECT city, country
FROM city
INNER JOIN country
ON city.country_id = country.country_id

--15
SELECT customer.customer_id,
   first_name || ' ' || last_name AS full_name,
   amount, payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY staff_id
