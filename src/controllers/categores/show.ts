import { Request, Response } from 'express';
import { CategoryModel } from '../../models/Category.model';
// create categores

interface RequestParams {
    id:string;
}

const Category = new CategoryModel();
export const show = async (req: Request< RequestParams , unknown, unknown, unknown >, res: Response) => {
  console.log('show category by id');
  
  
  try {
      if (isNaN(Number(req.params.id)) || Number(req.params.id) < 1 ) throw new Error(`Category id must be a number greater than 0`);
      
      const id = Number(req.params.id);
      console.log('this id is coming from the header',id);

      const category = await Category.show(id);
      if (!category) return res.status(200).json({status: true, msg:'there is no such a category'});
      return res.status(200).json({status: true, msg: 'Done', category});
      
  } catch (error) {
      console.log('error in category index controller: ', error);
      const err = error+"";
      return res.status(400).json({status: false, msg: 'Error', err});
      
  }
  
  };