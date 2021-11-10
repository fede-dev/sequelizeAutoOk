const jwt = require('jsonwebtoken')

const verifytoken = (req, res, next) => {
    console.log(req.headers)
    if(!req.headers['authorization']) return "Error authorization denegade"
    jwt.verify(req.headers['authorization'], 'secretkey', function(err, decoded) {
       if(err){
            return res.status(401).json({msg: "Error" + err})
       }
       next()
      });

}


module.exports = {verifytoken}