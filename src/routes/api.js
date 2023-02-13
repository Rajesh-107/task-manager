//taskmanager1234
const express = require("express");
const UsersController = require("../controller/UsersController")
const TasksController = require("../controller/TasksController")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")

const router = express.Router();

router.post("/registartion", UsersController.registartion)
router.get("/getalluser", UsersController.getAllUsers)
router.get("/logout", UsersController.logoutController)

router.post("/UserLogin", UsersController.UserLogin)

router.post("/profileUpdate",AuthVerifyMiddleware, UsersController.profileUpdate)

// about task 
router.post("/createTask",AuthVerifyMiddleware, TasksController.createTask)
router.delete("/deleteTask/:id",AuthVerifyMiddleware, TasksController.deleteTask)

router.get("/updateTaskStatus/:id/:status",AuthVerifyMiddleware, TasksController.updateTaskStatus)
router.get("/listTaskByStatus/:status",AuthVerifyMiddleware, TasksController.listTaskByStatus)
router.get("/taskStatusCount",AuthVerifyMiddleware, TasksController.taskStatusCount)



module.exports = router;
