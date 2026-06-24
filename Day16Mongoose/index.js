import express from 'express';
const app=express();
import './database.js';

app.use(express.json());


app.listen(3000,()=>{
    console.log("Listening at port 3000");
});