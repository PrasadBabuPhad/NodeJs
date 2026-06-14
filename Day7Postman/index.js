const express= require("express");
const app= express();


app.use("/user",(req,res)=>{
    //console.log(req);
    res.send("Hello Coder Army")
})


app.get("/user",(req,res)=>{
    res.send({name:"Prasad"})
})


app.post("/user",(req,res)=>{
    console.log("data saved successfully");
    res.send("Data Saved Successfully");
})



//
app.listen(4000, ()=>{
    console.log("Listening at port 4000");

})


