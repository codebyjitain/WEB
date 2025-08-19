const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return decoded
    } catch (error) {
        return error
    }
}
module.exports = verifyToken