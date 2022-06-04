const express = require('express');
const CategoryController = require('./controllers/CategoryController');
const MovieController = require('./controllers/MovieController');

const routes = express.Router();

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.put('/categories/:id', CategoryController.update);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/movies', MovieController.index);
routes.get('/movies/:id', MovieController.show);
routes.put('/movies/:id', MovieController.update);
routes.post('/movies', MovieController.store);
routes.delete('/movies/:id', MovieController.delete);


module.exports = routes;