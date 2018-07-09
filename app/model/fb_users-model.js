module.exports = (sequelize, Sequelize) => {
    const Fb_users = sequelize.define('fb_users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        oauth_uid: {
            type: Sequelize.STRING,
        },
        oauth_provider: {
            type: Sequelize.ENUM,
        },
        first_name: {
            type: Sequelize.STRING,
        },
        last_name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: {
                name: 'users_email',
                msg: 'A user with this email already exists.',
            }
        },
        access_token: {
            type: Sequelize.STRING,
        }
    });
    return Fb_users;
}