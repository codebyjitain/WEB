const express = require('express')
const router = express.Router()

router.get("/" , (req,res)=>{
    let error = req.flash("error")
    res.send("Done")
})

router.get("/shop" , (req,res)=>{

})
module.exports = router