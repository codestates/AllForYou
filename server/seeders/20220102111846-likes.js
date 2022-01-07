'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('likes', [{
      id: 1,
      user_id : 1,
      review_id: null,
      content_id: 301,
      createdAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('likes', null, {});
  }
};
