const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/isLoggedIn')

router.get("/" , isLoggedIn, (req,res)=>{
    res.send("hello")
})

router.get("/shop" ,(req,res)=>{
    res.send("Heloo")
})
module.exports = router