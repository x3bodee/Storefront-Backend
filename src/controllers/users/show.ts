import { Request, Response } from 'express';
import { UserModel, User } from '../../models/User.model';


// show all users
const User = new UserModel();

export const show = async (req: Request< {id:string} , {}, {}, {} >, res: Response) => {
  console.log('show user info');
  try {
    if (isNaN(Number(req.params.id)) || Number(req.params.id) < 1 ) throw new Error(`user id must be a number greater than 0`);
    
    const id = Number(req.params.id);
    console.log('this id is coming from the header',id);

    const user = await User.show(id);
    if (!user) return res.status(200).json({status: true, msg:'there is no such a user'});
    return res.status(200).json({status: true, msg: 'Done', user});
    
  } catch (error) {
    console.log('error in user index controller: ', error);
    const err = error+"";
    return res.status(400).json({status: false, msg: 'Error', err});
    
  }
  };
