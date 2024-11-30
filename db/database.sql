CREATE DATABASE IF NOT EXISTS apiNodejsRailway;
USE apiNodejsRailway;

CREATE TABLE employees (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
);

DESC employees; 