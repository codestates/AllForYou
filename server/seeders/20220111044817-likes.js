'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('likes', [
      {
        id: 1,
        user_id : 1,
        review_id: null,
        content_id: 128,
        createdAt: new Date()
      },
      {
        id: 2,
        user_id : 1,
        review_id: null,
        content_id: 178,
        createdAt: new Date()
      },
      {
        id: 3,
        user_id : 1,
        review_id: null,
        content_id: 229,
        createdAt: new Date()
      },
      {
        id: 4,
        user_id : 2,
        review_id: null,
        content_id: 229,
        createdAt: new Date()
      },
      {
        id: 5,
        user_id : 1,
        review_id: 2,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 6,
        user_id : 3,
        review_id: null,
        content_id: 47,
        createdAt: new Date()
      },
      {
        id: 7,
        user_id : 3,
        review_id: null,
        content_id: 49,
        createdAt: new Date()
      },
      {
        id: 8,
        user_id : 3,
        review_id: null,
        content_id: 52,
        createdAt: new Date()
      },
      {
        id: 9,
        user_id : 3,
        review_id: null,
        content_id: 55,
        createdAt: new Date()
      },
      {
        id: 10,
        user_id : 2,
        review_id: null,
        content_id: 52,
        createdAt: new Date()
      },
      {
        id: 11,
        user_id : 2,
        review_id: null,
        content_id: 55,
        createdAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('likes', null, {});
  }
};
