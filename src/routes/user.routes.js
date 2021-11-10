const express = require("express")
const router = express.Router()
const {userController} = require("../controller")

router.get("/", userController.allUsers)
router.post("/registro", userController.createUser)
router.post("/ingresar", userController.loginUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

module.exports = router