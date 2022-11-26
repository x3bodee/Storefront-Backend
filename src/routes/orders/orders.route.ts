import express from 'express';
import { currentOrdersByUser } from '../../controllers/orders/currentOrdersByUser';
import { create } from '../../controllers/orders/create';
import { completedOrdersByUser } from '../../controllers/orders/completedOrdersByUser';
import { check_token } from '../../middleware/check_token';
const router = express.Router();

router.post('/', check_token, create);
router.get('/completedOrdersByUser', check_token, completedOrdersByUser);
router.get('/currentOrdersByUser', check_token, currentOrdersByUser);

export default router;
