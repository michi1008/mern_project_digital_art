const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  },
  small:{
    type:Number,
    required:true
  },
  medium:{
    type:Number,
    required:true
  },
  large:{
    type:Number,
    required:true
  },
  extra_large:{
    type:Number,
    required:true
  },
  url:{
    type:String,
    required:true
  },
  featured:{
    type:Boolean,
    requried:false
  }
})

const Product = mongoose.model('products', productSchema)

module.exports = Product 