const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk');
require('dotenv').config()
const userRoutes = require('./router/user.js')
const app = express()
app.use(express.json({extends:true}))

//middelware
app.use('/api',userRoutes)

app.get('/',(req,res)=>{
  res.send('Api de Javier ')
})




//mongo DB Conection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{console.log(chalk.green.bold('La base de Datos esta conctada a la APP'))})
.catch((error)=>{console.log(error)})


const port = process.env.PORT || 8081
app.listen(port , () =>{
    console.log(chalk.blue(`El servidor esta ejecutando  en http://localhost:${port}`))
})