//taskmanager1234
const express = require("express");
const UsersController = require("../controller/UsersController")
const TasksController = require("../controller/TasksController")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")

const router = express.Router();

router.post("/registartion", UsersController.registartion)

router.post("/UserLogin", UsersController.UserLogin)

router.post("/profileUpdate",AuthVerifyMiddleware, UsersController.profileUpdate)

// about task 
router.post("/createTask",AuthVerifyMiddleware, TasksController.createTask)
router.post("/deleteTask",AuthVerifyMiddleware, TasksController.deleteTask)
router.get("/updateTaskStatus/:id/:status",AuthVerifyMiddleware, TasksController.updateTaskStatus)
router.get("/listTaskByStatus/:status",AuthVerifyMiddleware, TasksController.listTaskByStatus)



module.exports = router;
