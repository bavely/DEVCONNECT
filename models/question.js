module.exports = function(sequelize, DataTypes) {
	var Question = sequelize.define("Question", {

		text:DataTypes.STRING
	},
	{
	    classMethods: {
      associate: function(models) {       
          Question.hasMany(models.answer,{             
            onDelete: "cascade"
                     })
  }
		}
    });
	return Question
};