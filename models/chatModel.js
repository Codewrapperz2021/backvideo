module.exports = (sequelize, DataTypes) => {

    const Chat = sequelize.define("chat", {
        meet_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        message: {
            type: DataTypes.STRING
        },
        file: {
            type: DataTypes.STRING
        },
    
    })

    return Chat

}