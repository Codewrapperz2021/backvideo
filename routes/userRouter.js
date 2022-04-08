//import controllers 
const userController = require('../controller/userController')


// router
const userrouter = require('express').Router()


// Meet routers
userrouter.post('/addUser', userController.addUser)

userrouter.get('/allUsers',userController.getAllUsers)

userrouter.get('/:id',userController.getOneUser)

userrouter.put('/:id',userController.updateUser)

userrouter.delete('/:id',userController.deleteUser)





module.exports = userrouter;