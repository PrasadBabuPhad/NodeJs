const express=require("express");
const app=express();

app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
});

app.get("/user",(req,res)=>{
    res.send("Info about user");
})

app.post("/user",(req,res)=>{
    res.send("Info saved")
})

app.delete("/user",(req,res)=>{
    res.send("Info is deleted");
})
app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

//Request:Log ko maintain karta 
//Tioming:kis type ki request thi,URL