const express=require("express")
const mongoose=require("mongoose")
const morgan=require("morgan")
const bodyparser=require("body-parser")

const messageroute= require('./routes/messages')
const cors=require("cors") //For connectivity from frontend

mongoose.connect('mongodb://0.0.0.0:27017/testdb', {useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database connection established")
})

const app= express()

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

app.use('/api',messageroute)
