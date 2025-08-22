//import the mongoose
import mongoose from 'mongoose'

// made a Schema for user or hospital or school etc or it could be todo Schema etc
const userSchema = new mongoose.Schema(
  {
    // this is basic ->
    // username: String,
    // email: String,
    // isActive: Boolean,
    
    // this is advance
    username:{
      type:String,
      required: true,  // needed to be filled or checked
      unique: true,    //means in insta everyone has unique user id
      lowercase: true
    },
    email:{
      type:String,
      required: true,
      unique: true,
      lowercase: true
    },
    password:{
      type:String,
      required: [true,"password is required"], // [Custom validators] custom message can be added
      
    }

  }, {timestamps: true}
)

// made a model named User in double inverted comma's on the basis of userSchema
export const User = mongoose.model("User",userSchema)

// when we use it "User" as a name in mongodb it will be like users 
// because in database it automatically make all in lower case and with 's'

