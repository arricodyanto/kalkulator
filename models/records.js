'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  records.init({
    bilangan1: DataTypes.INTEGER,
    bilangan2: DataTypes.INTEGER,
    operator: DataTypes.STRING,
    hasil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'records',
  });
  return records;
};