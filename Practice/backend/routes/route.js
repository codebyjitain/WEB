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

router.put('/users/:id', async (req,res)=>{
    const {id} = req.params;
    const {name, age , weight} = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id,{name,age,weight});

        if(!updatedUser){
            res.json({
                message: "No Data available to update"
            })
        }
        res.status(201).json({
            success: true,
            message: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/users/:id', async(req,res)=>{
    const {id} = req.params

    try {
        const deletedUser = await userModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "user Deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
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