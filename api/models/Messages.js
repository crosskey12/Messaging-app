const   mongoose = require("mongoose")
// Connect to MongoDB database using Mongoose.
const Schema =mongoose.Schema

const MessageSchema = new Schema ({
    senderid:{
        type:String
    },
    recieverid:{
        type: String
    },
    message:{
        type : String
    }
},{timestamps:true})

const Messages=mongoose.model('Messages',MessageSchema)
module.exports=Messages