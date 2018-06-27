module.exports = (app) => {

    const community = require('../controllers/community-controller.js');

    // Create a new Customer
    app.post('/community', community.create);

    // Retrieve all Customer
    app.get('/community', community.findAll);

    // Retrieve a single Customer by Id
    app.get('/community/:communitiesId', community.findById);

    // Update a Customer with Id
    app.put('/community/:communitiesId', community.update);

    // Delete a Customer with Id
    app.delete('/community/:communiiesId', community.delete);
}