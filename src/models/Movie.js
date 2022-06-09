const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      classification: DataTypes.INTEGER,
      description: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
  }
}

module.exports = Movie;