const express = require('express');

const tituloController = require('./controllers/TituloController');
const proprietarioController = require('./controllers/ProprietarioController');
const tokenController = require('./controllers/TokenController');

const loginRequerido = require('./middlewares/loginRequerido');

const routes = express.Router();

// rotas abertas
routes.get('/', (req, res) => res.json('index'));
routes.post('/token', tokenController.store);

// aplicação do middleware de login
routes.use(loginRequerido);

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
