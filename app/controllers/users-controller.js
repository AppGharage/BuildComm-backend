'use strict';

const db = require('../config/config.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const Users = db.users;

// Post a users
exports.create = (req, res) => {
        // Save to MySQL database
        console.log(req.body);

        //check to make sure none of the field/fields are empty
        if (req.body.fullName.length == 0 || req.body.email.length == 0 ||
            req.body.password.length == 0 || req.body.telephone.length == 0 ||
            req.body.community_id.length == 0) {
            res.json({
                'status': false,
                'message': 'All fields are required'
            });
        } else {
            Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then((users) => {

                if (users) {
                    res.json({
                        'status': false,
                        'message': 'this email already exists'
                    });

                } else {
                    bcrypt.hash('req.body.password', 10, function(err, hash) {
                        Users.create({
                            fullName: req.body.fullName,
                            email: req.body.email,
                            password: hash,
                            telephone: req.body.telephone,
                            community_id: req.body.community_id
                        }).then(users => {
                            // Send created users to client
                            res.json({
                                'status': true,
                                'id': users.id
                            });
                        });
                    });
                }

            });
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
    Users.update({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        telephone: req.body.telephone,
        community_id: req.body.community_id
    }, { where: { id: req.params.usersId } }).then(() => {
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