import { Request, Response } from 'express';

// show product info

export const show = async (req: Request, res: Response) => {
  console.log('show product info');
  return res.status(200);
  };
