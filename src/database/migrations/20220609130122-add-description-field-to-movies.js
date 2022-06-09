'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'movies',
      'description',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'movies',
      'description',
    );
  }
};
