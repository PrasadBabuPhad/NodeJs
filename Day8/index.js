const express= require("express");
const app= express();

const BookStore=[
    {id:1,name:"harry Potter",author:"devflux"},
    {id:2,name:"Friends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit"},
    {id:4,name:"DSA",author:"Maharaj"},
    {id:5,name:"Prem Khasi",author:"Rohan"}
]

app.use(express.json());


app.get("/book",(req,res)=>{
    res.send(BookStore);
})


app.post("/book",(req,res)=>{
    console.log("req.body");
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
})


app.patch("/book",(req,res)=>{
    req.send("Patch")
})

//
app.listen(4000, ()=>{
    console.log("Listening at port 4000");

})





