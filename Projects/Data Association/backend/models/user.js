const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    username:{
        type : String
    },
    name: String,
    age: Number,
    email : String,
    password : String,
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]

})

module.exports = mongoose.model("user" , userSchema)