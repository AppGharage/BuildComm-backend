const db = require('../config/config.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Users = db.users;

// Post a users
exports.create = (req, res) => {
    // Save to MySQL database
    //console.log(req.body);

    //check to make sure none of the field/fields are empty
    if (req.body.fullName.length == 0 || req.body.email.length == 0 ||
        req.body.password.lenght == 0) {
        res.json({
            'status': false,
            'message': 'All fields are required'
        });
    } else {

        bcrypt.hash('req.body.password', 10, function(err, hash) {
            Users.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hash
            }).then(users => {
                // Send created users to client
                res.json({
                    'status': true,
                });
            });
        })
    }
}


// FETCH all Users
exports.findAll = (req, res) => {
    Users.findAll().then(users => {
        // Send all users to Client
        res.send(users);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Users.findById(req.params.usersId).then(users => {
        res.send(users);
    })
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.userId;
    Users.update({ fullName: req.body.fullName, email: req.body.email, password: req.body.password }, { where: { id: req.params.usersId } }).then(() => {
        res.status(200).send("updated successfully a users with id = " + id);
    });
};

// Delete a user by Id
exports.delete = (req, res) => {
    const id = req.params.usersId;
    Users.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a user with id = ' + id);
    })
};