module.exports = (app) => {

    const members = require('../controllers/members-controller.js');

    // Create a new Customer
    app.post('/members', members.create);

    // Retrieve all Customer
    app.get('/members', members.findAll);

    // Retrieve a single Customer by Id
    app.get('/members/:membersId', members.findById);

    // Update a Customer with Id
    app.put('/members/:membersId', members.update);

    // Delete a Customer with Id
    app.delete('/members/:membersId', members.delete);
}