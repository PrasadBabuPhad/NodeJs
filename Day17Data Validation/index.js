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
        const result=await user.findById(req.params.id):
    }
    catch(err){

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


app.delete("/info",async(req,res)=>{
    await user.deleteOne({name:"Sunny"});
    res.send("Deleted");
})


app.put("/info",async(req,res)=>{
    const result=await user.updateOne({name:"Surabhi"},{age:22,city:"Pune"});
    res.send("Updated");
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
