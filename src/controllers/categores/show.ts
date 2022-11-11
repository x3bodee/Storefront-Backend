import { Request, Response } from 'express';

// create categores

export const show = async (req: Request, res: Response) => {
  console.log('show category by id');
  return res.status(200).json({status: true});
  };