import express from 'express';
import { index } from '../../controllers/categores/index';
import { show } from '../../controllers/categores/show';
import { create } from '../../controllers/categores/create';
import { check_token } from '../../middleware/check_token';
const router = express.Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', check_token, create);

export default router;
