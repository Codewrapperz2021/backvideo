module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        user_name: {
            type: DataTypes.STRING
        },
        user_email: {
            type: DataTypes.STRING
        },
    
    })

    return User

}