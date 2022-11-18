import express, { Request, Response } from 'express';
import { signup }  from '../../controllers/users/signup';
import { signin }  from '../../controllers/users/signin';
import { show } from '../../controllers/users/show';
import { index } from '../../controllers/users/index';
const router = express.Router();


router.post('/signin',signin);
router.post('/',signup);
router.get('/',index);
router.get('/:id',show);

export default router;