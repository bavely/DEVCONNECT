module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username:DataTypes.STRING,
    password:DataTypes.STRING,
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
		phone:DataTypes.INTEGER,
    state:DataTypes.STRING,
    city:DataTypes.STRING,
    frontbackend:DataTypes.STRING,
    mentorpro:DataTypes.STRING
  });

  return User;
};