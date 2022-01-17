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
        review_id: null,
        content_id: 2,
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
        content_id: 2,
        createdAt: new Date()
      },
      {
        id: 12,
        user_id : 2,
        review_id: null,
        content_id: 8,
        createdAt: new Date()
      },
      {
        id: 13,
        user_id : 2,
        review_id: null,
        content_id: 15,
        createdAt: new Date()
      },
      {
        id: 14,
        user_id : 2,
        review_id: null,
        content_id: 115,
        createdAt: new Date()
      },
      {
        id: 15,
        user_id : 3,
        review_id: null,
        content_id: 115,
        createdAt: new Date()
      },
      {
        id: 16,
        user_id : 3,
        review_id: null,
        content_id: 115,
        createdAt: new Date()
      },
      {
        id: 17,
        user_id : 3,
        review_id: null,
        content_id: 229,
        createdAt: new Date()
      },
      {
        id: 18,
        user_id : 3,
        review_id: null,
        content_id: 128,
        createdAt: new Date()
      },
      {
        id: 19,
        user_id : 4,
        review_id: null,
        content_id: 310,
        createdAt: new Date()
      },
      {
        id: 20,
        user_id : 4,
        review_id: null,
        content_id: 321,
        createdAt: new Date()
      },
      {
        id: 21,
        user_id : 4,
        review_id: null,
        content_id: 330,
        createdAt: new Date()
      },
      {
        id: 22,
        user_id : 4,
        review_id: null,
        content_id: 360,
        createdAt: new Date()
      },
      {
        id: 23,
        user_id : 5,
        review_id: null,
        content_id: 360,
        createdAt: new Date()
      },
      {
        id: 24,
        user_id : 5,
        review_id: null,
        content_id: 52,
        createdAt: new Date()
      },
      {
        id: 25,
        user_id : 5,
        review_id: null,
        content_id: 8,
        createdAt: new Date()
      },
      {
        id: 26,
        user_id : 1,
        review_id: 2,
        content_id: null,
        createdAt: new Date()
      },
      {
        id: 27,
        user_id : 1,
        review_id: 3,
        content_id: null,
        createdAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('likes', null, {});
  }
};
