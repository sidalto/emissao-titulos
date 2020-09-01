require('dotenv').config();
require('./database/connection');

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');

const cors = require('./middlewares/cors');
const routes = require('./routes');

const app = express();
const port = process.env.APP_PORT;

app.use(cors);
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes);
app.use(csrf());

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
