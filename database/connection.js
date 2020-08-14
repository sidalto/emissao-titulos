const Sequelize = require('sequelize');
const databaseConfig = require('../config/config');
const Proprietario = require('../models/Proprietario');
const Titulo = require('../models/Titulo');
const Usuario = require('../models/Usuario');

const connection = new Sequelize(databaseConfig);

Proprietario.init(connection);
Titulo.init(connection);
Usuario.init(connection);

Proprietario.associar(connection.models);
Titulo.associar(connection.models);
