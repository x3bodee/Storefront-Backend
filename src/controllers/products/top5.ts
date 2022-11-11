import { Request, Response } from 'express';

// show top5 products

export const top5 = async (req: Request, res: Response) => {
  console.log('show top5 products');
  return res.status(200);
  };