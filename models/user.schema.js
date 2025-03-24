import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    }
},{timestamps:true})
const User=mongoose.model("User",userSchema)
export default User