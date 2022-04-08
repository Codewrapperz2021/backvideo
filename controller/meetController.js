const db = require('../models')


// create main Model
const Meet = db.meets

//main work


// Create Meet
const addMeet = async (req, res) => {

    let info = {
        meet_name: req.body.meet_name,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        email: req.body.email,
        desc: req.body.desc,
        meet_link: req.body.meet_link,
        room_id:req.body.room_id,
        // end_time: req.body.end_time,
        // organizer_id: req.body.organizer_id,
        // meeting_url: req.body.meeting_url,
        // status: req.body.status,




    }

    const meet = await Meet.create(info)
    res.status(200).send(meet)
    console.log(meet)

}

// 2. get all Meets

const getAllMeets = async (req, res) => {

    let meets = await Meet.findAll({})
    res.status(200).send(meets)

}

// 3. get single meet

const getOneMeet = async (req, res) => {

    let id = req.params.id
    let meet = await Meet.findOne({ where: { id: id }})
    res.status(200).send(meet)

}

// 4. update Meet

const updateMeet = async (req, res) => {

    let id = req.params.id

    const meet = await Meet.update(req.body, { where: { id: id }})

    res.status(200).send(meet)
   

}

// 5. delete meet by id

const deleteMeet = async (req, res) => {

    let id = req.params.id
    
    await Meet.destroy({ where: { id: id }} )

    res.status(200).send('Meeting is deleted !')

}



        

module.exports = {
    addMeet,
    getAllMeets,
    getOneMeet,
    updateMeet,
    deleteMeet,
}


