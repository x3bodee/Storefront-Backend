import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const TOKEN = process.env.TOKEN as string;
export function check_token(req: Request, res: Response, next: NextFunction) {
  console.log('###### FROM THE MIDDLEWARE ######');
  console.log(req.headers.authorization);
  try {
    if (!req.headers.authorization) throw new Error('Token is required!!');
    const header_token: string = req.headers.authorization as string;
    const token = header_token.split(' ')[1];
    const token_data = jwt.verify(token, TOKEN) as JwtPayload;
    if (!token_data) throw new Error(`Invalid Token`);

    // console.log(token_data);
    console.log(token_data.user.id);
    req.user_id = token_data.user.id;
    next();
  } catch (err) {
    const error: string = (err + '') as string;
    if (error.includes('Token is required!!'))
      return res.status(401).json({
        status: false,
        msg: 'Token is required',
        err: 'ERROR: Token is required',
      });
    if (err instanceof jwt.JsonWebTokenError)
      return res.status(401).json({
        status: false,
        msg: 'Invalid Token',
        err: 'ERROR: Invalid JWT Token',
      });
    if (error.includes('Invalid Token'))
      return res.status(401).json({
        status: false,
        msg: 'Invalid Token',
        err: 'ERROR: Invalid Token',
      });
    throw new Error(`${err}`);
  }
}
