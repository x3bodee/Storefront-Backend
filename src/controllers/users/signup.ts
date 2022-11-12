import { Request, Response } from 'express';
import { UserModel, User } from '../../models/User.model';
import jwt from 'jsonwebtoken';

interface RequestBody {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

// create new user

const User = new UserModel();
const TOKEN  = process.env.TOKEN as string;

export const signup = async (req: Request< unknown , unknown, RequestBody, unknown >, res: Response) => {
  console.log('create new user');
  const { first_name, last_name, email, password } = req.body;
  
  try {
    if (!first_name) throw new Error(`Error: first_name is mandatory for creating the user`);
    if (!last_name) throw new Error(`Error: last_name is mandatory for creating the user`);
    if (!email) throw new Error(`Error: email is mandatory for creating the user`);
    if (!password) throw new Error(`Error: password is mandatory for creating the user`);

    const user: User= {first_name, last_name, email, password};

    const createed_user = await User.signup(user);
    const token = jwt.sign(
      { user: { id: createed_user?.user_id,
        first_name: createed_user?.first_name,
        last_name: createed_user?.last_name,
        email: createed_user?.email,
        created_at: createed_user?.created_at
       } },
      TOKEN,
      { expiresIn: "7d" }// it will be expired after 7 days 
      );

    return res.status(200).json({status: true, msg: 'Done', token});
    
  } catch (error) {
    console.log('error in user signup controller: ', error);
  
    const err = error+"";
    return res.status(400).json({status: false, msg: 'Error', err});
    
  }
  // return res.status(200).json({hashedPassword,hashedPassword3,hashedPassword2,hashedPassword4});
  };