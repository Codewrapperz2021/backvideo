const dbConfig = require('../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.chats = require('./chatModel.js')(sequelize, DataTypes)
db.meets = require('./meetModel.js')(sequelize, DataTypes)
db.users= require('./userModel.js')(sequelize, DataTypes)
db.user_meets = require('./user_meetModel.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false }) //if we give force: true all the database will be cleared and made again,in case of false only the new tables will be added//
.then(() => {
    console.log('yes re-sync done!')

})




module.exports = db