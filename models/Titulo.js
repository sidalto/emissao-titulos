const { Sequelize, Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const qrcode = require('qrcode');
const crypto = require('crypto').randomBytes(64).toString('hex');

class Titulo extends Model {
  static init(sequelize) {
    super.init(
      {
        processo: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        logradouro: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        numero: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          allowNull: true,
        },
        complemento: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: true,
        },
        bairro: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        quadra: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          allowNull: false,
        },
        lote: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          allowNull: false,
        },
        data_expedicao: {
          type: Sequelize.DATE,
          defaultValue: '',
          allowNull: false,
        },
        prefeito: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        secretario: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        cargo_secretario: {
          type: Sequelize.STRING,
          defaultValue: '',
          allowNull: false,
        },
        chave: {
          type: Sequelize.STRING(150),
          defaultValue: '',
          allowNull: false,
          unique: true,
        },
        qrcode: {
          type: Sequelize.STRING(150),
          defaultValue: '',
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (titulo) => {
      const string = this.processo + this.quadra + this.lote;
      // titulo.chave = await uuidv5(string, crypto);
      titulo.chave = await uuidv4();

      // qrcode.toDataURL(titulo.chave, function (err, url) {
      //   titulo.qrcode = url;
      //   console.log(url);
      // });
    });

    this.addHook('beforeUpdate', async (titulo) => {
      if (titulo.processo && titulo.quadra && titulo.lote) {
        const string = this.processo + this.quadra + this.lote;
        titulo.chave = await uuidv5(string, crypto);
      }
      // qrcode.toDataURL(titulo.chave, function (err, url) {
      //   this.qrcode = url;
      //   console.log(url);
      // });
    });

    return this;
  }

  static associar(models) {
    this.belongsTo(models.Proprietario, { foreignKey: 'proprietario_id' });
  }
}

module.exports = Titulo;
