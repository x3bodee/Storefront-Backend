import { Request, Response } from 'express';

// show all users

export const index = async (req: Request, res: Response) => {
    console.log('show all users');
    return res.status(200);
};