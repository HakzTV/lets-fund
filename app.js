import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"

const app = express()
const port = process.env.PORT || 3000 

// Middleware 
dotenv.config()
app.use(express.json())
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

// Configurations
const url = process.env.MONGO_URI
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

// DB Connection
const connect = ()=>{
    mongoose.connect(url, options).then(()=>{
        console.log('Connected to DB')
    })
    .catch(err => {throw err})
}

// Server Connection
app.listen(port, ()=>{
    connect()
    console.log("Connected to Server")   
})