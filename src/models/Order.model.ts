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

    // async completedOrdersByUser(): Promise<Order[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'select o.order_id, o.status, o.user_id, o.created_at, p.product_id, p.product_name, p.price, p.category from order_product op inner join orders o on op.order_id = o.order_id inner join product p on op.product_id = p.product_id where o.user_id = 1 AND o.status = True;';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }


    // TODO: you can delete the user_id from the select.

    // async currentOrdersByUser(): Promise<Order[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'select o.order_id, o.status, o.user_id, o.created_at, p.product_id, p.product_name, p.price, p.category from order_product op inner join orders o on op.order_id = o.order_id inner join product p on op.product_id = p.product_id where o.user_id = 1 AND o.status = False;';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

    // async create(): Promise<Order[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'insert into orders (user_id) values ($1);';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }

  }