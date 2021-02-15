-- 1
SELECT item, price 
FROM items
ORDER BY price;

SELECT item, price 
FROM items
WHERE Price>=80
ORDER BY price;

SELECT first_name, last_name
FROM customers
ORDER BY Last_name
LIMIT 3;

SELECT last_name
FROM customers
ORDER BY Last_name DESC;

-- 2

CREATE TABLE purchases 
(
	Customer_id Integer,
	Item_id Integer,
	FOREIGN KEY (Customer_id) REFERENCES customers (Customer_id),
	FOREIGN KEY (Item_id) REFERENCES items(Item_id)
);

INSERT INTO purchases 
(
	Customer_id, 
	Item_id
)
VALUES 	
(
	(1, 3),
	(2, 2),
	(3, 1),
	(4, 3),
	(5, 2)
);

-- 3

SELECT *
FROM purchases;

SELECT purchases.Customer_id, purchases.Item_id
FROM purchases
INNER JOIN customers
ON purchases.Customer_id = customers.Customer_id;

SELECT purchases.Customer_id, purchases.Item_id
FROM purchases
INNER JOIN customers
ON purchases.Customer_id = customers.Customer_id
WHERE purchases.Customer_id = 4;

SELECT purchases.Item_id, items.Item_id
FROM purchases
INNER JOIN items
ON purchases.Item_id = items.Item_id
WHERE items.Item_id = 1 OR items.Item_id = 2;

-- 4

INSERT INTO items 
(
	Item, 
	Price
)
VALUES
	('Hard drive', 200);

INSERT INTO purchases 
(
	Customer_id, 
	Item_id
)
VALUES (3, 4);

-- 5

SELECT customers.first_name, customers.last_name, items.item
FROM customers
INNER JOIN purchases
ON purchases.Customer_id = customers.Customer_id
INNER JOIN items
ON purchases.Item_id = items.Item_id