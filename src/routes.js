const express = require('express');
const CategoryController = require('./controllers/CategoryController');

const routes = express.Router();

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);


module.exports = routes;