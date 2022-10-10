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
        io.emit("player_joined",
            {
                "id":playerId,
                "score":0,
            }
        );
    })

    socket.on("answer",(data)=>{
        io.emit("answer",{"id":data.id,"correct":data.correct});
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
})