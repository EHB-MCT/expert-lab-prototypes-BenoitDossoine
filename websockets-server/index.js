const express = require('express');
const http = require('http');

const {fromEvent,combineLatest,of, from} = require('rxjs');
const {tap,switchMap,map, mergeMap,takeUntil,skipWhile,buffer} = require('rxjs/operators');
const { connection } = require('websocket');

const fetch = (...args) => import('node-fetch').then(({default:fetch})=> fetch(...args));
const app = express();
const port = 8000;
const io = require("socket.io")(port,{
    cors: "*"
});

const initialGameState = {
    status : false,
    master: {},
    players : [],
    questions: [],
    questionNumber: 0,
}

let gameState = {
    status : false,
    master: {},
    players : [],
    questions: [],
    questionNumber: 0,
}

const io$ = of(io);
const connection$ = io$
    .pipe(
        switchMap(io =>
            fromEvent(io,'connection')
                .pipe(
                    map(client => ({io,client}))
                )      
        )
    )
connection$.subscribe(({io,client})=>{console.log('connected: ',client.id)});

const disconnection$ = connection$
    .pipe(
        mergeMap(({client}) =>
            fromEvent(client,'disconnect')
                .pipe(
                    map(()=>({client}))
                )
        )
    )

    //subject bijhouden
disconnection$.subscribe(({client})=>{

    if(gameState.players.find(player=>player.id === client.id)){
        let index = gameState.players.indexOf(gameState.players.find(player=>player.id === client.id));
        gameState.players.splice(index,1);
    } else if (gameState.master.id === client.id) {
        gameState.master = {};
    }
});

listenToEvent('join_game')
    .subscribe(({io,client,data})=>{
        if(gameState.players.length<2){
            const newPlayer = {"id":client.id,"score":0,"status":"waiting","name":data}
            gameState.players.push(newPlayer);
            io.to(client.id).emit("player_joined",newPlayer)
        } else {
            io.to(client.id).emit("error","Too much players in this room!")
        }
    })

listenToEvent('join_master')
    .subscribe(({io,client,data})=>{
        if(Object.keys(gameState.master).length == 0){
            gameState.master = {"id":client.id,"status":"creating"};
            io.to(client.id).emit("master_joined");
        } else {
            io.to(client.id).emit("error","There already is a quiz master!");
        }
    })

listenToEvent('questions_submitted')
    .pipe(
        tap(async ({io,client,data})=>{
            let questions = await fetch(`https://opentdb.com/api.php?amount=${data.numberOfQuestions}&category=${data.categories}&difficulty=${data.difficulty}&type=multiple`)
                .then((response)=> response.json())
                .then(data => data.results);
            gameState.questions = questions;
            console.log(gameState.questions);
            }
        )

    )
    .subscribe(()=>console.log("questionsfilled"))

// const questionsFilled = of('')

combineLatest([
    listenToEvent('join_game').pipe(skipWhile(()=>gameState.players.length<2)),
    listenToEvent('questions_submitted')])
    .subscribe(()=>
        {
            console.log("combinelatest", gameState.questions);
            startGame()
        }
    )

function listenToEvent(event){
    return connection$
        .pipe(
            mergeMap(({io,client})=>
                fromEvent(client,event)
                    .pipe(
                        takeUntil(
                            fromEvent(client,'disconnect')
                        ),
                        map(data=>({io,client,data}))
                    )
            )
        )
}
io.on('connection', (socket)=>{
    /**
     * Player logic
     */
    socket.on("answer",(data)=>{
        gameState.players.find(player => player.id === data.id).status="answered";
        if(data.correct){
            gameState.players.find(player => player.id === data.id).score++;
        }
        
        if(gameState.players.every(player=>player.status==="answered")){
            // end of game logic
            if(gameState.questionNumber==gameState.questions.length-1){
                setPlayerStatus("finished");
                io.emit("end_game",gameState.players);
                gameState = {...initialGameState};
                gameState.players = [];
            }
            //ongoing game logic
            else
            {
                setPlayerStatus("playing");
                gameState.questionNumber++;
                io.emit("nextQuestion",gameState.questionNumber);
            }
        } else {
            io.to(socket.id).emit("answer");
        }
    })
})

function startGame(){
    gameState.status = true;
    setPlayerStatus("playing");
    for(player of gameState.players){
        io.to(player.id).emit("start_quiz",{questions:gameState.questions,player:player});
    }
}
function setPlayerStatus(state){
    gameState.players.forEach(player=>player.status = state)
}