const db = require('../database/models')
const { Op } = require("sequelize")

const userModel = {
  getAllUser: async function () {
    return await db.test.findAll()
  },
  getCreateUser: async function (user) {
    return db.test.create(user)
  },
  getUpdateUser: async function (id, user) {
    try {
      const datos = await this.getAllUser();
      const findId = datos.find(item => item.id == id)
      const updateUser = await db.test.update(
        { name: user.name,
          lastName: user.lastName,
          email: user.email,
          password: user.password
         },
        {
          where:
            { id: findId.dataValues.id}
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