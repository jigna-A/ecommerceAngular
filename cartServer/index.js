// import express 
const express = require('express')

const cors = require('cors')

const dataService = require('./services/dataService')

const app = express()

app.use(cors({
    origin:'http://localhost:4200'
}))

//to parse json
app.use(express.json())


// set port 
app.listen(3000,()=>{
    console.log('server started at port:3000');
})


// api to get all products
app.get('/all-products',(req,res)=>{
  
    //asynchronous
    dataService.getProducts()
    .then((result)=>{
      res.status(result.statusCode).json(result)
    })
  })

 