

USE SHOE_STORE;




CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    brand VARCHAR(100) NOT NULL,
	gender VARCHAR(10) NOT NULL,
    category VARCHAR(100) NOT NULL,
    size JSON NOT NULL,
    color JSON NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discountPrice DECIMAL(10, 2) NULL,
    is_in_inventory BOOLEAN NOT NULL,
    items_left INT NOT NULL,
    imageURL VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL
);


SELECT * FROM PRODUCTS;

DELETE FROM PRODUCTS WHERE ID;

