const view=require("./reviewModel");

add=(req,res)=>{
    let validationError=[];

    if(!req.body.orderId){
        validationError.push("order id is required.")
    }

    if(!req.body.clientId){
        validationError.push("client id is required.")
    }

   

    if(!req.body.rating){
        validationError.push("rating is required.")
    }

    if(!req.body.reviewMessage){
        validationError.push("Review Message is required.")
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
                let viewObj=new view();
                viewObj.orderId=req.body.orderId
                viewObj.clientId=req.body.clientId
                viewObj.rating=req.body.rating
                viewObj.reviewMessage=req.body.reviewMessage
                viewObj.save()
                .then((resData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Thank You For Your Review!!",
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
}

getall=async(req,res)=>{
    totalCount=await view.countDocuments(req.body).exec()

    view.find(req.body).populate("clientId").populate("orderId")
    .then((viewData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully.",
            data:viewData,
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
        view.findOne({_id:req.body._id})
        .then((viewData)=>{
            if(!viewData){
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
                    data:viewData
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
        view.findOne({_id:req.body._id})
        .then((viewData)=>{
            if(!viewData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found."
                })
            }
            else{
                view.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted successfully",
                        data:viewData
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
        view.findOne({_id:req.body._id})
        .then((viewData)=>{
            if(!viewData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found."
                })
            }
            else{
                if(req.body.orderId){
                    viewData.orderId=req.body.orderId
                }
                if(req.body.clientId){
                    viewData.clientId=req.body.clientId
                }
                
                if(req.body.rating){
                    viewData.rating=req.body.rating
                }
                if(req.body.reviewMessage){
                    viewData.reviewMessage=req.body.reviewMessage
                }
                viewData.save()
                .then((resData)=>{
                    res.json({
                        status:200,
                        success:false,
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