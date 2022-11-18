insert into users (
    first_name,
    last_name,
    email,
    password
) values 
('Abdullah','Basheer','ab@bbb.ccc','$2b$12$69H0FVJrlP7hBYaDkUTCIOHyetdhmCFsoazT4sVuyaWtbYdnHVFlm'),
('Ahmed','Al-ghamdi','ag@bbb.ccc','$2b$12$Rqegy7axUMpCykd2GTpSOO6hqVpCeoYMgBKuf3uALhMRf90Dtgi5S'),
('Mohammed','Basheer','mo@bbb.ccc','$2b$12$d2FyZiIwv7LOl8wg7J2XaumYhZ2oDTrZ0ggn0Xxvtxx2KsfLJnqE.'),
('Jamal','Zayed','jz@bbb.ccc','$2b$12$wixRpVeQs15unPYW7dkc8u53cU1.C.VNAPDMyXbB6bLGgra7aOYfa'),
('Adwa','Abdo','aa@bbb.ccc','$2b$12$WASa9q3B1Z/VY.BgWX4khuI/dfwoGO.N9S/DUW6PDGwdm0e6G3DaK');

insert into category (
    category_name
) values 
('Entertainment'),
('Beauty'),
('Sport'),
('Books'),
('Health'),
('Electronics'),
('Toys');

insert into product (
    product_name,
    price,
    category
) values 
('Sunny Days Entertainment Bath Time Sing Along Play Center',9.99,1),
('Meaningful Beauty 5-Piece Starter Kit, Gift Set, various color',73.20,2),
('EVS Sports TP199 Knee / Shin Guard, (Black / Hi-Viz Yellow, Large/X-Large)',99.99,3),
('Vampire Academy Box Set 1-6',44.6,4),
('Vitamin D & B12 Vitamin Supplements for Adults & Kids | Supports Bone Health |',10,5),
('JBL Vibe 200TWS True Wireless Earbuds - Black',25.99,6),
('LEGO Marvel Super Heroes Infinity Gauntlet 76191 Building Set for Adults (590 Pieces)',100,7);

insert into orders (
    user_id
) values 
(1),
(2),
(3),
(4),
(5),
(1);



insert into order_product (
    product_id,
    order_id,
    order_quantity
) values 
(1,1,1),
(2,1,2),
(3,1,1),
(4,1,2),
(7,2,1),
(5,3,3),
(6,4,1),
(3,4,2),
(5,5,1),
(2,5,3),
(1,6,4),
(2,6,1),
(6,6,3);

update orders set status=True where order_id=6;



