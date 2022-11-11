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
    //       const sql = 'select * from users;';
    //       const result = await conn.query(sql);
    //       conn.release();
    //      
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }
    
    // async show(): Promise<Category[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const sql = 'select * from users where user_id = 1;';
    //       const result = await conn.query(sql);
    //       conn.release();
    
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }


    // async create(user:User): Promise<Category[]> {
    //     try {
         
    //       const conn = await db.connect();
    //       const hashedPassword = bcrypt.hashSync(user.password + PEPPER, 12);
    //       const sql = 'insert into users (first_name,last_name,email,password) values ($1,$2,$3,$4);';
    //       const result = await conn.query(sql);
    //       conn.release();
    // 
    //       return result.rows;
    //     } catch (err) {
    //       throw new Error(`${err}`);
    //     }
    //   }


  }