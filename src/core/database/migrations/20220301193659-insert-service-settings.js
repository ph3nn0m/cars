'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('settings', [
      {
        key: 'service_change_oil_price',
        value: '1000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_change_filter_price',
        value: '100',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_change_belt_price',
        value: '500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_general_check_price',
        value: '1500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_paint_job_price',
        value: '3000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_other_price',
        value: '400',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('settings', null, {});
  }
};
