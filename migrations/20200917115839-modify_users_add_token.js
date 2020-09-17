module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
          'Users', // table name
          'token', // new field name
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
      ),

    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Users', 'token'),

    ]);
  },
};