import { Request, Response } from 'express';

// show all products

export const index = async (req: Request, res: Response) => {
  console.log('show all products');
  return res.status(200);
  };