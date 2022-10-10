const express = require('express');
const http = require('http');

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = require("socket.io")(port,{
    cors: "*"
});

io.on('connection', (socket)=>{
    console.log('a user connected');
    socket.on("join_game",(playerId)=>{
        console.log("User with id ", playerId, " has joined the game!");
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
})