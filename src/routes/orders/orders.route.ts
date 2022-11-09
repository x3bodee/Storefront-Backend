import express from 'express';
import { currentOrdersByUser }  from '../../controllers/orders/currentOrdersByUser';
import { create }  from '../../controllers/orders/create';
import { completedOrdersByUser }  from '../../controllers/orders/completedOrdersByUser';
const router = express.Router();


router.get('index',completedOrdersByUser);
router.get('index',create);
router.get('index',currentOrdersByUser);

export default router;