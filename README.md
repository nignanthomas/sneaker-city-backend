# Sneaker City

Live API: https://sneaker-city-backend.herokuapp.com/

## Vision :telescope:

Sneaker City is a brand new online-only store for sneaker enthusiasts. This isn’t your average e-commerce shop – it’s a curatedexperience that shows just the latest in sneaker trends.

---

## Setting Up The Application :wrench:

1. Clone the repo.

2. Refer to `.env.example` to configure your environment as follows.

3. Run the command `yarn install && yarn dev` to spin up the server.

4. Access `http://localhost:<:APPLICATION_PORT>` in Postman.

```javascript
{
  "status": 200,
  "message": "Welcome to Sneaker City!"
}
```

5. Ensure you have Postgres running

6. When the server is running, create a database on your new PG server. Ensure your new development database is the same name as your `DATABASE_URL` and your test database is the same name as `TEST_DB ` environment variables

7. Run the command `sequelize db:refresh` to migrate and seed your database.

8. Check your database to ensure proper functionality and correctness.

## API Endpoints :droplet:

### Users

| Method |     Endpoint      | Description |
| ------ | :---------------: | ----------: |
| POST   | /api/users/signup |      Signup |
| POST   | /api/users/login  |       Login |

### Products

| Method |         Endpoint         |     Description |
| ------ | :----------------------: | --------------: |
| GET    |      /api/products       |    All Products |
| GET    | /api/products/:productId |  Single Product |
| GET    |   /api/products/latest   | Latest Products |

### Orders

| Method |       Endpoint       |  Description |
| ------ | :------------------: | -----------: |
| GET    |     /api/orders      |   All Orders |
| GET    | /api/orders/:orderId | Single Order |
| POST   |     /api/orders      | Create Order |

### Sizes

| Method |  Endpoint  | Description |
| ------ | :--------: | ----------: |
| GET    | /api/sizes |   All Sizes |

# Technologies Used :gear:

```
Node JS
Express
Postgresql
Mocha/Chai
```

# Bugs :bug:

No known bugs.
If you spot one, let us know

# Author :computer:

[Thomas Nignan](https://nignanthomas.github.io) for Bank of Kigali, Rwanda.
