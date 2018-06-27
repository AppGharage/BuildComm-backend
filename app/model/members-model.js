module.exports = (sequelize, Sequelize) => {
    const Members = sequelize.define('members', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.STRING
        },
        nameOfOrganization: {
            type: Sequelize.STRING
        },
        community_id: {
            type: Sequelize.INTEGER
        }
    });

    return Members;
}