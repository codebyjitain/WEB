const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/user')
const {registerUser , loginUser} = require('../controllers/userController')
const generatetoken = require('../utils/generatetoken')


router.get("/", (req, res) => {
    res.send("User")
})

router.post("/register", registerUser)

router.post("/login", loginUser)

module.exports = router