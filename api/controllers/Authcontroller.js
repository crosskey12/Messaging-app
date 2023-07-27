const user = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../models/User')

const register = (req,res,next)=>{
    bcrypt.hash(req.body.password,10,function (err,hashedpassword){
        if(err)
        {
            res.json({
                error:err
            })
        }
        let user = new Users({
            name:req.body.name,
            email: req.body.email,
            password:hashedpassword,
        })
        user.save()
        .then(user => res.json({ message: 'User Added Successfully' }))
        .catch(error =>{res.json({message:'An error Occured'})})
    })
}

const login5 = (req,res,next)=>{
    var email = req.body.email
    var password = req.body.password
    Messages.findOne({$or:[{email:email}]})
    .then(user => { if(user)
    {
        bcrypt.compare(password,user.password,function(err,result) {
            if(err)
            {
                res.json({
                    error:err
                })
            }
            if(result)
            {
                const token=jwt.sign({'email':user.email},'SecretValue',{expiresIn:'1w'})
                user.online=true
                res.json({
                    message:"Login Successfull",
                    token
                })
            }
            else{
                res.json({
                    message:"Password Does not Match"
                })
            }
        })
    }})
    .catch(error =>{res.json({message:'No user found'})})
}

module.exports={
    register,login5
}

