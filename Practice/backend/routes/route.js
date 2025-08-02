const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')
const isAdmin = require('../middlewares/admin.middleware')
const isStudent = require('../middlewares/student.middleware')


router.get('/student',auth,isStudent,(req,res)=>{
    console.log("Done");
    res.send("Welcome Student")
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log("Done");
    res.send("Welcome Admin")
})
module.exports = router