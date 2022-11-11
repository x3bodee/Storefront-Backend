import { Request, Response } from 'express';
import { CategoryModel } from '../../models/Category.model';
// show all categores
const category = new CategoryModel();
export const index = async (req: Request, res: Response) => {
    console.log('show all categores');
    try {
        const categores = await category.index();
        if (!categores.length) return res.status(200).json({status: true, msg:'there is no data'});
        return res.status(200).json({status: true, msg: 'Done', categores});
        
    } catch (error) {
        console.log('error in category index controller: ', error);
        const err = error+"";
        return res.status(400).json({status: false, msg: 'Error', err});
        
    }
};
