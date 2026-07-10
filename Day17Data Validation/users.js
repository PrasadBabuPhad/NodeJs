const mongoose=require('mongoose');

const {Schema} =mongoose;

const userSchema= new Schema({
   firstName:{
      type:String,
      required:true,
      minLength:3,
      maxLength:20
   },
   lastName:{
      type:String
   },
   gender:{type:String},
   age:
   {  type:Number,
      min:14,
      max:70
   },
   emailId:{
      type:String,
      required:true,
      unique:true,
   },
   password:{
      type:String
   },
   photo:{
      type:String,
      default:"This is the default Photo"
   },
})

const User=mongoose.model("user",userSchema);


module.exports=User;