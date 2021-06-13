import Router from 'express';
import { allProducts, latestProducts } from '../controllers/products.controller';

const router = new Router();
router.get('/products', allProducts);
router.get('/products/latest', latestProducts);

export default router;
