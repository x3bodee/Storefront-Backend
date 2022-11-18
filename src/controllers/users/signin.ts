import { Request, Response } from 'express';
import { UserModel, User } from '../../models/User.model';
import jwt from 'jsonwebtoken';
// create new user

interface RequestBody {
  email: string;
  password: string;
}

const User = new UserModel();
const TOKEN  = process.env.TOKEN as string;
 
export const signin = async (req: Request< unknown , unknown, RequestBody, unknown >, res: Response) => {
  console.log('login user');

  const { email, password } = req.body;
  
  try {
   
    if (!email) throw new Error(`Error: email is mandatory for login the user`);
    if (!password) throw new Error(`Error: password is mandatory for login the user`);


    const user = await User.signin( email, password );

    if (user === null) throw new Error(`Error: Wrong user information`);

    const token = jwt.sign(
      { user: { id: user?.user_id,
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        created_at: user?.created_at
       } },
      TOKEN,
      { expiresIn: "7d" }// it will be expired after 7 days 
      );

    return res.status(200).json({status: true, msg: 'Done', token});
    
  } catch (error) {
    console.log('error in user in controller: ', error);
  
    const err = error+"";
    return res.status(400).json({status: false, msg: 'Error', err});
    
  }

  };