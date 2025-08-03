const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')
const isAdmin = require('../middlewares/admin.middleware')
const isStudent = require('../middlewares/student.middleware')
const userModel = require('../models/userModel')

router.get('/users', async (req,res)=>{
    try {
        const users = await userModel.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({success:false, message: error.message})
    }
})

router.post('/users',async (req,res)=>{
    try {
        const {name, age , weight} = req.body;
        const users = new userModel({name,age,weight})
        await users.save();
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json({success:false, message: error.message})
    }
})









// router.get('/student',auth,isStudent,(req,res)=>{
//     console.log("Done");
//     res.send("Welcome Student")
// })

// router.get('/admin',auth,isAdmin,(req,res)=>{
//     console.log("Done");
//     res.send("Welcome Admin")
// })
module.exports = router