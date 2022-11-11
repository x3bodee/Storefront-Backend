import { Request, Response } from 'express';

// create new user

export const create = async (req: Request, res: Response) => {
  console.log('create new user');
  return res.status(200);
  };