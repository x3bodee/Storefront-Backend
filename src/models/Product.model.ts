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
    //       const sql = 'SELECT * FROM .....';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

  }