module.exports = (sequelize, Sequelize) => {
    const Community = sequelize.define('communities', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        community_name: {
            type: Sequelize.STRING
        },
        community_url: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Community;
}