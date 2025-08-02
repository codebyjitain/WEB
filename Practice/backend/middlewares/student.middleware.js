const isStudent = function (req,res,next) {
    if(req.user.type === "student"){
        
        next();
    }
    else{
        res.json({
            success: false,
            message:"you are not student"
        })
    }
}


module.exports = isStudent