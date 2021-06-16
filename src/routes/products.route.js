import Router from 'express';
import { allProducts, latestProducts, productById, productsByCategory } from '../controllers/products.controller';

const router = new Router();
router.get('/', allProducts);
router.get('/latest', latestProducts);
router.get('/:productId', productById);
router.get('/category/:categoryId', productsByCategory);

export default router;
