const jwt = require('jsonwebtoken')
const userModel = require('../models/user')

const isLoggedIn = async (req, res, next) => {
    if (!res.cookies.token) {
        res.flash("You Have to login first")
        res.redirect('/login')
    }

    try {

        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY)
        const user = await userModel.findOne({email: decoded.email}).select('-password')
        req.user = user
        next()

    } catch (err) {
        res.flash("Something Went Wrong")
        res.redirect('/login')
    }

}

module.exports = isLoggedIn