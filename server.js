require('dotenv').config();
require('./database/connection');
const express = require('express');
const cors = require('./middlewares/cors');
const routes = require('./routes');

const app = express();
const port = process.env.APP_PORT;

app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running in the porta ${port}`);
});
