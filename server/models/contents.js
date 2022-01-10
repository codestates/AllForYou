'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    static associate(models) {
      contents.hasMany(models.likes, { foreignKey: "content_id"});
      contents.hasMany(models.reviews_contents, { foreignKey: "content_id"});
    }
  };
  contents.init({
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    runtime: DataTypes.INTEGER,
    summary: DataTypes.TEXT,
    genres: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    detail: DataTypes.STRING,
    link: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};