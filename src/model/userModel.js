const db = require('../database/models')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const userModel = {
  getAllUser: async function () {
    return await db.test.findAll()
  },
  getCreateUser: async function (user) {
    let password = bcrypt.hashSync(user.password, 10)
    let createUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: password
    }
    return await db.test.create(createUser)
  },
  getLoginUser: async function (email, password) {
    if(bcrypt.compareSync(password, password)){
      let token = await jwt.sign({email: email, password:password}, 'secretkey', {expiresIn: "1h"})
      return token
    }else{
      console.log("Error")
    }
  },
  getUpdateUser: async function (id, user) {
    try {
      const datos = await this.getAllUser();
      const findId = datos.find(item => item.id == id)
      const updateUser = await db.test.update(
        {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          password: user.password
        },
        {
          where:
            { id: findId.dataValues.id }
        }
      )
      return updateUser.dataValues
    } catch (error) {
      console.log("hubo un error " + error.message)
    }
  },
  getDeleteUser: async function (id) {
    try {
      const datos = await this.getAllUser();
      const findId = datos.find(item => item.id == id)
      const deleteUser = await db.test.destroy({
        where: {
          id: findId.dataValues.id
        }
      })
      return deleteUser.dataValues
    } catch (error) {
      console.log("hubo un error " + error.message)
    }

  }
};
module.exports = userModel


//command a kf
