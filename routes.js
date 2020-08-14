const express = require('express');
const tituloController = require('./controllers/TituloController');
const proprietarioController = require('./controllers/ProprietarioController');

const routes = express.Router();

// rota da API para validação do título
routes.get('/api/v1/titulo:id', tituloController.show);

// rotas do administrativo - proprietário
routes.get('/admin/proprietarios', proprietarioController.index);
routes.get('/admin/proprietario:id', proprietarioController.show);
routes.post('/admin/proprietario', proprietarioController.store);
routes.patch('/admin/proprietario:id', proprietarioController.update);
routes.delete('/admin/proprietario:id', proprietarioController.delete);

// rotas do administrativo - título
routes.get('/admin/titulos', tituloController.index);
routes.get('/admin/titulo:id', tituloController.show);
routes.post('/admin/titulo', tituloController.store);
routes.patch('/admin/titulo:id', tituloController.update);
routes.delete('/admin/titulo:id', tituloController.delete);

module.exports = routes;
