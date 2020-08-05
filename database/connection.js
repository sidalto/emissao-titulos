import Sequelize from 'sequelize';
import databaseConfig from './config';
import Aluno from '../models/Aluno';
import Usuario from '../models/Usuario';
import Foto from '../models/Foto';

const connection = new Sequelize(databaseConfig);

Proprietario.init(connection);
Titulo.init(connection);
Usuario.init(connection);
Aluno.associar(connection.models);
Foto.associar(connection.models);