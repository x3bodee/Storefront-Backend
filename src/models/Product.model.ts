import db from '../helper/db';

// product_id SERIAL PRIMARY KEY,
//     product_name VARCHAR(200) NOT NULL,
//     price float NOT NULL,
//     category INT REFERENCES category(category_id) NOT NULL,
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

export type Product = {
    product_id: number;
    product_name:string;
    price: number;
    category: number;
    category_name?: string;
    created_at?: Date;

  };

  export class ProductModel {

    async index(): Promise<Product[]> {
        try {
         
          const conn = await db.connect();
          const sql = 'SELECT product_id, product_name, price, category_name, category_id, p.created_at FROM product p inner join category on category = category_id;';
          const result = await conn.query(sql);
          conn.release();
    
          return result.rows;
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

    async productsByCategory(id:number): Promise<Product[]> {
        try {
         
          const conn = await db.connect();
          const sql = 'select product_id,product_name,price,category_name,category_id,p.created_at,category_name from product p inner join category on p.category = category_id where category = ($1);';
          const result = await conn.query(sql,[id]);
          conn.release();
     
          return result.rows;
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

    async show(id:number): Promise<Product> {
        try {
         
          const conn = await db.connect();
          const sql = 'select product_id, product_name, price, category_name, category_id, p.created_at FROM product p inner join category on category = category_id where product_id = ($1);';
          const result = await conn.query(sql,[id]);
          conn.release();
    
          return result.rows[0];
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

    async top5(): Promise<Product[]> {
        try {
         
          const conn = await db.connect();
          const sql = 'select p.product_id, p.product_name, p.price, c count(op.product_id) from order_product op left join product p on order_product.product_id = product.product_id group by product.product_id ORDER BY COUNT(order_product.product_id) DESC limit (5);';
          const result = await conn.query(sql);
          conn.release();
    
          return result.rows;
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

    async create(name:string,price:number,category:number): Promise<Product> {
        try {
         
          const conn = await db.connect();
          
          // to prevent the db from reserving the id + to apply forgin key constaint.
          const sql= "select category_id from category where category_id = ($1);";
          const check_if_category_exist = await conn.query(sql,[category]);
          if (!check_if_category_exist.rows[0]) throw new Error(`Error: The category you are using is wrong`);
          
          // to prevent the db from reserving the id.
          const sql1= "select product_name, category from product where product_name = ($1) AND category = ($2);";
          const select_result = await conn.query(sql1,[name,category]);
          if (select_result.rows[0]) throw new Error(`Error: This record alredy exist!!`);
          
          const sql2 = 'insert into product (product_name,price,category) values ($1,$2,$3) RETURNING *;';
          const insert_result = await conn.query(sql2,[name,price,category]);
          
          conn.release();
          
          return insert_result.rows[0];
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

  }