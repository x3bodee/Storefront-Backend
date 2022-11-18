import express from 'express';
import { currentOrdersByUser }  from '../../controllers/orders/currentOrdersByUser';
import { create }  from '../../controllers/orders/create';
import { completedOrdersByUser }  from '../../controllers/orders/completedOrdersByUser';
const router = express.Router();


router.post('/',create);
router.get('/completedOrdersByUser',completedOrdersByUser);
router.get('/currentOrdersByUser',currentOrdersByUser);

export default router;