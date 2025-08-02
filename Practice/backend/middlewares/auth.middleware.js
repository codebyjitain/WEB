
const auth = function (req,res,next) {
    console.log("auth part");
    // dummy user 

    req.user = {userId: 1, type: "student"}
    if(req.user){
        next();
    }
    else{
        res.json({
            success: false,
            message:"you are not valid"
        })
    }
}

module.exports = auth