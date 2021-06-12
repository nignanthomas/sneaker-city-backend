Sneaker City
=======

## Vision :telescope:
Sneaker City is a brand new online-only store for sneaker enthusiasts. This isn’t your average e-commerce shop – it’s a curatedexperience that shows just the latest in sneaker trends.

---

## Setting Up The Application :wrench:

1. Clone the repo.

2. Refer to ` .env.example ` to configure your environment as follows:

3. Run the command ` yarn dev ` to spin up the server.

4. Access ` http://localhost:<:APPLICATION_PORT> ` in Postman, if docker is running correctly, you will be returned with a message:

    ```javascript
   { 
      "status": 200,
      "message": "Welcome to Sneaker City!"
   }
    ```

5. Ensure you have Postgres running 

  _**Note:** Your Postgres Database will run on port ` <:DATABASE_PORT> `. If you're using PgAdmin or Postico ensure you create a database on the server ` localhost:<:DATABASE_PORT> ` 

6. When the server is running, create a database on your new PG server. Ensure your new development database is the same name as your ` DEVELOPMENT_DB `  and your test database is the same name as ` TEST_DB  ` environment variables

7. Run the command ` sequelize db:migrate:all `

8. Run the command sequelize ` db:seed:all `

9. Check your database to ensure proper functionality and correctness. 

## API Endpoints :droplet:


# Bugs :bug:
No known bugs.
If you spot one, let us know

# Author :computer:
[Thomas Nignan](https://nignanthomas.github.io) for Bank of Kigali Rwanda
