module.exports = (app) => {

    const users = require('../controllers/users-controller.js');

    // Create a new Customer
    app.post('/api/users', users.create);

    // Retrieve all Customer
    app.get('/api/users', users.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/users/:usersId', users.findById);

    // Update a Customer with Id
    app.put('/api/users/:usersId', users.update);

    // Delete a Customer with Id
    app.delete('/api/users/:usersId', users.delete);
}