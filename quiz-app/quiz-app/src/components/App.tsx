import {useEffect,useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom"
import Homepage from './Homepage'
import Masterpage from "./Masterpage";
import { socketsService } from '../services/SocketsService';

import {io} from "socket.io-client";
import GameState from '../interfaces/GameState';
import Quiz from './Quiz';
import Scorepage from './Scorepage';
import Player from '../interfaces/Player';

const client = io('ws://127.0.0.1:8000');

function App() {
  const originalState={
    "player": {id:"",score:0,status:"",name:""},
    "playing": false,
    "questions":[],
    "questionNumber":0,
  }
  const navigate = useNavigate();
  const [gameState,setGameState] = useState<GameState>(originalState)
  const [finalPlayers,setFinalPlayers] = useState<Player[]>([]);

  useEffect(()=>{
    client.on("connect",()=>{
      client.on("player_joined",(player:any)=>{
        setGameState((gameState)=>{return{...gameState,player:player}});
        navigate("/quiz");
      })

      client.on("start_quiz",(data)=>{
        const player = data.player;
        setGameState((gameState)=>{return{...gameState,player:player,playing:true,questions:data.questions}});
      })

      client.on("error",(message:String)=>alert(message));

      client.on("answer",()=>{
        const player = gameState.player;
        player.status = "answered";
        setGameState((gameState)=>{return{...gameState,player:player}})
      })

      client.on("nextQuestion", (questionNumber)=>{
        
        const player = gameState.player;
        player.status = "playing";
        setGameState((gameState)=>{return{...gameState,player:player,questionNumber:questionNumber}})
      })

      client.on("master_joined",()=>{
        navigate("/admin");
      })

      client.on("end_game",(players)=>{
        setFinalPlayers(players);
        navigate("/scorepage")
        setGameState((gameState)=>{return{...originalState}})
      })

    })

  },[gameState])

  return (
    <Routes>
      <Route path="/" element={<Homepage client={client} gameState={gameState}/>}></Route>
      <Route path="/admin" element={<Masterpage client={client}/>}></Route>
      <Route path="/quiz" element={<Quiz client={client} gameState={gameState}/>}></Route>
      <Route path="/scorepage" element={<Scorepage client={client} finalPlayers={finalPlayers}/>}></Route>
    </Routes>
  );
}

export default App;
