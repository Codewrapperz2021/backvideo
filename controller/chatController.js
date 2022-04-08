const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const Chat = db.chats

//main work


// Create Chat
const addChat = async (req, res) => {

    let info = {
        file: req.file.path,
        meet_id: req.body.meet_id,
        user_id: req.body.user_id,
        message: req.body.message

    }

    const chat = await Chat.create(info)
    res.status(200).send(chat)
    console.log(chat)

}

// 2. get all chats

const getAllChats = async (req, res) => {

    let chats = await Chat.findAll({})
    res.status(200).send(chats)

}

// 3. get single chat

const getOneChat = async (req, res) => {

    let id = req.params.id
    let chat = await Chat.findOne({ where: { id: id }})
    res.status(200).send(chat)

}

// 4. update Chat

const updateChat = async (req, res) => {

    let id = req.params.id

    const chat = await Chat.update(req.body, { where: { id: id }})

    res.status(200).send(chat)
   

}

// 5. delete chat by id

const deleteChat = async (req, res) => {

    let id = req.params.id
    
    await Chat.destroy({ where: { id: id }} )

    res.status(200).send('Chat is deleted !')

}



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Files')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '5000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('file')


module.exports = {
    addChat,
    getAllChats,
    getOneChat,
    updateChat,
    deleteChat,
    upload
}


