'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('settings', [
      {
        key: 'service_price_change_oil',
        value: '1000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_price_change_filter',
        value: '100',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_price_change_belt',
        value: '500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_price_general_check',
        value: '1500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_price_paint_job',
        value: '3000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'service_price_other',
        value: '400',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'policy_budget_disallow',
        value: JSON.stringify({ car: { color: [ { value: 'grey', job: 'paint_job' } ] } }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('settings', null, {});
  }
};
