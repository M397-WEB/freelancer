const tech=require("./techModel");

add=(req,res)=>{
    let validationError=[];

    if(!req.body.technologyName){
        validationError.push("Technology name is required.")
    }

    if(!req.file){
        validationError.push("Technology imgs is required.")
    }

    if(!req.body.description){
        validationError.push("Description is required.")
    }

    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occures.",
            error:validationError
        })
    }

    else{
        tech.findOne({technologyName:req.body.technologyName})
        .then((techData)=>{
            if(!techData){
                let techObj=new tech();
                techObj.technologyName=req.body.technologyName
                techObj.techImg="technology/"+req.file.filename
                techObj.description=req.body.description
                techObj.save()
                .then((resData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added Successfully",
                        data:resData
                    })
                })
                .catch((error)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        error:error.message
                    })
                })
            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"Data is already exites.",
                    data:techData
                })
            }
        })
        .catch((error)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                error:error.message
            })
        })
    }
}

getall=async(req,res)=>{
    totalCount=await tech.countDocuments().exec()

    tech.find()
    .then((techData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully.",
            data:techData,
            total:totalCount
        })
    })
    .catch((error)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal server error.",
            error:error.message
        })
    })
}

getsingleData=(req,res)=>{
    let validationError=[];
    if(!req.body._id){
        validationError.push("id ia required.")
    }

    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occurs.",
            error:validationError
        })
    }

    else{
        tech.findOne({_id:req.body._id})
        .then((techData)=>{
            if(!techData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                res.json({
                    status:200,
                    success:true,
                    message:"Data loaded successfully.",
                    data:techData
                })
            }
        })
        .catch((error)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server Error.",
                error:error.message
            })
        })
    }
}

deleteData =(req,res)=>{
    let validationErrors=[];
    if(!req.body._id){
        validationErrors.push("id is required")
    }
    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occurs",
            error:validationErrors
        })
    }
    else{
        tech.findOne({_id:req.body._id})
        .then((techData)=>{
            if(!techData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found."
                })
            }
            else{
                tech.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted successfully",
                        data:techData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        error:err.message
                    })
                })
            }
        })
    }
}


updateData=(req,res)=>{
     let validationErrors=[];
    if(!req.body._id){
        validationErrors.push("id is required")
    }
    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occurs",
            error:validationErrors
        })
    }

    else{
        tech.findOne({_id:req.body._id})
        .then((techData)=>{
            if(!techData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found."
                })
            }
            else{
                if(req.body.technologyName){
                    techData.technologyName=req.body.technologyName
                }
                if(req.file){
                    techData.techImg="technology/"+req.file.filename
                }
                if(req.body.description){
                    techData.description=req.body.description
                }
                techData.save()
                .then((resData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data updated successfully.",
                        data:resData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error.",
                        error:err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error.",
                error:err.message
            })
        })
    }
}

module.exports={
    add,getall,getsingleData,deleteData,updateData
}
