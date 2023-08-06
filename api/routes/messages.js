const express=require('express')
const router = express.Router()
//Routes for the API endpoints here
const msgcontroller = require('../controllers/Messagescontroller')
const usercontroller= require('../controllers/Userscontroller')


router.post('/login',usercontroller.login)   //verify and set user online
router.post('/logout',usercontroller.logout)  //set user offline
router.post('/adduser',usercontroller.adduser) //signup page
router.post('/users',usercontroller.allusers) //List of users for chatting
router.post('/chat',msgcontroller.msgbyid)    //for existing messages between sender and reciever
router.post('/chatting',msgcontroller.newmsg) //for new message

module.exports = router