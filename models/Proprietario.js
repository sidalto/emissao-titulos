const { Sequelize, Model } = require('sequelize');

class Proprietario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        cpf: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          validate: {
            len: {
              args: [14],
              msg: 'CPF precisa ter 14 caracteres.',
            },
          },
          unique: {
            msg: 'CPF já existe',
          },
        },
        rg: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          unique: {
            msg: 'RG já existe',
          },
        },
        nacionalidade: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        profissao: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        estado_civil: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        conjuge_nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
        },
        conjuge_nacionalidade: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
        },
        conjuge_profissao: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
        },
        conjuge_rg: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
          unique: {
            msg: 'RG já existe',
          },
        },
        conjuge_cpf: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
          unique: {
            msg: 'CPF já existe',
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associar(models) {
    this.hasMany(models.Titulo, { foreignKey: 'proprietario_id' });
  }
}

module.exports = Proprietario;
