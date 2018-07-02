module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: {
                name: 'users_email',
                msg: 'A user with this email already exists.',
            },
        },
        password: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.STRING
        },
        community_id: {
            type: Sequelize.INTEGER
        }
    });

    return Users;
}