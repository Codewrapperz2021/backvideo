//import controllers 
const usermeetController = require('../controller/usermeetController')


// router
const usermeetrouter = require('express').Router()


// Meet routers
usermeetrouter.post('/addusermeet', usermeetController.addUserMeet)
usermeetrouter.get('/usermeetlist', usermeetController.getAllUserMeet)







module.exports = usermeetrouter;