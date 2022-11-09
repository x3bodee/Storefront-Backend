import db from '../helpers/db';


export type User = {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    created_at: Date;
  };

  export class UserModel {

    // async index(): Promise<User[]> {
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