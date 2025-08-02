const mongoose = require('mongoose')
const dotenv = require('dotenv')

// configure dotenv

dotenv.config()

// database connection to mongoDB

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true
        })
        console.log("mongoDB Connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB