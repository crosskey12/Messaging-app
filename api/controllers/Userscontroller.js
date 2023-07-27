const Users=require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const allusers=(req,res,next) =>{
    const name1=req.body.name
    Users.find({name:{$nin:[name1]}})
    .then(users => res.json({ users }))
    .catch(error =>{res.json({message:'An error Occured'})})
}

const login = (req,res,next)=>{
    var emailid1 = req.body.emailid
    var password = req.body.password
    Users.findOne({emailid:emailid1})
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
                Users.findOneAndUpdate({emailid:emailid1},{$set:{online:true}},{new:true})
                .then((user)=>{user.save()})
                res.json({
                    message:"Login Successfull",
                    user
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

const logout=(req,res,next)=>{
    const emailid1=req.body.email
    Users.findOneAndUpdate({emailid:emailid1},{$set:{online:false}},{new:true})
    .then((user)=>{user.save()})
}


const adduser=(req,res,next) =>{
    bcrypt.hash(req.body.password,10,function (err,hashedpassword){
        if(err)
        {
            res.json({
                error:err
            })
        }
        let user = new Users({
            name:req.body.name,
            emailid: req.body.emailid,
            password:hashedpassword
        })
        user.save()
        .then(user => res.json({ message: 'User Added Successfully' }))
        .catch(error =>{res.json({message:'An error Occured'})})
    })
}

module.exports={allusers,adduser,login,logout}