module.exports = (app) => {
    const fb_users = require('../controllers/fb_users-controller');

    //create new fb user
    app.post('/api/token', fb_users.create);
    //retrieve all fb userndn
    app.get('/api/fbusers', fb_users.findAll);
    // retrieve single fb user by id
    app.get('/api/fbusers/:fb_usersId', fb_users.findById);
    // Update community with Id
    app.put('/api/fbusers/:fb_usersId', fb_users.update);
    // Delete community with Id
    app.delete('/api/fbusers/:fb_usersId', fb_users.delete);

}