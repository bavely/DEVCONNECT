module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        photoUrl: DataTypes.STRING,
        frontbackend: DataTypes.STRING,
        mentorpro: DataTypes.STRING,
        hash: DataTypes.TEXT,
        salt: DataTypes.TEXT
    });

    return User;
};