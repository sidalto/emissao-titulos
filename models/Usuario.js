const { Sequelize, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          validate: {
            len: {
              args: [3, 50],
              msg: 'O nome deve ter entre 3 e 50 caracteres',
            },
          },
        },
        cpf: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
          unique: {
            msg: 'CPF já existe',
          },
        },
        tipo: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        senha_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        senha: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          allowNull: false,
          validate: {
            len: {
              args: [8, 50],
              msg: 'A senha deve ter entre 8 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senha) {
        usuario.senha_hash = await bcryptjs.hash(usuario.senha, 10);
      }
    });

    return this;
  }

  verificaSenha(senha) {
    return bcryptjs.compare(senha, this.senha_hash);
  }
}

module.exports = Usuario;
