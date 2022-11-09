import { Request, Response } from 'express';

// create new order

export const create = async (req: Request, res: Response) => {
  console.log('create new order');
  return res.status(200);
  };