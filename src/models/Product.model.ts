import db from '../helpers/db';

// product_id SERIAL PRIMARY KEY,
//     product_name VARCHAR(200) NOT NULL,
//     price float NOT NULL,
//     category INT REFERENCES category(category_id) NOT NULL,
//     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

export type Product = {
    product_id: number;
    price: number;
    category: number;
    category_name?: string;
    created_at: Date;

  };

  export class ProductModel {

    // async index(): Promise<Product[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'SELECT * FROM product;';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

    // async productsByCategory(): Promise<Product[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'select product_id,product_name,price,category,product.created_at,category_name from product full outer join category on product.category = category_id where category = ?;';
    //       const result = await conn.query(sql);
    //       conn.release();
     
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

    // async show(): Promise<Product[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'select * from product where product_id = ?;';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

    // async top5(): Promise<Product[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'select product.product_id, product.product_name, count(order_product.product_id) from order_product left join product on order_product.product_id = product.product_id group by product.product_id ORDER BY COUNT(order_product.product_id) DESC limit (5);';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

    // async create(): Promise<Product[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'insert into product (product_name,price,category) values ($1,$2,$3); ';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }
  }