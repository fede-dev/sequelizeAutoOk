const { userModel } = require("../model")

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
            return res.redirect("/api/users/ingresar")
            
        } catch (error) {
            res.status(404).json("Not found " + error)
        }
    },
    visualUser: async (req, res, next) => {
        try {
            res.render("index")
        } catch (error) {
            res.status(404).json("Not found " + error)
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
    },
    profileRoute: (req, res, next) => {
        res.status(200).json({ msg: "Bienvenido" })
    },
    visualProfileRoute: (req, res, next) => {
    return res.status(200).json({ msg: "Profile" })
       
    }
}

module.exports = userController