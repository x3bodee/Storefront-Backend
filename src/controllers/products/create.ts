import { Request, Response } from 'express';

// create new product

export const create = async (req: Request, res: Response) => {
    console.log('create new product');
    return res.status(200);
};
