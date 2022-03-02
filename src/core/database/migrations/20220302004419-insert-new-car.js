'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('cars', [
      {
        brand: "Chevrolet",
        model: "GT 86",
        color: "grey",
        production_year: "2011",
        license_plate: "AAA001",
        owner_id: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: "Chevrolet",
        model: "Aveo",
        color: "black",
        production_year: "2016",
        license_plate: "AAA002",
        owner_id: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('cars', null, {});
  }
};
