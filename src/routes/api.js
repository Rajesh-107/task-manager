//taskmanager1234
const express = require("express");
const UsersController = require("../controller/UsersController")

const router = express.Router();

router.post("/registartion", UsersController.registartion)

module.exports = router;
