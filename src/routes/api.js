//taskmanager1234
const express = require("express");
const UsersController = require("../controller/UsersController")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")

const router = express.Router();

router.post("/registartion", UsersController.registartion)

router.post("/UserLogin", UsersController.UserLogin)

router.post("/profileUpdate",AuthVerifyMiddleware, UsersController.profileUpdate)

module.exports = router;
