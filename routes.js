const routes = require('express').Router();

const usuarioController = require('./controllers/UsuarioController');
const tituloController = require('./controllers/TituloController');
const proprietarioController = require('./controllers/ProprietarioController');
const tokenController = require('./controllers/TokenController');

const loginRequerido = require('./middlewares/loginRequerido');
const permissaoRequerida = require('./middlewares/permissaoRequerida');

// rotas abertas
routes.get('/', (req, res) => res.render('index', { valor: 'Oi' }));
routes.post('/token', tokenController.store);

// middleware de login
// routes.use(loginRequerido);

// rota da API para validação do título
routes.get('/api/v1/titulo/:chave', tituloController.show);

// middleware de nível de acesso
// routes.use(permissaoRequerida);

// rotas do administrativo - usuário
routes.get('/admin/usuarios', usuarioController.index);
routes.get('/admin/usuario/:id', usuarioController.show);
routes.post('/admin/usuario', usuarioController.store);
routes.patch('/admin/usuario/:id', usuarioController.update);
routes.delete('/admin/usuario/:id', usuarioController.delete);

// rotas do administrativo - proprietário
routes.get('/admin/proprietarios', proprietarioController.index);
routes.get('/admin/proprietario/:id', proprietarioController.show);
routes.post('/admin/proprietario', proprietarioController.store);
routes.patch('/admin/proprietario/:id', proprietarioController.update);
routes.delete('/admin/proprietario/:id', proprietarioController.delete);

// rotas do administrativo - título
routes.get('/admin/titulos', tituloController.index);
routes.get('/admin/titulo/:chave', tituloController.show);
routes.post('/admin/titulo', tituloController.store);
routes.patch('/admin/titulo/:id', tituloController.update);
routes.delete('/admin/titulo/:id', tituloController.delete);

module.exports = routes;
