CREATE DATABASE todos

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description UNIQUE VARCHAR(255) 
);

