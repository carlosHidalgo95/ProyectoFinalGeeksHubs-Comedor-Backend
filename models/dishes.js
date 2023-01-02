'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dishes.hasOne(models.types,{ foreignKey: 'id'});
      dishes.belongsToMany(models.bookings,{through:'booking_dishes'});

    }
  }
  dishes.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    dish_name: DataTypes.STRING,
    id_type: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dishes',
  });
  return dishes;
};