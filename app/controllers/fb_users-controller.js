const db = require('../config/config.js');
const token = require('../route/fb_users-route')
const axios = require('axios');

const Fb_users = db.fb_users;

//post 
exports.create = (req, res) => {
    console.log(req.body);
    //check to make sure none of the field/fields are empty
    if (req.body.oauth_uid.length == 0 || req.body.oauth_provider.length == 0 ||
        req.body.first_name.length == 0 || req.body.last_name.length == 0 ||
        req.body.email.length == 0 || req.body.access_token.length == 0) {
        res.json({
            'status': false,
            'message': 'All fields are required'
        });
    } else {
        axios.post('/user', {
                firstName: 'Fred',
                lastName: 'Flintstone'
            })
            .then(function(response) {
                console.log(response);

                /*
                Fb_users.create({
                    oauth_uid: req.body.oauth_uid,
                    oauth_provider: req.body.oauth_provider,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    access_token: req.body.access_token
                }).then(fb_users => {
                    // Send created fb users to client
                    res.json({
                        'status': true,
                    });

                });*/
            })

        .catch(function(error) {
            console.log(error);
        });

    }
}

// FETCH all Users
exports.findAll = (req, res) => {
    Fb_users.findAll().then(fb_users => {
        // Send all users to Client
        res.send(fb_users);
    });
};

//Find a Customer by Id
exports.findById = (req, res) => {
    Fb_users.findById(req.params.fb_usersID).then(fb_users => {
        res.send(fb_users);
    })
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.fb_usersId;
    Fb_users.update({
        oauth_uid: req.body.oauth_uid,
        oauth_provider: req.body.oauth_provider,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        access_token: req.body.access_token
    }, { where: { id: req.params.fb_usersId } }).then(() => {
        res.status(200).send("updated successfully a fb_users with id = " + id);
    });
};

// Delete a user by Id
exports.delete = (req, res) => {
    const id = req.params.fb_usersId;
    Fb_users.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a fb user with id = ' + id);
    })
};