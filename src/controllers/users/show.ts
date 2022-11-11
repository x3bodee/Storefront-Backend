import { Request, Response } from 'express';

// show user info

export const show = async (req: Request, res: Response) => {
  console.log('show user info');
  return res.status(200);
  };
