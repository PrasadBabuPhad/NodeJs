const mongoose =require('mongoose');

async function main(){
    await mongoose.connect("mongodb+srv://lucy:Prasad%40123@codingadda.xifhqtg.mongodb.net/BookStore");


const userSchema= new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
})

const User=mongoose.model("user",userSchema);


const user1= new User({name:"Rohit",age:20,city:"dwarka",gender:"Male"});
await user1.save();

await User.create({name:"Mohan",city:"Jaipur",age:30});




}
main()
.then(()=>console.log("Connected to database"))
.catch((err)=>console.log(err));