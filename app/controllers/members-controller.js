const db = require('../config/config.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Members = db.members;

// Post a users
exports.create = (req, res) => {
    // Save to MySQL database

    //check to make sure none of the field/fields are empty
    if (req.body.fullName.length == 0 || req.body.email.length == 0 ||
        req.body.category.lenght == 0 || req.body.telephone.length == 0 || req.body.nameOfOrganization.length == 0 ||
        req.body.community_id.length == 0) {
        res.json({
            'status': false,
            'message': 'All fields are required'
        });
    } else {
        Users.create({
            fullName: req.body.fullName,
            email: req.body.email,
            category: req.body.category,
            telephone: req.body.telephone,
            nameOfOrganization: req.body.nameOfOrganization,
            community_id: req.body.community_id
        }).then(users => {
            // Send created users to client
            res.json({
                'status': true,
            });
        });
    }
}



// FETCH all Users
exports.findAll = (req, res) => {
    Members.findAll().then(members => {
        // Send all users to Client
        res.send(members);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Members.findById(req.params.usersId).then(members => {
        res.send(members);
    })
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.memberId;
    Members.update({
        fullName: req.body.fullName,
        email: req.body.email,
        category: req.body.category,
        telephone: req.body.telephone,
        nameOfOrganization: req.body.nameOfOrganization,
        community_id: req.body.community_id
    }, { where: { id: req.params.usersId } }).then(() => {
        res.status(200).send("updated successfully a members with id = " + id);
    });
};

// Delete a user by Id
exports.delete = (req, res) => {
    const id = req.params.membersId;
    Members.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a member with id = ' + id);
    })
};