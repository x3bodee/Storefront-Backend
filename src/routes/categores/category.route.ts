import express, { Request, Response } from 'express';
import { index } from '../../controllers/categores/index';
import { create } from '../../controllers/categores/create';
const router = express.Router();


router.get('index',index);
router.get('index',create);

export default router;