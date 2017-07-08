module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username:DataTypes.STRING,
    password:DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(models) {       
          user.hasMany(models.answer,{             
            onDelete: "cascade"
                     })
  }
    }
    });

  return User;
};