import { Request, Response } from 'express';
import { OrderModel } from '../../models/Order.model';

interface RequestBody {
  user_id: string;
  products_list: [product_id: number, quantity: number][];
}

// create categores
const Order = new OrderModel();
export const create = async (
  req: Request<unknown, unknown, RequestBody, unknown>,
  res: Response
) => {
  console.log('create new order');
  const { user_id, products_list } = req.body;

  try {
    if (!user_id)
      throw new Error(`Error: user_id is mandatory for creating the order`);
    if (isNaN(Number(user_id)) || Number(user_id) < 1)
      throw new Error(`user id must be a number greater than 0`);
    if (!products_list)
      throw new Error(
        `Error: products_list is mandatory for creating the order`
      );

    const order = await Order.create(Number(user_id), products_list);
    return res
      .status(200)
      .json({ status: true, msg: 'Done', order_id: order.order_id });
  } catch (error) {
    console.log('error in create order controller: ', error);

    const err = error + '';
    return res.status(400).json({ status: false, msg: 'Error', err });
  }
};
