'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id : 1,
      email : "test1234@naver.com",
      nickname : "test",
      // password : test1234
      password : "$2b$10$9D51j0M5KK9L.B04d4TmvOL0lNc3SzolHmduFKegSomjZ0K5SPmLe",
      admin : false,
      user_picture : null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id : 2,
      email : "mytest@google.com",
      nickname : "mytest",
      // password : 1q2w3e4r
      password : "$2b$10$hQ9wVHobKn.xCUSxwGiETO1rtLyo5R6IFnGdGaASmzQ.3Nz6f1FR.",
      admin : false,
      user_picture : null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id : 3,
      email : "test333@google.com",
      nickname : "mytest",
      // password : 1q2w3e4r
      password : "$2b$10$hQ9wVHobKn.xCUSxwGiETO1rtLyo5R6IFnGdGaASmzQ.3Nz6f1FS.",
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
