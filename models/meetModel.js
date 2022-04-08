module.exports = (sequelize, DataTypes) => {

    const Meet = sequelize.define("meet", {
        meet_name: {
            type: DataTypes.STRING
        },
        start_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        // email: {
        //     type: DataTypes.STRING
        // },
        desc: {
            type: DataTypes.STRING
        },

        meet_link: {
            type: DataTypes.STRING
        },
        room_id: {
            type: DataTypes.INTEGER
        },
        // end_time: {
        //     type: DataTypes.TIME
        // },
        // organizer_id: {
        //     type: DataTypes.INTEGER
        // },
        // meeting_url: {
        //     type: DataTypes.STRING
        // },
        // status: {
        //     type: DataTypes.INTEGER
        // },
        
    
    })

    return Meet

}