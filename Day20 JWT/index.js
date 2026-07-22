// npm i cookie-parser
const express =require("express");
const app=express();
const main=require("./database.js");
const user=require("./users.js");
const validUser=require("./validateUser.js")
const bcrypt=require("bcrypt");
const cookieParser=require('cookie-parser')

app.use(express.json());
app.use(cookieParser());

app.get("/info", async (req,res)=>{

    try{

        //validate the user
        const payload=jwt.verify(req.cookies.token,"Prasad@123");
        const result=await user.findById(payload._id);

        //console.log(req.cookies);
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
        validUser(req.body);
        //conversting paasord into the hashing
        req.body.password=await bcrypt.hash(req.body.password,10);

        await user.create(req.body);
        res.send("Registered Successfully");
    }
    catch(err){
        res.status(500).send(err.message);
    }
    
})

app.post("/login",async(req,res)=>{
    try{
        //cheso ko validate karna
        const people=user.findById(req.body._id);

        if(!(req.body.emailId===people.emailId))
            throw new Error("Invalid credentials");
        const isAllowed=await bcrypt.compare(req.body.password,people.password);

        if(!IsAllowed)
            throw new Error("Invalid credentials");
        res.send("Login Successfully");

        const token=jwt.sign({_id:people._id,emailId:emailId},"Prasad@123");

        res.cookie("token",token);
        res.send("Login Successfully");

    }
    catch(err){
        res.send(500).send(err.message);
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
        await user.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("Update successfully");
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


