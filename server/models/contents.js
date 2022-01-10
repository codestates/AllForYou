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
<<<<<<< HEAD
    type: DataTypes.STRING
=======
    type: DataTypes.STRING,
    view: {
      defaultValue : 0, type: DataTypes.INTEGER
    },
>>>>>>> 82ecc31057155991fbd7961748f9ad236217690e
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};