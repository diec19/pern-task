CREATE TABLE task(
    id SERIAL PRIMARY key,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);