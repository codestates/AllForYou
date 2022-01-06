'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id : 1,
      email : "test@naver.com",
      nickname : "테스트",
      password : "12345678",
      admin : false,
      user_picture : null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id : 2,
      email : "allforyou@google.com",
      nickname : "올포유",
      password : "87654321",
      admin : false,
      user_picture : null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
