'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comments.belongsTo(models.reviews, { foreignKey: { name: "user_id", allowNull: false }, onDelete: "CASCADE" });
      comments.belongsTo(models.contents, { foreignKey: { name: "review_id", allowNull: false }, onDelete: "CASCADE" });
    }
  };
  review_content.init({
    review_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review_content',
  });
  return review_content;
};