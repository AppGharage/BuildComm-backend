const db = require('../config/config.js');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Community = db.communities;

// Post 
exports.create = (req, res) => {
    // Save to MySQL database
    console.log(req.body);

    //check to make sure none of the field/fields are empty
    if (req.body.community_name.length == 0 || req.body.community_url.length == 0 ||
        req.body.description.length == 0) {
        res.json({
            'status': false,
            'message': 'All fields are required'
        });
    } else {
        Community.create({
            community_name: req.body.community_name,
            community_url: req.body.community_url,
            description: req.body.description
        }).then(communities => {
            // Send created users to client
            res.json({
                'status': true,
                'id': communities.id
            });
        });
    }

};


// FETCH all Users
exports.findAll = (req, res) => {
    Community.findAll().then(communities => {
        // Send all users to Client
        res.send(communities);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
    Community.findById(req.params.communitiesId).then(communities => {
        res.send(communities);
    })
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.communitiesId;
    Community.update({
        community_name: req.body.community_name,
        community_url: req.body.community_url,
        description: req.body.description,
    }, { where: { id: req.params.communitiesId } }).then(() => {
        res.status(200).send("updated successfully a community with id = " + id);
    });
};

// Delete a user by Id
exports.delete = (req, res) => {
    const id = req.params.communitiesId;
    Community.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a community with id = ' + id);
    })
};