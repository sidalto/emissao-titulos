module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('proprietarios', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    rg: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    nacionalidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profissao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estado_civil: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    conjuge: {
      type: Sequelize.STRING,
      allowNull: true,
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

  down: (queryInterface) => queryInterface.dropTable('proprietarios'),
};
