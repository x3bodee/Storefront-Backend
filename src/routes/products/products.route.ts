import express from 'express';
import { create } from '../../controllers/products/create';
import { index } from '../../controllers/products/index';
import { show } from '../../controllers/products/show';
import { top5 } from '../../controllers/products/top5';
import { productsByCategory } from '../../controllers/products/productsByCategory';
import { check_token } from '../../middleware/check_token';

const router = express.Router();

router.get('/productsByCategory/:id', productsByCategory);
router.get('/top5', top5);
router.get('/', index);
router.get('/:id', show);
router.post('/', check_token, create);

export default router;
