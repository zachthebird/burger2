module.exports = function(sequelize, dataTypes) {
	var Eater = sequelize.define('Eater', {
		eater_name: dataTypes.STRING,
	},
		{
			classMethods: {
				associate: function(models) {
					Eater.hasMany(models.Burger);
				}
			}
		}
	);
	return Eater;
}