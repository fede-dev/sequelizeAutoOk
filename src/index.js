const express = require("express")
const morgan = require("morgan")
const app = express()
const PORT = 3306
const path =require('path')

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'./views'))
app.use("/api", require("./routes"))

app.listen(PORT, ()=> {
console.log(`server listen on port ${PORT}`)
})


//sequelize-auto -h localhost -d dbTest -u root -x 1234 -p 3307  --dialect mysql 
