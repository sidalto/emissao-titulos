module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('proprietarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      nacionalidade: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      profissao: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      estado_civil: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      conjuge_nome: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      conjuge_nacionalidade: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      conjuge_rg: {
        type: Sequelize.STRING(20),
        allowNull: true,
        unique: true,
      },
      conjuge_cpf: {
        type: Sequelize.STRING(14),
        allowNull: true,
        unique: true,
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
