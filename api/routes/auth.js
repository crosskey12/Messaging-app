const express=require('express')
const router1 = express.Router()
//Routes for the API endpoints here
const Authcontroller = require('../controllers/Authcontroller')

//router1.post('/signup',Authcontroller.register)
//router1.post('/login',Authcontroller.login)

module.exports=router1