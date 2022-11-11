import { Request, Response } from 'express';

// show all categores

export const index = async (req: Request, res: Response) => {
    console.log('show all categores');
    return res.status(200).json({status: true});
};
