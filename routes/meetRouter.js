//import controllers 
const meetController = require('../controller/meetController')


// router
const meetrouter = require('express').Router()


// Meet routers
meetrouter.post('/addMeet', meetController.addMeet)

meetrouter.get('/allMeets',meetController.getAllMeets)

meetrouter.get('/:id',meetController.getOneMeet)

meetrouter.put('/:id',meetController.updateMeet)

meetrouter.delete('/:id',meetController.deleteMeet)





module.exports = meetrouter;