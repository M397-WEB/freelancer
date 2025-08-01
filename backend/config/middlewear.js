const jwt=require("jsonwebtoken");
const privateKey="privateKey123";

module.exports=(req,res,next)=>{
    const token=req.headers['authorization']
    jwt.verify(token,privateKey,function(err,result){
        if(err==null){
            req.body = req.body || {}; 
            req.body["tokendata"] = result
            next();
        }
        else{
            res.json({
                status:403,
                success:false,
                message:"Token not found"
            })
        }
    })
}