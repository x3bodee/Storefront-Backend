import { Request, Response } from 'express';
import { CategoryModel } from '../../models/Category.model';

interface RequestBody {
  category_name: string;
}

// create categores
const category = new CategoryModel();
export const create = async (
  req: Request<unknown, unknown, RequestBody, unknown>,
  res: Response
) => {
  console.log('create categores');
  const category_name = req.body.category_name;

  try {
    if (!category_name)
      throw new Error(
        `Error: category_name is mandatory for creating the category`
      );

    const categores = await category.create(category_name);
    return res.status(200).json({ status: true, msg: 'Done', categores });
  } catch (error) {
    console.log('error in category index controller: ', error);

    const err = error + '';
    return res.status(400).json({ status: false, msg: 'Error', err });
  }
};
