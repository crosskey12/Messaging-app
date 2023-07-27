const express=require('express')
const router = express.Router()
//Routes for the API endpoints here
const msgcontroller = require('../controllers/Messagescontroller')
const usercontroller= require('../controllers/Userscontroller')
const authenticate=require('../middleware/authenticate')


router.post('/login',usercontroller.login)
router.post('/logout',usercontroller.logout)
router.post('/adduser',usercontroller.adduser)
router.post('/users',usercontroller.allusers)
router.post('/chat',msgcontroller.msgbyid)
router.post('/chatting',msgcontroller.newmsg)

module.exports = router