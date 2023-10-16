const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    fullname:String,
    email : String , 
    password : String , 
    cpassword : String , 
    profession : String , 
    phonenumber : String,
    username : String

})

const userModel = mongoose.model("register" , userSchema)
module.exports = userModel;