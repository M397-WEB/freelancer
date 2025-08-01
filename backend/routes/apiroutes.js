const router=require("express").Router();

//import all controller files
const postController=require("../Server/Post/postController");
const projectController=require("../Server/Project/projectController");
const techController=require("../Server/Technology/techController");
const viewController=require("../Server/Review/reviewController");
const customerController=require("../Server/Customer/customerController");
const userController=require("../Server/User/userController");
const enquiryController = require("../Server/Enquiry/enquiryController")
//tech img
const multer=require("multer");
const techstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/technology')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const techupload = multer({ storage: techstorage })

//attachment
const attachmentstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/attachments')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const attachmentupload = multer({ storage: attachmentstorage })


//postcontroller routing
router.post("/order/getall",postController.getall)
router.post("/order/getsingle",postController.getsingleData)
router.post("/order/delete",postController.deleteData)
router.post("/order/update",postController.updateData)

//projectcontroller routing

router.post("/project/getall",projectController.getall)
router.post("/project/getsingle",projectController.getsingleData)
router.post("/project/delete",projectController.deleteData)
router.post("/project/update",projectController.updateData)

//techcontroller routing
router.post("/technology/getall",techController.getall)
router.post("/technology/getsingle",techController.getsingleData)


//viewcontroller routing

router.post("/review/getall",viewController.getall)
router.post("/view/getsingle",viewController.getsingleData)
router.post("/view/delete",viewController.deleteData)
router.post("/view/update",viewController.updateData)

//customercontroller routing
router.post("/customer/register",customerController.register)
router.post("/customer/getall",customerController.getall)
router.post("/customer/getsingle",customerController.getsingleData)
router.post("/customer/update",customerController.updateData)

//enquiry routes
router.post('/enquiry/add',enquiryController.add)
router.post('/enquiry/getall',enquiryController.getall)

//userController routing
router.post("/user/login",userController.login)


//Middleware Routes

router.use(require("../config/middlewear"))

router.post("/technology/add",techupload.single("techImg"),techController.add)
router.post("/technology/delete",techController.deleteData)
router.post("/technology/update",techupload.single("techImg"),techController.updateData)

router.post("/order/add",postController.add)
router.post("/order/updatestatus",postController.updateStatus)

router.post("/project/add",attachmentupload.single("attachment"),projectController.add)

//review
router.post("/review/add",viewController.add)

module.exports=router
