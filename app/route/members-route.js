module.exports = (app) => {

    const members = require('../controllers/members-controller.js');

    // Create a new Customer
    app.post('/api/members', members.create);

    // Retrieve all Customer
    app.get('/api/members', members.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/members/:membersId', members.findById);

    // Update a Customer with Id
    app.put('/api/members/:membersId', members.update);

    // Delete a Customer with Id
    app.delete('/api/members/:membersId', members.delete);
}