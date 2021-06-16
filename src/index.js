/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import errorhandler from 'errorhandler';
import cors from 'cors';
import allRoutes from './routes';

// Create global app object
dotenv.config();

const app = express();
app.use(cors());
const http = require('http').createServer(app);

const port = process.env.APPLICATION_PORT || process.env.PORT;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

if (!isProduction) {
  app.use(errorhandler());
}

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https' && isProduction) {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});

http.listen(port, () => console.log(`Sneaker City is running server on port ${port}...`));

app.use('/api/', allRoutes);

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to Sneaker City!' })
});

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Sorry this route does not exist !',
  });
});

export default app;
