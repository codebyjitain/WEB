const jwt = require('jsonwebtoken')
const userModel = require('../models/user')

const isLoggedIn = async (req, res, next) => {
    if (!res.cookies.token) {
        res.status(401).json({message : "You have to login"})
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY)
        const user = await userModel.findOne({email: decoded.email}).select('-password')
        req.user = user
        next()

    } catch (err) {
        res.status(500).json({message : "Failed To login"})
    }

}

module.exports = isLoggedIn