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

    console.log("User connected:", socket.id);

    // socket.on('message',(data)=>{
    //     socket.broadcast.emit('new-message',data);
    // })

    socket.on('message',({room,msg})=>{
        socket.to(room).emit('new-message',msg);
    })


    // socket.on('rampage',(data)=>{
    //     io.emit('new-message',data);
    // })

    socket.on('join-room',(room)=>{
        socket.join(room);
    })


    socket.on("disconnect",()=>{
        console.log("Disconnected from Server")
    })
})

server.listen(3000,()=>{
    console.log("Listening");
})