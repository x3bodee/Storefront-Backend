import db from '../helpers/db';
import bcrypt from 'bcrypt';

  export type User = {
    user_id?: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    created_at?: Date;
  };


  const { PEPPER } = process.env;

  export class UserModel {

    async index(): Promise<User[]> {
        try {
         
          const conn = await db.connect();
          const sql = 'select user_id, first_name, last_name, email, created_at from users;';
          const result = await conn.query(sql);
          conn.release();
         
          return result.rows;
        } catch (err) {
          throw new Error(`${err}`);
        }
      }
    
    async show(id:number): Promise<User> {
        try {
         
          const conn = await db.connect();
          const sql = 'select user_id, first_name, last_name, email, created_at from users where user_id = ($1);';
          const result = await conn.query(sql,[id]);
          conn.release();
    
          return result.rows[0];
        } catch (err) {
          throw new Error(`${err}`);
        }
      }


    async signup(user:User): Promise<User> {
        try {
         
          const conn = await db.connect();
          console.log(user);

          // to prevent the db from reserving the id + to apply forgin key constaint.
          const sql= "select email from users where email = ($1);";
          const check_email = await conn.query(sql,[user.email]);
          if (check_email.rows[0]) throw new Error(`Error: This email already has an account`);

          const hashedPassword = bcrypt.hashSync(user.password + PEPPER, 12);
          const sql2 = 'insert into users (first_name,last_name,email,password) values ($1,$2,$3,$4) RETURNING *;';
          const result = await conn.query(sql2,[ user.first_name, user.last_name, user.email, hashedPassword ]);
          conn.release();
    
          return result.rows[0];
        } catch (err) {
          throw new Error(`${err}`);
        }
      }

    async signin (email:string, password:string): Promise<User | null>{
      try {
        const conn = await db.connect();
        const sql = 'SELECT * FROM users WHERE email=($1)';
        const result = await conn.query(sql, [email]);
        const user = result.rows[0];
        console.log(user);

        if (!user) throw new Error(`Error: Wrong user information`);

        if (bcrypt.compareSync(password + PEPPER, user.password)) {
          return user;
        }

        return null;
      } catch (error) {
        throw new Error(`${error}`);
      }
    
    }


  }