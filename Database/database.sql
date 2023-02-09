CREATE DATABASE cartShop;

USE cartShop;

CREATE TABLE cart_shop(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(900),
    price INT(10000),
    description VARCHAR(300)
);

CREATE TABLE shipping_price(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(300),
    price INT(300)
);

CREATE TABLE login(
    name VARCHAR(50),
    email VARCHAR(70)
);

DESCRIBE cartShop;
