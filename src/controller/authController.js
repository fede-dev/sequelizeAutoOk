const { userModel } = require("../model")

const authController = {
    createToken: async(req, res, next)=> {
        try{
            const token = await userModel.getLoginUser(req.body.email, req.body.password) 
            res.status(200).json({token:token})
        }catch(error){
            console.log(error)
        }
    },
    visualUserLogin: async (req, res, next) => {
        try {
            res.render("login")
        } catch (error) {
            res.status(404).json("Not found " + error)
        }
    }
}

module.exports = authController