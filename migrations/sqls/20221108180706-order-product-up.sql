CREATE TABLE IF NOT EXISTS order_product (
    product_id  INT REFERENCES product(product_id) NOT NULL,
    order_id INT REFERENCES orders(order_id) NOT NULL,
    order_quantity VARCHAR(50)   NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (product_id, order_id)
);