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
   gender:{
      type:String,
      // tisgosndfg if user sent's this
      //enum:["male","female","others"]
      validate(value){
         if(!["male","female","others"].includes(value))
            throw new Error("Invalid Gender")
      }
   },
   age:
   {  type:Number,
      min:14,
      max:70
   },
   emailId:{
      type:String,
      required:true,
      unique:true,
      trim:true,
      lowercase:true,
   },
   password:{
      type:String,
      required:true
   },
   photo:{
      type:String,
      default:"This is the default Photo"
   },
},{timestamps:true})

const User=mongoose.model("user",userSchema);


module.exports=User;