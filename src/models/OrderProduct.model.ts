import db from '../helpers/db';



export type OrderProduct = {
    product_id: number;
    order_id: number;
    order_quantity: number;
    created_at: Date;
  };

  export class OrderProductModel {

    // async index(): Promise<OrderProduct[]> {
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