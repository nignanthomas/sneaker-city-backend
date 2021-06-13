import Router from 'express';
import { allSizes } from '../controllers/sizes.controller';

const router = new Router();
router.get('/', allSizes);

export default router;
