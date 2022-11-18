import express, { Request, Response } from 'express';
import { check_token } from '../../middleware/check_token';
import { signup }  from '../../controllers/users/signup';
import { signin }  from '../../controllers/users/signin';
import { show } from '../../controllers/users/show';
import { index } from '../../controllers/users/index';

const router = express.Router();


router.post('/signin',signin);
router.post('/',signup);
router.get('/', check_token, index);
router.get('/:id', check_token, show);

export default router;