module.exports = function(sequelize, DataTypes) {
	var Answer = sequelize.define("Answer", {
        firstName:DataTypes.STRING,
        lastName:DataTypes.STRING,
		phone:DataTypes.int,
        state:DataTypes.STRING,
        city:DataTypes.STRING,
        frontbackend:DataTypes.STRING,
        mentorpro:DataTypes.STRING
	},
	{
	    classMethods: {
      associate: function(models) {       
          answer.hasMany(models.user,{             
            onDelete: "cascade"
                     })
                  answer.belongsTo(models.question,{             
            onDelete: "cascade"
                     })
  }
    }
    });
	return Answer
};