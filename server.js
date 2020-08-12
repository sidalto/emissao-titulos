require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.APP_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
