import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

export const checkPassword = (password, hashed) => bcrypt.compareSync(password, hashed);

export const generateToken = user => {
  const token = JWT.sign(
    {
      payload: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    },
    process.env.JWT_SECRET,
  );
  return token;
};
