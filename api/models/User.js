const   mongoose = require("mongoose")
// Connect to MongoDB database using Mongoose.
const Schema =mongoose.Schema

const UserSchema = new Schema ({
    name:{
        type:String
    },
    emailid:{
        type : String
    },
    password:{
        type: String
    },
    online:{
        type:Boolean,default:false
    }
    }, { timestamps: true })

const Users=mongoose.model('Users',UserSchema)
module.exports=Users