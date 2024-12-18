const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    //get the token
    //verify the token
    //get the user out of the token
    //
    //Bearer token
    console.log(req.headers.authorization);
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verification = jwt.verify(token,"mybookings");
        req.body.userId = verification.userId;
        next();
        
    }
    catch(err){
        res.status(404).then({success:false,message:'Invalid token'})
    }
}