import { Request, Response } from 'express';

// create categores

export const create = async (req: Request, res: Response) => {
  console.log('create categores');
  return res.status(200);
  };