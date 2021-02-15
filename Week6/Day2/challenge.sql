CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);

SELECT * FROM SecondTab

SELECT COUNT(*) 
FROM FirstTab a 
WHERE a.Id NOT IN 
( SELECT Id FROM SecondTab WHERE Id IS NULL );
-- 0

SELECT COUNT(*) 
FROM FirstTab a 
WHERE a.Id NOT IN 
( SELECT Id FROM SecondTab WHERE Id = 5 );
-- 2

SELECT COUNT(*) 
FROM FirstTab a 
WHERE a.Id NOT IN 
( SELECT Id FROM SecondTab );
-- 0

SELECT COUNT(*) 
FROM FirstTab a 
WHERE a.Id NOT IN 
( SELECT Id FROM SecondTab WHERE Id IS NOT NULL );
-- 2