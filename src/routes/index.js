import Router from 'express';
import productsRoutes from "./products.route"
import sizesRoutes from './sizes.route';
import usersRoutes from './users.route';
import ordersRoutes from './orders.route';

const router = new Router();
router.use('/products', productsRoutes);
router.use('/sizes', sizesRoutes);
router.use('/users', usersRoutes);
router.use('/orders', ordersRoutes);

export default router;
