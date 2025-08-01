
const project=require("./projectModel");

add=(req,res)=>{
    let validationError=[];

    if(!req.body.message){
        validationError.push("Message is required.")
    }

    if(!req.file){
        validationError.push("attachment is required.")
    }
    
    if(!req.body.clientId){
        validationError.push("Client id is required.")
    }
    if(!req.body.orderId){
        validationError.push("Order Id is required.")
    }
    if(!req.body.completionDate){
        validationError.push("Completion Date is required.")
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
                let projectObj=new project();
                projectObj.message=req.body.message
                projectObj.attachment="attachments/"+req.file.filename
                projectObj.clientId=req.body.clientId
                projectObj.orderId=req.body.orderId
                projectObj.completionDate=req.body.completionDate
                projectObj.save()
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
                        message:"Internla server error",
                        error:error.message
                    })
                })
    }
}

getall=async(req,res)=>{
    totalCount=await project.countDocuments().exec()

    project.find()
    .then((projectData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully.",
            data:projectData,
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
        project.findOne({_id:req.body._id})
        .then((projectData)=>{
            if(!projectData){
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
                    data:projectData
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
        project.findOne({_id:req.body._id})
        .then((projectData)=>{
            if(!projectData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found."
                })
            }
            else{
                project.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted successfully",
                        data:projectData
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
        project.findOne({_id:req.body._id})
        .then((projectData)=>{
            if(!projectData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found."
                })
            }
            else{
               
                if(req.body.message){
                    projectData.message=req.body.message
                }
                if(req.body.attachments){
                    projectData.attachments=req.body.attachments
                }
                projectData.save()
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