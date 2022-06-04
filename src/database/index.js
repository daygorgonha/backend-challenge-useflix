const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/Category');
const Movie = require('../models/Movie');

const connection = new Sequelize(dbconfig);

User.init(connection);
Movie.init(connection);

Movie.associate(connection.models);

module.exports = connection;