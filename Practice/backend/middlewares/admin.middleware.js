
const isAdmin = function (req,res,next) {
    if(req.user.type === "admin"){
        next();
    }
    else{
        res.json({
            success: false,
            message:"you are not Admin"
        })
    }
}

module.exports = isAdmin
