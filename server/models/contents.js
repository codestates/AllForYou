'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    static associate(models) {
      contents.hasMany(models.likes, { foreignKey: "content_id"});
      contents.hasMany(models.review_content, { foreignKey: "content_id"});
    }
  };
  contents.init({
    content_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};