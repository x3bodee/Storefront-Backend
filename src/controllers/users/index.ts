import { Request, Response } from 'express';
import { UserModel, User } from '../../models/User.model';


// show all users
const User = new UserModel();

// TODO: add middelware
export const index = async (req: Request, res: Response) => {
    console.log('show all users');
    try {
        const users = await User.index();
        
        if (!users.length) return res.status(200).json({status: true, msg:'there is no registered users yet'});

        return res.status(200).json({status: true, msg: 'Done', users});
        
    } catch (error) {
        console.log('error in user index controller: ', error);
        const err = error+"";
        return res.status(400).json({status: false, msg: 'Error', err});
        
    }

};