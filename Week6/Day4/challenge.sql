CREATE DATABASE supermarket;

CREATE TABLE items 
(
	item_id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL,
    price INT,
    last_update TIMESTAMP,
    PRIMARY KEY (item_id)
);

CREATE TABLE users 
(
	user_id SERIAL NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    last_update TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE orders 
(
	order_id INT NOT NULL,
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    last_update TIMESTAMP,
    CONSTRAINT fk_user_id
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_item_id
    FOREIGN KEY (item_id)
        REFERENCES items (item_id)
        ON DELETE CASCADE
);

CREATE or REPLACE FUNCTION user_orders (ord INT, usr varchar(50)) 
RETURNS INT AS $totalprice$
BEGIN
   RETURN(
	   SELECT price FROM orders 
	   INNER JOIN users ON users.user_id = orders.user_id
	   INNER JOIN items ON items.item_id = orders.item_id 
	   WHERE orders.order_id = ord AND users.last_name = usr
   );
END;
$totalprice$ LANGUAGE plpgsql;

SELECT * FROM user_orders(5050, 'Clooney');