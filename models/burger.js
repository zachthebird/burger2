module.exports = function(sequelize, dataTypes) {
	var Burger = sequelize.define('Burger', {
		burger_name: dataTypes.STRING,
		devoured: {
			type: dataTypes.BOOLEAN,
			defaultValue: false
		}
	},
		{
			classMethods: {
				associate: function(models) {
					Burger.belongsTo(models.Eater, {
						foreignKey: {
							allowNull: true
						}
					});
				}
			}
		}
	);
	return Burger;
}