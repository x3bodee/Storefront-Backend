import { Request, Response } from 'express';

// show current orders

export const currentOrdersByUser = async (req: Request, res: Response) => {
  console.log('show current orders');
  return res.status(200);
  };
