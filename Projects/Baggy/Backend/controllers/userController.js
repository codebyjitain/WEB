const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const generatetoken = require('../utils/generatetoken')

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
        res.send(err.message)
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email: email }).lean()

        if (!user) res.status(401).send("Username or Password is Incorrect")

        bcrypt.compare(password, user.password, async function (err, result) {
            if (err) res.send(err.message)

            
            if (result) {
                const token = generatetoken(user)
                delete user.password
                user.token = token
                res.status(200).json({user})
            }
            else {
                res.send("Username or Password is Incorrect")
            }
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}