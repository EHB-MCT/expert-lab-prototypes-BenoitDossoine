const express = require('express');
const http = require('http');

const app = express();
const port = 8000;
const server = http.createServer(app);
const io = require("socket.io")(port,{
    cors: "*"
});

const gameState = {
    status : false,
    players : [],
    questions: [
        {
            "question": "What is my name?",
            "rightAnswer": "Benoît",
            "wrongAnswers": ["Finn","Ilyes"]
        },{
            "question": "Which animal is green?",
            "rightAnswer": "Frog",
            "wrongAnswers": ["Cow","Dog"]
        }
    ],
}

io.on('connection', (socket)=>{
    socket.on("join_game",(playerName)=>{
        if(gameState.players.length<2){
            
            const newPlayer = {"id":socket.id,"score":0,"status":"waiting","name":playerName}
            gameState.players.push(newPlayer);
            io.to(socket.id).emit("player_joined",newPlayer)

            if(gameState.players.length == 2){
                gameState.status = true;
                setPlayerStatus("playing");
                io.emit("start_quiz",gameState.questions);
            }
            
        } else {
            io.to(playerId).emit("error","Too much players in this room!")
        }
        console.log(gameState);
    })

    socket.on("answer",(data)=>{
        gameState.players.find(player => player.id === data.id).status="answered";

        if(data.correct){
            gameState.players.find(player => player.id === data.id).score++;
        }
        
        if(gameState.players.every(player=>player.status==="answered")){
            setPlayerStatus("playing");
            io.emit("nextQuestion");

        } else {
            io.to(socket.id).emit("answer");
        }
    })

    socket.on("end_player",()=>{
        gameState.players.find(player => player.id === socket.id).status="finished";
        if(gameState.players.every(player=>player.status==="finished")){
            io.emit("end_game",gameState.players);
            gameState.players = [];
        }
    })

    socket.on('disconnect',()=>{
        if(gameState.players.find(player=>player.id === socket.id)){
            let index = gameState.players.indexOf(gameState.players.find(player=>player.id === socket.id));
            gameState.players.splice(index,1);
        }
    })
})

function setPlayerStatus(state){
    gameState.players.forEach(player=>player.status = state)
}