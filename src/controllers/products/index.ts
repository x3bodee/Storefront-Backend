import { Request, Response } from 'express';
import { ProductModel } from '../../models/Product.model';

// show all products

const Product = new ProductModel();

export const index = async (req: Request, res: Response) => {
  console.log('show all products');

  try {
    const products = await Product.index();

    if (!products.length)
      return res
        .status(200)
        .json({ status: true, msg: 'There is no products available' });

    return res.status(200).json({ status: true, msg: 'Done', products });
  } catch (error) {
    console.log('error in product index controller: ', error);

    const err = error + '';
    return res.status(400).json({ status: false, msg: 'Error', err });
  }
};
