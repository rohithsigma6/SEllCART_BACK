const router = require("express").Router();

const { verifyUser } = require("../../../middlewares/auth");
const controller  = require('../controllers/index')

router.post('/register',controller.Register)
router.post('/login',controller.Login)
router.get('/getuserdetails',verifyUser, controller.currentUser)
module.exports = router;