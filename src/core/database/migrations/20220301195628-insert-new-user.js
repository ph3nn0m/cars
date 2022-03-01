'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('users', [
      {
        name: 'Demo',
        email: 'demo@pickit.com',
        password: '$2b$10$f0ZYy04.4gFuw08WyOKATe22R0u8o7zMW.Fxp1KTXWqHhcXa7V8FG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
