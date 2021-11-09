const db = require('../database/models')  

const userModel = {
  getAllUser: async function () {
    return await db.test.findAll()
  },
  getCreateUser: async function (user) {
    return this.getAllUser.filter((item) => item.name === nombre);
  },
  updateUser: async function (id, user){
    return true;
  },
  deleteUSer: async function (id){
      return true;
  }
};
module.exports = userModel