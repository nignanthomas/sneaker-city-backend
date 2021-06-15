import Router from 'express';
import { allOrders, createOrder, oneOrder } from '../controllers/orders.controller';

const router = new Router();
router.get('/', allOrders);
router.get('/:orderId', oneOrder);
router.post('/', createOrder);

export default router;
