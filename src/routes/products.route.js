import Router from 'express';
import { allProducts, latestProducts, productById } from '../controllers/products.controller';

const router = new Router();
router.get('/', allProducts);
router.get('/latest', latestProducts);
router.get('/:productId', productById);

export default router;
