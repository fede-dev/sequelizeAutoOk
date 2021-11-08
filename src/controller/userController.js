const userModel = require("../model")

const userController = {
    allUsers: async(req, res, next)=> {
        try{
            const allusers = await userModel.getAllUsers()
            res.status(200).json(allusers)
        }catch(error){
            res.status(404).json("Not found " + error.message)
        }
    },
    createUser: async()=> {
        try{
            const newUser = await userModel.getCreateUser(req.body)
            res.status(200).json(newUser)
        }catch(error){
            res.status(404).json("Not found " + error.message)
        }
    },
    updateUser: async()=> {
        try{
            const updateUser = await userModel.getUpdateUser(req.params.id, req.body)
            res.status(200).json(updateUser)
        }catch(error){
            res.status(404).json("Not found " + error.message)
        }
    },
    deleteUser: async()=>{
        try{
            const deleteUser = await userModel.getDeleteModel(req.params.id)
            res.status(200).json(deleteUser)
        }catch(error){
            res.status(404).json("Not found " + error.message)
        }
    }
}

module.exports = userController