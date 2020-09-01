require('dotenv').config();
const cors = require('cors');

require('./database/connection');

const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.APP_PORT;

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// app.use(cors());

app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
