'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews_contents', {
      review_id: { 
        allowNull: false, 
        type: Sequelize.INTEGER, 
        onDelete: "CASCADE", 
        references: { 
          model: "reviews", 
          key: "id"
        }, 
      },
      content_id: { 
        allowNull: false, 
        type: Sequelize.INTEGER, 
        onDelete: "CASCADE", 
        references: { 
          model: "contents", 
          key: "id"
        }, 
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews_contents');
  }
};