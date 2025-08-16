const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)

        console.log("Connected TO DB")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB