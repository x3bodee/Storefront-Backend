import express, { Request, Response } from 'express';
import { create }  from '../../controllers/users/create';
import { show } from '../../controllers/users/show';
import { index } from '../../controllers/users/index';
const router = express.Router();


router.get('/create',create);
router.get('/index',index);
router.get('/show',show);

export default router;