module.exports = function(sequelize, DataTypes) {
	var Question = sequelize.define("Question", {
		//survey questions goes here
		text: DataTypes.STRING
	});
	return Question
};