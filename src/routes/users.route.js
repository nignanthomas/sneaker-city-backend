import Router from 'express';
import { login, signup } from '../controllers/users.controller';
import { signupValidationRules } from '../middlewares/users.validator';
import { validate } from '../middlewares/validate.validator';

const router = new Router();
router.post('/signup', signupValidationRules(), validate , signup);
// router.post('/signup', signup);
router.post('/login', login);

export default router;
