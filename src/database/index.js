const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const Category = require('../models/Category');
const Movie = require('../models/Movie');

const connection = new Sequelize(dbconfig);

Category.init(connection);
Movie.init(connection);

Category.associate(connection.models);
Movie.associate(connection.models);

module.exports = connection;