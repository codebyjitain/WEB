const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    productname: String,
    ownerId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "owner"
    }
})

module.exports = mongoose.model("product" , productSchema)