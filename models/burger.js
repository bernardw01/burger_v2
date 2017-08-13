
module.exports = function(sequelize, DataTypes) {
    var BurgerV2 = sequelize.define("BurgerV2",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            burger_name: DataTypes.STRING,
            devoured: DataTypes.INTEGER
        });
    return BurgerV2;
}

