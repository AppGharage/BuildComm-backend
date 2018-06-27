module.exports = (app) => {

    const users = require('../controllers/users-controller.js');

    // Create a new Customer
    app.post('/users', users.create);

    // Retrieve all Customer
    app.get('/users', users.findAll);

    // Retrieve a single Customer by Id
    app.get('/users/:usersId', users.findById);

    // Update a Customer with Id
    app.put('/users/:usersId', users.update);

    // Delete a Customer with Id
    app.delete('/users/:usersId', users.delete);
}