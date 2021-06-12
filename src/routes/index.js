import Router from 'express';
import { allProducts } from '../controllers/products.controller';

const router = new Router();
router.use('/products', allProducts);

export default router;
