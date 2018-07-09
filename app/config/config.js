require('dotenv').config()

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../model/users-model.js')(sequelize, Sequelize);
db.members = require('../model/members-model.js')(sequelize, Sequelize);
db.communities = require('../model/community-model.js')(sequelize, Sequelize);


module.exports = db;