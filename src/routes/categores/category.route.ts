import express, { Request, Response } from 'express';
import { index } from '../../controllers/categores/index';
import { show } from '../../controllers/categores/show';
import { create } from '../../controllers/categores/create';
const router = express.Router();


router.get('/',index);
router.get('/:id',show);
router.post('/',create);

export default router;