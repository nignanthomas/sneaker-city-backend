import db from '../database/models';
import { findOneUser } from '../services/users.service';
import { hashPassword, checkPassword, generateToken } from '../utils/users.util';

export const signup = async (req, res, next) => {
  try {
    const {
      firstName, lastName, email, password, city, phone,
    } = req.body;

    const user = await db.users.build({
      firstName,
      lastName,
      email,
      password: hashPassword(password),
      city,
      phone,
      role: 1,
    });

    user.save().then((user) => res.status(201).json({
      message: 'User successfully created!',
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    }))
    .catch((error) => {
      return res.status(500).json({ error: error.errors[0].message });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password: submittedPassword } = req.body;
    const user = await findOneUser({ where: { email } });

    if (!user) res.status(404).json({ error: 'User with that email not found!' });
    if (!checkPassword(submittedPassword, user.password)) res.status(400).json({ error: 'Password does not match!' });

    const { password, ...userData } = user.dataValues;
    const token = generateToken(user);
    return res.status(200).json({ data: { user: userData, token } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
