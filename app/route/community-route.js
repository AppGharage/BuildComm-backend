module.exports = (app) => {

    const community = require('../controllers/community-controller.js');

    // Create a new Customer
    app.post('/api/community', community.create);

    // Retrieve all Customer
    app.get('/api/community', community.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/community/:communitiesId', community.findById);

    // Update a Customer with Id
    app.put('/api/community/:communitiesId', community.update);

    // Delete a Customer with Id
    app.delete('/api/community/:communiiesId', community.delete);
}