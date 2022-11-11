import db from '../helpers/db';



export type OrderProduct = {
    product_id: number;
    order_id: number;
    order_quantity: number;
    created_at: Date;
  };

  export class OrderProductModel {

    // async create(): Promise<OrderProduct[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'insert into order_product (product_id,order_id,order_quantity) values ($1,$2,$3);';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

  }