const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      classification: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}

module.exports = Movie;