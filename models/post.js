module.exports = function (sequelize, DataTypes) {
    var Posts = sequelize.define('Posts', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING
    });

    return Posts;
};