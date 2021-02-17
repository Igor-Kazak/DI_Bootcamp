CREATE DATABASE challenge;

CREATE TABLE engine 
(
	engine_id SERIAL NOT NULL,
    eng_type VARCHAR(255),
    volume INT,
    last_update TIMESTAMP,
    PRIMARY KEY (engine_id)
);

CREATE TABLE color 
(
	color_id SERIAL NOT NULL,
    title VARCHAR(255),
    last_update TIMESTAMP,
    PRIMARY KEY (color_id)
);

CREATE TABLE car 
(
	car_id SERIAL NOT NULL,
    title VARCHAR(255),
    discription VARCHAR(255),
    engine_id INT,
    color_id INT,
    year_built DATE,
    last_update TIMESTAMP,
    PRIMARY KEY (car_id),
    CONSTRAINT fk_engine_id
    FOREIGN KEY (engine_id)
        REFERENCES engine (engine_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_color_id
    FOREIGN KEY (color_id)
        REFERENCES color (color_id)
        ON DELETE CASCADE
);

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
INNER JOIN engine
ON car.engine_id = engine.engine_id
INNER JOIN color
ON car.color_id = color.color_id;

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
LEFT JOIN engine
ON car.engine_id = engine.engine_id
LEFT JOIN color
ON car.color_id = color.color_id;

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
RIGHT JOIN engine
ON car.engine_id = engine.engine_id
RIGHT JOIN color
ON car.color_id = color.color_id;

SELECT car.title, engine.eng_type, engine.volume, color.title
FROM car
FULL OUTER JOIN engine
ON car.engine_id = engine.engine_id
FULL OUTER JOIN color
ON car.color_id = color.color_id;