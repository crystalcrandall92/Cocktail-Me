module.exports = (sequelize, DataTypes) => {
    const CreatedDrink = sequelize.define("CreatedDrink", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        instructions: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER
        }
    })
    return CreatedDrink;
}
