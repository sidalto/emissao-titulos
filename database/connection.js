import Sequelize from 'sequelize';
import databaseConfig from '../config/config';
import Proprietario from '../models/Proprietario';
import Titulo from '../models/Titulo';
import Usuario from '../models/Usuario';

const connection = new Sequelize(databaseConfig);

Proprietario.init(connection);
Titulo.init(connection);
Usuario.init(connection);

Proprietario.associar(connection.models);
Titulo.associar(connection.models);
