const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('MongoDb connected successfully...');
})


// 3.create a model to store data of Product
const Product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

  })

  //4. to use Product in other files - we have to export it
module.exports = {
    Product
}