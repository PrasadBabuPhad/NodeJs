const express =require("express");
const app=express();
const main=require("./database.js");
const user=require("./users.js");


app.use(express.json());


app.get("/info", async (req,res)=>{

    const ans=await user.find({});
    res.send(ans);
})


//app.post()


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
