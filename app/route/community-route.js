module.exports = (app) => {

    const community = require('../controllers/community-controller.js');

    // Create a new community
    app.post('/api/community', community.create);

    // Retrieve all community
    app.get('/api/community', community.findAll);

    // Retrieve a single community by Id
    app.get('/api/community/:communitiesId', community.findById);

    // Update community with Id
    app.put('/api/community/:communitiesId', community.update);

    // Delete community with Id
    app.delete('/api/community/:communiiesId', community.delete);
}