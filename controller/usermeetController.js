const db = require('../models')



// create main Model
const UserMeet = db.user_meets

//main work


// Create UserMeet
const addUserMeet =async (req, res) => {

for(var i=0;i<req.body.user_id.length;i++){
 const usermeet = await UserMeet.create({user_id:req.body.user_id[i],meeting_id:req.body.meeting_id})
 if(i==req.body.user_id.length-1){
    res.status(200).send(usermeet)
    console.log(usermeet)
 }
}

}


//2. get all usermeet

const getAllUserMeet = async (req, res) => {

    let usermeet = await UserMeet.findAll({})
    res.status(200).send(usermeet)

}

// 3. get single user

// const getOneUser = async (req, res) => {

//     let id = req.params.id
//     let user = await User.findOne({ where: { id: id }})
//     res.status(200).send(user)

// }

// 4. update User

// const updateUser = async (req, res) => {

//     let id = req.params.id

//     const user = await User.update(req.body, { where: { id: id }})

//     res.status(200).send(user)
   

// }

// 5. delete user by id

// const deleteUser = async (req, res) => {

//     let id = req.params.id
    
//     await User.destroy({ where: { id: id }} )

//     res.status(200).send('User is deleted !')

// }




module.exports = {
    addUserMeet,
    getAllUserMeet,
    // getOneUser,
    // updateUser,
    // deleteUser,
}


