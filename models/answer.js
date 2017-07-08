module.exports = function(sequelize, DataTypes) {
	var Answer = sequelize.define("Answer", {
		text: DataTypes.STRING
	});
	return Answer
};