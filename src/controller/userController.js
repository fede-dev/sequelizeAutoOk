const { userModel } = require("../model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userController = {
    allUsers: async (req, res, next) => {
        try {
            const allusers = await userModel.getAllUser()
            res.status(200).json(allusers)
        } catch (error) {
            res.status(404).json("Not found " + error.message)
        }
    },
    createUser: async (req, res, next) => {
        try {
         const user = req.body
         const response = await userModel.getCreateUser(user)
         res.status(200).json(response)
        } catch (error) {
            res.status(404).json("Not found " + error)
        }
    },
    loginUser: async (req, res, next) => {
        try {
            const email = req.body.email
            const password = req.body.password
            const loginUser = await userModel.getLoginUser(email, password)
            res.status(200).json(loginUser)
        } catch (error) {
            res.status(404).json("Not found " + error.message)
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const updateUser = await userModel.getUpdateUser(req.params.id, req.body)
            res.status(200).json(updateUser)
        } catch (error) {
            res.status(404).json("Not found " + error.message)
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const deleteUser = await userModel.getDeleteUser(req.params.id)
            res.status(200).json(deleteUser)
        } catch (error) {
            res.status(404).json("Not found " + error.message)
        }
    }
}

module.exports = userController