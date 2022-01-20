'use strict';
// onDelete: 'cascade' : 부모가 삭제되면 자동으로 참조도 삭제
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // user_id: { 
      //   allowNull: false, 
      //   type: Sequelize.INTEGER, 
      //   onDelete: "CASCADE", 
      //   references: { 
      //     model: "users", 
      //     key: "id"
      //   }, 
      // },
      // review_id: { 
      //   allowNull: false, 
      //   type: Sequelize.INTEGER, 
      //   onDelete: "CASCADE", 
      //   references: { 
      //     model: "reviews", 
      //     key: "id"
      //   }, 
      // },
      // content_id: { 
      //   allowNull: false, 
      //   type: Sequelize.INTEGER, 
      //   onDelete: "CASCADE", 
      //   references: { 
      //     model: "contents", 
      //     key: "id"
      //   }, 
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('likes');
  }
};