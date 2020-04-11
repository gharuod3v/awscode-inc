const { Router } = require('express');
const UserController = require('./app/controllers/UserControllers');

const routes = Router();

routes.get('/employees', UserController.index);

routes.get('/employees/:id', UserController.show);

routes.post('/employees', UserController.store);

routes.put('/employees/:id', UserController.update);

routes.delete('/employees/:id', UserController.destroy);

module.exports = routes;