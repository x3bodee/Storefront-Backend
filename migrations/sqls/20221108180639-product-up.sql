CREATE TABLE IF NOT EXISTS product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    price float NOT NULL,
    category INT REFERENCES category(category_id) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);