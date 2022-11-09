import db from '../helpers/db';

// category_id SERIAL PRIMARY KEY,
// category_name VARCHAR(50) NOT NULL,
// created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

export type Category = {
    category_id: number;
    category_name: string;
    created_at: Date;
  };

  export class CategoryModel {

    // async index(): Promise<Category[]> {
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