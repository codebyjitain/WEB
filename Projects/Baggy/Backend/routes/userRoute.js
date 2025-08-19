const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/user')
const userController = require('../controllers/userController')
const generatetoken = require('../utils/generatetoken')




router.get("/" , userController.userData)

router.post("/register", userController.registerUser)

router.post("/login", userController.loginUser)

router.post('/addtocart', userController.addToCart)

router.get('/cart', userController.cart)

module.exports = router