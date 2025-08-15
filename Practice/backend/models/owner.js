const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    ownername:{
        type: String
    },
    email: String,
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    ]

})

module.exports = mongoose.model("owner", ownerSchema)