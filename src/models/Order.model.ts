import db from '../helpers/db';
import { convert_ids_to_sql_list, check_if_product_is_missing } from '../helpers/helper_for_product_model';
import { Product } from './Product.model';

// order_id SERIAL PRIMARY KEY,
// user_id INT REFERENCES users(user_id) NOT NULL,
// status boolean  NOT NULL DEFAULT FALSE,
// created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

export type Order = {
    order_id?: number;
    user_id: number;
    products_list?:[product_id:number,quantity:number][]; // this will be used when we create the order.
    // this will be used when we return the data.
    products_data_list?:[
      product_name:string, category_name:string, price:number,
      quantity:number, product_id:number, category_id:number
    ][];
    status?: boolean;
    created_at?: Date;
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

    async create(user_id:number, products_list: [product_id:number,quantity:number][]): Promise<Order> {
        try {

          const conn = await db.connect();
          const converted_list = convert_ids_to_sql_list(products_list);
          console.log("converted_list: ",converted_list);
          const data =[1,2,4];
          var params = data.map(function(item, idx) {return '$' + (idx+1)});
          // to prevent the db from reserving the id.
          // const sql1= 'select * from product where product_id IN (' + params.join(',') + ');';
          const sql1= 'select * from product where product_id = ANY ($1);';
          const select_result = await conn.query(sql1,[data]);
          const list= (select_result.rows as unknown) as Product[];
          console.log(list);
          // if (check_if_product_is_missing(list,converted_list)) throw new Error(`Error: This record alredy exist!!`);
         
          throw new Error(`Error: to stop`);
          // const sql = 'insert into orders (user_id) values ($1) RETURNING *;';
          // const result = await conn.query(sql);
          // conn.release();
    
          // return result.rows[0];
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

  }