const Messages=require('../models/Messages') //Mongoose Schema to store messages 

//Post func to return all messages between sender and reciever from Messages DB
const msgbyid=(req,res,next) =>{
    const id1 = req.body.senderid
    const id2 = req.body.recieverid
    Messages.find({$or:[{$and:[{senderid:id1},{recieverid:id2}]},{$and:[{senderid:id2},{recieverid:id1}]}]})
    .then(messages => res.json({ messages }))
    .catch(error =>{res.json({message:'An error Occured'})})
}

//Post func to save new message to Messages DB
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