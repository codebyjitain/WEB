const express = require('express')
const router = express.Router()
const ownerModel = require('../models/owner')

router.get('/', (req, res) => {
    res.send("Owner Home")
})

router.post("/create" , async (req,res)=>{
    const owner = await ownerModel.find()

    if(owner.length !== 0){
        res
        .status(504)
        .json({message: "You cannot create owner"})
    }

    const {fullname,email,password} = req.body
    await ownerModel.create({
        fullname,
        email,
        password
    })
    res.status(201).json({owner})
})

module.exports = router