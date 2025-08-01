const enquiry = require("./enquiryModel")

add = (req, res) => {
    let validationError = []

    if(!req.body.name){
        validationError.push("name is required")
    }
    if(!req.body.email){
        validationError.push("email is required")
    }
    if(!req.body.subject){
        validationError.push("subject is required")
    }
    if(!req.body.message){
        validationError.push("message is required")
    }

    if (validationError.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "validation error occurrs",
            error: validationError
        })
    }
    else {

        let enqObj = new enquiry();
        enqObj.name = req.body.name
        enqObj.email = req.body.email
        enqObj.subject = req.body.subject
        enqObj.message = req.body.message
        enqObj.save()
            .then(
                (resSave) => {
                    res.json({
                        status: 200,
                        success: true,
                        message: "Message sent successfully",
                        data: resSave
                    })
                }
            )
            .catch(
                (err) => {
                    res.json({
                        status: 500,
                        success: false,
                        message: "Internal Server Error",
                        errors: err.message
                    })
                }
            )
    }
}

//getall 

getall = async (req, res) => {
    const totalCount = await enquiry.countDocuments().exec()
    enquiry.find()
        .then((enquiryData) => {
            res.json({
                status: 200,
                success: false,
                message: "Data loaded successfully",
                data: enquiryData,
                count: totalCount
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                success: false,
                message: "Internal server error",
                errors: err.message
            })
        })
}

module.exports={
    add,
    getall
}