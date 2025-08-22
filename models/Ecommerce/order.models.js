import mongoose from 'mongoose'

// this is the schema of different products  
const orderItemSchema = new mongoose.Schema({  
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  orderItems:{
      // if i order 2 phones 3 waterbottle so this is a array 
    type:[orderItemSchema]
  },
  address:{
    type:String,
    required:true
  },
  orderState:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PENDING"
  }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema) 