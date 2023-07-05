const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = 3005
app.set('port',port)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log('conect to DB'))
.catch((err)=> console.error(err))

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})