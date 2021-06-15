import { body } from 'express-validator';

export const signupValidationRules = () => [
  body('email', 'Email must be a valid email address: example@email.com').isEmail(),
  body('password', 'Password is required!').notEmpty(),
  body('password', 'Password must be at least 8 characters!').isLength({ min: 8 }),
];
