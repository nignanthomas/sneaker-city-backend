import Router from 'express';
import productsRoutes from "./products.route"
import sizesRoutes from './sizes.route';

const router = new Router();
router.use('/products', productsRoutes);
router.use('/sizes', sizesRoutes);

export default router;
