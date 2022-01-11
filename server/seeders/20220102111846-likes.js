'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('likes', [{
      id: 1,
      user_id : 1,
      review_id: null,
      content_id: 301,
      createdAt: new Date()
    },{
      id: 2,
      user_id : 1,
      review_id: null,
      content_id: 321,
      createdAt: new Date()
    },{
      id: 3,
      user_id : 2,
      review_id: null,
      content_id: 301,
      createdAt: new Date()
    },{
      id: 4,
      user_id : 3,
      review_id: null,
      content_id: 311,
      createdAt: new Date()
    },{
      id: 5,
      user_id : 1,
      review_id: null,
      content_id: 311,
      createdAt: new Date()
    },{
      id: 6,
      user_id : 2,
      review_id: null,
      content_id: 311,
      createdAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('likes', null, {});
  }
};
