'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id : 1,
        email : "test1234@naver.com",
        nickname : "스마일",
        // password : test1234
        password : "$2b$10$Nvx6XKJlENkGQp4cCZIM5O5uxXH9qj5qOTXRcUYZqXjhKi3GluGmy",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id : 2,
        email : "mytest@google.com",
        nickname : "물방울",
        // password : 1q2w3e4r
        password : "$2b$10$1AF/AuobtlW66iVcMLaZOeOR2dnuHBfD/9XCFNzEtEeVR.GCMupaa",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 3,
        email : "allforyou@hanmail.net",
        nickname : "올포유",
        // password : allfor1234
        password : "$2b$10$5VNvM9TxRqyzsEI1uhBIF.QjjAcudJLwy2FtIikQzCElJlNeY4Vnu",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 4,
        email : "dummy@naver.com",
        nickname : "건빵",
        // password : dummy1234
        password : "$2b$10$6k6fpa3Vp4X4n1yj6sDUL.pTJKnDCk7Y/eZOLhGXrr2w.TV4pFuj.",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 5,
        email : "candytest@google.com",
        nickname : "캔디",
        // password : candy1234
        password : "$2b$10$vvsPcwael/9DKHFbo7kwf.NjvwmIDIjU/b91UwxaQa0n2wlyNcDF6",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 6,
        email : "mycat@naver.com",
        nickname : "우리집고양이",
        // password : mycat1234
        password : "$2b$10$o1gJHH/RiunqEDFGBryz..ZO71UwFN4/XsAzWZl3B/oIMWRLPLGGO",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id : 7,
        email : "rhythm@naver.com",
        nickname : "리듬세상",
        // password : rhythm1234
        password : "$2b$10$D3UnchacMrzaRIoFeMIF9.6vabxIYBFf8touu2awRLMWkkOSOyR7O",
        admin : false,
        user_picture : null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
