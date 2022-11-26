import { Request, Response } from 'express';
import { ProductModel } from '../../models/Product.model';

// show all products

const Product = new ProductModel();

export const top5 = async (req: Request, res: Response) => {
  console.log('show one product');

  try {
    const products = await Product.top5();

    if (!products.length)
      return res.status(200).json({
        status: true,
        msg: 'There is no products that has been ordered',
      });

    return res.status(200).json({ status: true, msg: 'Done', products });
  } catch (error) {
    console.log('error in product top5 controller: ', error);

    const err = error + '';
    return res.status(400).json({ status: false, msg: 'Error', err });
  }
};
