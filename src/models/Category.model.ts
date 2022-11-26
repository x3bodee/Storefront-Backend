import db from '../helper/db';

// category_id SERIAL PRIMARY KEY,
// category_name VARCHAR(50) NOT NULL,
// created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

export type Category = {
  category_id: number;
  category_name: string;
  created_at: Date;
};

export class CategoryModel {
  async index(): Promise<Category[]> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * FROM category';
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async show(id: number): Promise<Category> {
    try {
      const conn = await db.connect();
      const sql = 'SELECT * FROM category where category_id = $1';
      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async create(name: string): Promise<Category> {
    try {
      const conn = await db.connect();
      // to prevent the db from reserving the id.
      const sql1 =
        'select category_name from category where category_name= ($1);';
      const select_result = await conn.query(sql1, [name]);
      if (select_result.rows[0])
        throw new Error(`Error: This record alredy exist!!`);

      const sql2 =
        'insert into category (category_name) values ($1) RETURNING *;';
      const insert_result = await conn.query(sql2, [name]);
      conn.release();

      return insert_result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
