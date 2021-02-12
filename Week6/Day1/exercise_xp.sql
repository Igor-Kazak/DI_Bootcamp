CREATE DATABASE public;
CREATE TABLE items 
(
	Item text,
	Price integer
);
INSERT INTO items 
(
	Item, 
	Price
)
VALUES 	
	('Small Desk', 100),
	('Large desk', 300),
	('Fan', 80);
CREATE TABLE customers 
(
	First_name text,
    Last_name text
);
INSERT INTO customers 
(
    First_name,
    Last_name
)
VALUES 	
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');

SELECT * FROM items;

SELECT *
FROM items
WHERE Price>80;

SELECT *
FROM items
WHERE Price<300;

SELECT *
FROM customers
WHERE Last_name = 'Smith';

SELECT *
FROM customers
WHERE Last_name = 'Jones';

SELECT *
FROM customers
WHERE NOT First_name = 'Scott';