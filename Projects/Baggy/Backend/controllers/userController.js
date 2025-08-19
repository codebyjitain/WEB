const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const generatetoken = require('../utils/generatetoken')
const verifyToken = require('../utils/verifytoken')

dotenv.config()



module.exports.registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        const user = await userModel.find({ email: email })
        if (user.length !== 0) res.status(401).send("User Already Registered")
        else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    if (err) res.send(err.message)

                    const user = await userModel.create({
                        fullname,
                        email,
                        password: hash
                    })

                    res.cookie("token", generatetoken(user))
                    res.status(201).json({
                        data: user
                    })
                })
            })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email: email }).lean()

        if (!user) res.status(401).json({ message: "Username or Password is Incorrect" })

        bcrypt.compare(password, user.password, async function (err, result) {
            if (err) res.status(401).json({ message: err.message })


            if (result) {
                const token = generatetoken(user)
                delete user.password
                user.token = token
                res.status(200).json({ user })
            }
            else {
                res.status(401).json({ message: "Username or Password is Incorrect" })
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports.addToCart = async (req, res) => {
    
    try {
        const { userEmail, productId } = req.body

        const user = await userModel.findOne({email: userEmail})
        if (!user) return res.status(404).json({ message: "User not found" })

        if (!user.cart) user.cart = []
        // if (user.cart.includes(productId)) {
        //     return res.status(400).json({ message: "Product already in cart" })
        // }
        user.cart.push(productId)
        await user.save()
        res.status(200).json({ message: "Product added to cart successfully", cart: user.cart })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports.userData = (req, res) => {
    try {
        const {token} = req.query
        if (!token) return res.status(401).json({ message: "Unauthorized" })
        const user = verifyToken(token)
        
        res.status(200).json({ user })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports.cart = async (req, res) => {
    try {
        const { token } = req.query
        if (!token) return res.status(401).json({ message: "Unauthorized" })
        const data = verifyToken(token)
        if (!data) return res.status(404).json({ message: "User not found" })
        const user = await userModel.findOne({ email: data.email }).populate('cart').select('-password')

        if (!user) return res.status(404).json({ message: "User not found" })
        
        res.status(200).json({ data: user })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}