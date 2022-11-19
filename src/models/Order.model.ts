import db from '../helper/db';
import format from 'pg-format';
import { convert_ids_to_sql_list, check_product_list,  } from '../helper/helper_for_product_model';
import { compine_order_lines_after } from '../helper/compine_order_lines';
import { Product } from './Product.model';

// order_id SERIAL PRIMARY KEY,
// user_id INT REFERENCES users(user_id) NOT NULL,
// status boolean  NOT NULL DEFAULT FALSE,
// created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

// using this type when I select from the database
export type CreatedOrder ={
    order_id: number;
    status: boolean;
    user_id: number;
    created_at: Date;
    product_id:number;
    product_name:string;
    product_quantity:number;
    price:number;
    category_id:number;
    category_name:string;
}

export type Order = {
    order_id?: number;
    user_id: number;

    // using this when we receive new order, for the creattion of the order.
    products_list?:[product_id:number,quantity:number][]; 
    
    // using this to set the product list of this order
    products_data_list?:[{
      product_name:string, category_name:string, price:number,
      quantity:number, product_id:number, category_id:number
    }];
    
    status?: boolean;
    created_at?: Date;
  };

  export class OrderModel {

    async completedOrdersByUser(id:number): Promise<Order[]> {
        try {
         
          const conn = await db.connect();
          const sql = 'select o.order_id, o.status, o.user_id, o.created_at, p.product_id, p.product_name, p.price, p.category as category_id, c.category_name, op.order_quantity as product_quantity from order_product op inner join orders o on op.order_id = o.order_id inner join product p on op.product_id = p.product_id inner join category c on c.category_id = p.category where o.user_id = ($1) AND status = True order by o.order_id;';
          const result = await conn.query(sql,[id]);
          const final_result = compine_order_lines_after(result.rows);
          conn.release();
          
          return final_result;
        } catch (err) {
          throw new Error(`${err}`);
        }
      }
      
      
      // TODO: you can delete the user_id from the select.
      
      async currentOrdersByUser(id:number): Promise<Order[]> {
        try {
          
          const conn = await db.connect();
          const sql = 'select o.order_id, o.status, o.user_id, o.created_at, p.product_id, p.product_name, p.price, p.category as category_id, c.category_name, op.order_quantity as product_quantity from order_product op inner join orders o on op.order_id = o.order_id inner join product p on op.product_id = p.product_id inner join category c on c.category_id = p.category where o.user_id = ($1) AND status = False order by o.order_id;';
          const result = await conn.query(sql,[id]);
          const final_result = compine_order_lines_after(result.rows);
          conn.release();
    
          return final_result;
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

    async create(user_id:number, products_list: [product_id:number,quantity:number][]): Promise<Order> {
      const conn = await db.connect();  
      try {

          const converted_id_list = convert_ids_to_sql_list(products_list);
          const converted_quantites_list =  products_list.map(e=> e[1]);
          
          // to prevent the db from reserving the id.
          const sql1= 'select * from product where product_id = ANY ($1);';
          const select_result = await conn.query(sql1,[converted_id_list]);
          const list= (select_result.rows as unknown) as Product[];
          console.log("check_product_list: ",check_product_list(list,converted_id_list));
          if (!check_product_list(list,converted_id_list)) throw new Error(`Error: there is a wrong product in the list!!`);
         
          // throw new Error(`Error: to stop`);
          await conn.query('BEGIN');
          const insert_order_sql = 'insert into orders (user_id) values ($1) RETURNING *;';
          const insert_order_result = await conn.query(insert_order_sql,[user_id]);
          console.log(insert_order_result.rows);
          const order_product = products_list.map( e=> e.concat(insert_order_result.rows[0].order_id) );
          console.log(order_product)
          const insert_order_products_sql = 'insert into order_product (product_id, order_quantity, order_id) values %L';
          const insert_order_products_result = await conn.query(format(insert_order_products_sql,order_product));
          console.log(insert_order_products_result);
          // throw new Error(`Error: to stop`);
          await conn.query('COMMIT')
          conn.release();
    
          return insert_order_result.rows[0]
        } catch (err) {
          await conn.query('ROLLBACK')
          throw new Error(`${err}`);
        }
      }

  }