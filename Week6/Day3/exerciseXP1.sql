--1
SELECT name 
FROM language;

--2
SELECT title, description, name
FROM film
INNER JOIN language
ON film.language_id = language.language_id;

SELECT title, description, name
FROM film
LEFT OUTER JOIN language
ON film.language_id = language.language_id

SELECT title, description, name
FROM language
LEFT OUTER JOIN film
ON film.language_id = language.language_id

--3
CREATE TABLE new_film 
(
	film_id SERIAL PRIMARY KEY,
	title VARCHAR(255)
);
INSERT INTO new_film (title)
VALUES 	
	('Film Small Desk'),
	('Film Large desk'),
	('Film Fan')
RETURNING *;

--4
CREATE TABLE customer_review 
(
	review_id SERIAL NOT NULL,
	film_id INT NOT NULL,
    language_id INT,
    title VARCHAR(255),
    score INT,
    review_text text,
    last_update TIMESTAMP,
    PRIMARY KEY (review_id),
    CONSTRAINT fk_film_id
    FOREIGN KEY (film_id)
        REFERENCES new_film (film_id)
        ON DELETE CASCADE,
    FOREIGN KEY (language_id)
        REFERENCES language (language_id)
);

--5
INSERT INTO customer_review 
    (
        film_id,
        language_id,
        title,
        score,
        review_text,
        last_update
    )
VALUES 	
	(1, 3, 'One', 2, 'Very bad film', NOW()),
	(2, 2, 'Two', 8, 'Not bad film', NOW()),
    (3, 4, 'Three', 10, 'Very good film', NOW())
RETURNING *;

--6
DELETE FROM new_film
WHERE film_id = 3;