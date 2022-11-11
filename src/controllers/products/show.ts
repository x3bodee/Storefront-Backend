import { Request, Response } from 'express';
import { ProductModel } from '../../models/Product.model';

interface RequestParams {
  id:string;
}

// show all products

const Product = new ProductModel();

export const show = async (req: Request< RequestParams , unknown, unknown, unknown >, res: Response) => {
  console.log('show one product');

  try {  
    if (isNaN(Number(req.params.id)) || Number(req.params.id) < 1 ) throw new Error(`Product id must be a number greater than 0`);
    const id = Number(req.params.id);
    console.log('this id is coming from the header',id);

    const product = await Product.show(id);

    if (!product) return res.status(200).json({status: true, msg:'There is no such a product'});
    
    return res.status(200).json({status: true, msg: 'Done', product});
    
  } catch (error) {
    console.log('error in product show controller: ', error);
    
    const err = error+"";
    return res.status(400).json({status: false, msg: 'Error', err});
  }

  };