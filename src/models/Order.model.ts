import db from '../helpers/db';

// order_id SERIAL PRIMARY KEY,
// user_id INT REFERENCES users(user_id) NOT NULL,
// status boolean  NOT NULL DEFAULT FALSE,
// created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

export type Order = {
    order_id: number;
    user_id: number;
    status: boolean;
    created_at: Date;
  };

  export class OrderModel {

    // async index(): Promise<Order[]> {
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