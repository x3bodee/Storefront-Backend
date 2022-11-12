import { Request, Response } from 'express';
import { ProductModel } from '../../models/Product.model';

interface RequestParams {
  id:string;
}

// show all products

const Product = new ProductModel();

export const productsByCategory = async (req: Request< RequestParams , unknown, unknown, unknown >, res: Response) => {
  console.log('show products by category');

  try {  
    if ( isNaN(Number(req.params.id)) || Number(req.params.id) < 1 ) throw new Error(`category id must be a number greater than 0`);
    const id = Number(req.params.id);
    console.log('this id is coming from the header',id);

    const products = await Product.productsByCategory(id);

    if (!products.length) return res.status(200).json({status: true, msg:'There is no products available under this category'});
    
    return res.status(200).json({status: true, msg: 'Done', products});
    
  } catch (error) {
    console.log('error in product productsByCategory controller: ', error);
    
    const err = error+"";
    return res.status(400).json({status: false, msg: 'Error', err});
  }

  };