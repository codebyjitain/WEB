const jwt = require('jsonwebtoken')

const generatetoken = (user)=>{
    return jwt.sign({email:user.email , id: user._id}, process.env.JWT_SECRET_KEY)
}

module.exports = generatetoken