module.exports = (sequelize, DataTypes) => {

    const UserMeet = sequelize.define("user_meet", {
        user_id: {
            type: DataTypes.STRING
        },
        meeting_id: {
            type: DataTypes.STRING
        },
    
    })

    return UserMeet

}