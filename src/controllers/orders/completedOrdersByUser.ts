import { Request, Response } from 'express';

// show completed orders

export const completedOrdersByUser = async (req: Request, res: Response) => {
  console.log('show completed orders');
  return res.status(200);
  };