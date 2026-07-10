const express =require("express");
const app=express();
const main=require("./database.js");
const user=require("./users.js");


app.use(express.json());


app.get("/info", async (req,res)=>{

    try{
        const result=await user.find();
        res.send(result);
    }
    catch(err){res.send("Error")}
})


app.get("/user/:id",async(req,res)=>{
    try{
        const result=await user.findById(req.params.id)

    }
    catch(err){
        res.send("Error"+err.message);
    }
})


app.post("/register",async(req,res)=>{

    try{
        await user.create(req.body);
        res.send("Registered Successfully");
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
})


app.delete("/user/:id",async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id);
        res.send("Deleted successfully")
    }
    catch(err){
        res.send("Error"+err.message);
    }
})


app.patch("/user",async(req,res)=>{
    try{
        const {_id,...update}=req.body;
        await user.findByIdAndUpdate(_id,update);
        res.send("Update successfully");6
    }
    catch(err){
        res.send("Error "+err.message);
    }
})


main()
.then(async ()=>{
    console.log("Connected to database");
    app.listen(3000,()=>{
    console.log("Listening at port 3000");
    })

    // const result=await user.find({name:"Rohit"});
    // console.log(result);
})
.catch((err)=>console.log(err));


