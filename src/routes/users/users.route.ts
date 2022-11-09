import express, { Request, Response } from 'express';
import { create }  from '../../controllers/users/create';
import { show } from '../../controllers/users/show';
import { index } from '../../controllers/users/index';
const router = express.Router();


router.get('index',create);
router.get('index',index);
router.get('index',show);
export default router;