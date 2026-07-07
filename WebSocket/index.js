const express=require('express');
const app=express();
const  {Server}=require("socket.io");
const http =require('http');
const path=require('path');
const { Socket } = require('dgram');

// app.get("/",(req,res)=>{
//      // normal tcp request 
// })


// const server= app.listen(3000,()=>{
//     console.log("Listening at port 3000");
// })

const server=http.createServer(app);
const io= new Server(server);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});


io.on("connection",(socket)=>{

    socket.on('message',(data)=>{
        io.emit('new-message',data);
    })

    socket.on('rampage',(data)=>{
        io.emit('new-message',data);
    })

    socket.on("disconnect",()=>{
        console.log("Disconnected from Server")
    })
})

server.listen(3000,()=>{
    console.log("Listening");
})