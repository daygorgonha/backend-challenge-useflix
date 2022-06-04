const express = require('express');
const CategoryController = require('./controllers/CategoryController');

const routes = express.Router();

routes.post('/categories', CategoryController.store);

module.exports = routes;