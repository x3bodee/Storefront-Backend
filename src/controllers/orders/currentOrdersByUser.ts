import { Request, Response } from 'express';
import { OrderModel } from '../../models/Order.model';

// show current orders
const Order = new OrderModel();

export const currentOrdersByUser = async (req: Request, res: Response) => {
  console.log('show current orders');
  try {
    const id = req.user_id as string;
    if (isNaN(Number(id)) || Number(id) < 1)
      throw new Error(`user id must be a number greater than 0`);
    const user_id = Number(id);
    const orders = await Order.currentOrdersByUser(user_id);
    if (!orders.length)
      return res.status(200).json({
        status: true,
        msg: 'there is no pending orders for this user',
      });
    return res.status(200).json({ status: true, msg: 'Done', result: orders });
  } catch (error) {
    console.log('error in order currentOrdersByUser controller: ', error);
    const err = error + '';
    return res.status(400).json({ status: false, msg: 'Error', err });
  }
};
