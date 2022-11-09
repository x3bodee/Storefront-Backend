import express from 'express';
import category from './categores/category.route';
import product from './products/products.route';
import order from './orders/orders.route';
import user from './users/users.route';


const routes = express.Router();

routes.use('/category', category);
routes.use('/product', product);
routes.use('/order', order);
routes.use('/user', user);


export default routes;