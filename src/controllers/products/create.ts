import { Request, Response } from 'express';
import { ProductModel } from '../../models/Product.model';

interface RequestBody {
  product_name: string;
  price: string;
  category: string;
}

// show all products

const Product = new ProductModel();

export const create = async (
  req: Request<unknown, unknown, RequestBody, unknown>,
  res: Response
) => {
  console.log('show all products');

  try {
    const { product_name, price, category } = req.body;
    if (!product_name)
      throw new Error(
        `Error: product_name is mandatory for creating the product`
      );
    if (!price)
      throw new Error(`Error: price is mandatory for creating the product`);
    if (!category)
      throw new Error(`Error: category is mandatory for creating the product`);

    if (isNaN(Number(price)) || Number(price) < 1)
      throw new Error(`Product price must be a number greater than 0`);
    if (isNaN(Number(category)) || Number(category) < 1)
      throw new Error(`Product category must be a number greater than 0`);

    const price_converted = parseFloat(price);
    const category_converted = parseFloat(category);

    const product = await Product.create(
      product_name,
      price_converted,
      category_converted
    );

    return res.status(200).json({ status: true, msg: 'Done', product });
  } catch (error) {
    console.log('error in product create controller: ', error);

    const err = error + '';
    return res.status(400).json({ status: false, msg: 'Error', err });
  }
};
