const express = require('express');
const tituloController = require('./controllers/TituloController');

const routes = express.Router();

// routes.get('/titulo:id', tituloController.getTitulo);

routes.get('/titulo/:id', (req, res) => {
  if (req.params.id <= 10) {
    res.json('você enviou um valor menor que 10');
  }
});

module.exports = routes;