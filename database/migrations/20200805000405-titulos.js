module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('titulos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    processo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logradouro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numero: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    complemento: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quadra: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lote: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    data_expedicao: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    prefeito: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    secretario: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    chave: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    qrcode: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    proprietario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'proprietarios',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('titulos'),
};