// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Serve static files
// app.use(express.static('public'));

// // Socket.io signaling
// io.on('connection', socket => {
//   console.log('User connected:', socket.id);
  
//   // Relay signaling data to other peer
//   const relay = (event) => {
//     socket.on(event, data => {
//       socket.broadcast.emit(event, data);
//     });
//   };
//   // Set up relay for WebRTC signals
//   relay('offer');
//   relay('answer');
//   relay('candidate');
  
//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });


// server.listen(3000, () => {
//   console.log(`Server running on http://localhost:${3000}`);
// });
require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const axios = require("axios");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));


// Metered TURN config
const METERED_DOMAIN = process.env.METERED_DOMAIN;
const METERED_SECRET_KEY = process.env.METERED_SECRET_KEY;


// Give browser temporary TURN credentials
app.get("/api/turn", async (req, res) => {
    try {

        const response = await axios.get(
            `https://${METERED_DOMAIN}/api/v1/turn/credentials`,
            {
                params:{
                    apiKey: METERED_SECRET_KEY
                }
            }
        );

        res.json(response.data);

    } catch(error){

        console.log(
            error.response?.data || error.message
        );

        res.status(500).json({
            error:"TURN credentials failed"
        });
    }
});


// Socket.IO signaling

io.on("connection", socket => {

    console.log("user connected", socket.id);


    socket.on("offer", offer=>{
        socket.broadcast.emit("offer", offer);
    });


    socket.on("answer", answer=>{
        socket.broadcast.emit("answer", answer);
    });


    socket.on("candidate", candidate=>{
        socket.broadcast.emit("candidate", candidate);
    });


    socket.on("disconnect",()=>{
        console.log("user disconnected");
    });

});


server.listen(3000,()=>{
    console.log("Server running on port 3000");
});