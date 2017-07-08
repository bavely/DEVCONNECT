module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    profession: DataTypes.STRING,
    yeasrsExperience: DataTypes.INTEGER,
    skillLevel: DataTypes.INTEGER,
    interest: DataTypes.STRING
  });
  return User;
};