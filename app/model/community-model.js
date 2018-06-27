module.exports = (sequelize, Sequelize) => {
    const Community = sequelize.define('communities', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        organizationName: {
            type: Sequelize.STRING
        },
        organizationURL: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Community;
}