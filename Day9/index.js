const express=require('express');
const app=express();
const {Auth}=require("./middleware/auth")

//CRUD :CREate Read Update Delete
//Database :Array

app.use(express.json());
const FoodMenu=[
    {id:1,food:"Noodles",category:"veg",price:150},
    {id:2,food:"Butter Naan",category:"veg",price:50},
    {id:3,food:"Rajma",category:"veg",price:200},
    {id:4,food:"bobby",category:"veg",price:10},
    {id:5,food:"Momo",category:"veg",price:100},
    {id:6,food:"Green Peas",category:"veg",price:250},
    {id:7,food:"Kaju Panner",category:"veg",price:400}
];
const AddToCart=[];


app.use("/admin",Auth)

app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})

app.post("/admin",(req,res)=>{
    
        FoodMenu.push(req.body);
        res.status(201).send("Items Can be added");

})

app.delete("/admin/:id",(req,res)=>{
        const id=parseInt(req.params.id);
        const index=FoodMenu.findIndex(item=> item.id===id);
        if(index===-1){
            res.send("Item Doesn't Exists");
        }
        else{
            FoodMenu.splice(index,1);
            res.send("Succesfully Deleted");
        }
    
})

app.patch("/admin",(req,res)=>{
    
        const id=req.body.id;

        const fooddata=FoodMenu.find(item=> item.id===id)

        if(fooddata){
            if(req.body.food)
                fooddata.food=req.body.food;
            if(req.body.category)
                fooddata.category=req.body.category;
            if(req.body.price)
                fooddata.price=req.body.price;

            res.send("Successfully Updated");
        }
        else{
            res.send("Item not exist")
        }
        
})

//localhost:3000/admin

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})