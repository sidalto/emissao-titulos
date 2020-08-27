const Sequelize = require('sequelize');
const databaseConfig = require('../database/config');

const Proprietario = require('../models/Proprietario');
const Titulo = require('../models/Titulo');
const Usuario = require('../models/Usuario');

const connection = new Sequelize(databaseConfig);

Usuario.init(connection);
Proprietario.init(connection);
Titulo.init(connection);

Proprietario.associar(connection.models);
Titulo.associar(connection.models);
