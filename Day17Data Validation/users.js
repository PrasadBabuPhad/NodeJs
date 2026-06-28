const mongoose=require('mongoose');

const {Schema} =mongoose;

const userSchema= new Schema({
   firstName:{type:String},
   lastName:{type:String},
   gender:{type:String},
   age:{type:Number},
   emailId:{type:String},
   password:{type:String},
   photo:{type:String},
})

const User=mongoose.model("user",userSchema);


module.exports=User;