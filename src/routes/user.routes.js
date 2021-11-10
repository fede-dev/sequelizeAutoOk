const express = require("express")
const router = express.Router()
const {userController, authController} = require("../controller")
const {verifytoken} = require("../middleware/authMid")

router.get("/", userController.allUsers)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)

router.post("/registro", userController.createUser)
router.post("/ingresar", authController.createToken)
router.post("/rutaprivada",verifytoken, userController.profileRoute)

module.exports = router