//import controllers 
const chatController = require('../controller/chatController')


// router
const chatrouter = require('express').Router()


// Chat routers
chatrouter.post('/addChat', chatController.upload , chatController.addChat)

chatrouter.get('/allChats',chatController.getAllChats)

chatrouter.get('/:id',chatController.getOneChat)

chatrouter.put('/:id',chatController.updateChat)

chatrouter.delete('/:id',chatController.deleteChat)





module.exports = chatrouter;