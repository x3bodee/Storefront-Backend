import express, { Request, Response } from 'express';
import { create } from '../../controllers/products/create';
import { index } from '../../controllers/products/index';
import { show } from '../../controllers/products/show';
import { top5 } from '../../controllers/products/top5';
import { productsByCategory } from '../../controllers/products/productsByCategory';
const router = express.Router();


router.get('/index',index);
router.get('/show',show);
router.get('/create',create);
router.get('/top5',top5);
router.get('/productsByCategory',productsByCategory);

export default router;