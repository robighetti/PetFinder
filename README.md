<h1 align="center">
  <strong>IBM CHALLENGE ✍</strong>
</h1>

<h3 align="center">
  Pet Finder was the challenge proposed by IBM in the selection process.
  <p>Candidate ➡ Rodrigo Bighetti</p>
  <p>This project aims to develop an API and a WEB APP to help abandoned pets find a new home.</p>
</h3>

## ✨ Starting the API application

To start this application you need to have some requirements and follow the procedures below.

### ❗Requirements

- [NodeJS - v12.17.0](https://nodejs.org/en/)
- [npm - 6.14.4](https://www.npmjs.com/)
- [Yarn - 1.22.4 (opcional)](https://yarnpkg.com/)
- [Docker](https://docs.docker.com/get-docker/)

## Instalação

```
To be able to run the API it is necessary to create an instance in the docker with postgres, to do this just execute the command below:

$ docker run --name NOME_DO_CONTAINER -e POSTGRES_PASWORD=docker -p 5432:5432 -d postgres

This command will create the postgres instance with the default user (postgres) and the password "docker", if you want to change it, you need to change the ormconfig.json file inside the main API directory.

❗To run the application, the application runs on port 3333 and 3000, so make sure it is free for use).

```

## Dependencies

```
"bcryptjs": "^2.4.3",
"class-transformer": "^0.2.3",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"express-async-errors": "^3.1.1",
"handlebars": "^4.7.6",
"jsonwebtoken": "^8.5.1",
"multer": "^1.4.2",
"nodemailer": "^6.4.10",
"pg": "^8.3.0",
"tsyringe": "^4.3.0",
"typeorm": "^0.2.25",
"uuidv4": "^6.2.0"
```

# Running the API

> To run the API using YARN:

- yarn (if using yarn) - install all dependencies.
- yarn run:dev (to run the API on port 3333).

> Para rodar a API utilizando o NPM

- npm install - install all dependencies.
- npm run dev:server (to run the API on port 3333).

# Running the front-end

> To run the FRONTEND using YARN:

- yarn (if using yarn) - install all dependencies.
- yarn run:dev (to run the API on port 3000).

> Para rodar o FRONTEND utilizando o NPM:

- npm instal - faz a instalação de todas as dependências.
- npm run start (to run the FRONTEND on port 3333).

## Author

- **Rodrigo Bighetti** - _Full-Stack developer_ - [GitHub profile](https://github.com/robighetti)
