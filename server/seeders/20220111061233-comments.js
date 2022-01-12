'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        id: 1,
        review_id: 2,
        user_id: 1,
        comment: "저도 추천해주신 컨텐츠 봤었습니다. 좋은 작품이에요.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        review_id: 3,
        user_id: 2,
        comment: "저도 한번 들어봐야겠네요.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        review_id: 3,
        user_id: 3,
        comment: "좋은 노래네요.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        review_id: 1,
        user_id: 4,
        comment: "좋은 자극이 되겠네요. 추천해주신거 보고 저도 마음가짐을 바꿔봐야겠습니다.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        review_id: 2,
        user_id: 5,
        comment: "응원하겠습니다!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        review_id: 2,
        user_id: 6,
        comment: "꼭 이루시길 바래요~",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
