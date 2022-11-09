CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50)   NOT NULL,
    last_name VARCHAR(50)   NOT NULL,
    email VARCHAR(100)   NOT NULL,
    password text   NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);