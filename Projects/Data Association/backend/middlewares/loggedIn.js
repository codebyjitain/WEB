const jwt = require('jsonwebtoken')

const loggedIn = (req,res,next)=>{
    
    if(req.cookies.token === "") res.redirect("/login")
    
    else{
        const data = jwt.verify(req.cookies.token , process.env.JWT_SECRET_KEY)
        req.user = data
        next()
    }
}

module.exports = loggedIn