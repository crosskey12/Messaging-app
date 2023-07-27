const Messages=require('../models/Messages')

const msgbyid=(req,res,next) =>{
    const id1 = req.body.senderid
    const id2 = req.body.recieverid
    Messages.find({$or:[{$and:[{senderid:id1},{recieverid:id2}]},{$and:[{senderid:id2},{recieverid:id1}]}]})
    .then(messages => res.json({ messages }))
    .catch(error =>{res.json({message:'An error Occured'})})
}

const newmsg=(req,res,next)=>{
    let msg = new Messages({
        senderid:req.body.senderid,
        recieverid:req.body.recieverid,
        message:req.body.message
    })
    msg.save()
    .then(messages => res.json({ message: 'message sent' }))
    .catch(error =>{res.json({message:'An error Occured'})})
    
}

module.exports={msgbyid,newmsg}