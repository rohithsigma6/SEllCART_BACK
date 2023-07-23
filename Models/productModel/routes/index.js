const router = require("express").Router();

const { verifyUser } = require("../../../middlewares/auth");
const controller  = require('../controllers/index')

router.post('/createproduct',verifyUser,controller.createProduct)
router.get('/getallproducts',controller.getAllProducts)
router.get('/getmyproducts',verifyUser,controller.getUserProducts)
router.post('/getproduct',controller.getProduct)

module.exports = router