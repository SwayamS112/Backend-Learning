import moongose from 'mongoose'

const categoriesSchema = new mongoose.Schema({
name:{
  type:String,
  required: true
}
},{timestamp:true})

export const Categories = mongoose.model("Categories",categoriesSchema);