const jwt = require('jsonwebtoken')
const authenticate=(req,res,next)=>{
    try{
        const token = req.header.authorization.split(' ')[-1]
        const decode= jwt.verify(token,'SecretValue')
        req.user=decode
        next()
    }
    catch(err){
        res.json({
            message:"authentication failed"
        })
    }
}

module.exports = authenticate