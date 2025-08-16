const { default: mongoose } = require("mongoose");


const ownerSchema = mongoose.Schema({
    fullname: String,
    email : String,
    password : String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            Ref: "product"
        }
    ],
    
    picture: String
})

module.exports = mongoose.model("owner" , ownerSchema)