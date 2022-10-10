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
        io.emit("player_joined", playerId);
    })

    socket.on("right_answer",(playerId)=>{
        console.log("User with id ",playerId, "gave a right answer! :-)")
    })

    socket.on("wrong_answer",(playerId)=>{
        console.log("User with id ",playerId, "gave a wrong answer! :-(")
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
})