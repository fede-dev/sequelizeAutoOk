const { userModel } = require("../model")
const jwt = require("jsonwebtoken")

const authController = {
    createToken: async(req, res, next)=> {
        const token = await userModel.getLoginUser(req.body.email, req.body.password) 
        res.status(200).json({token:token})
    }
}

module.exports = authController